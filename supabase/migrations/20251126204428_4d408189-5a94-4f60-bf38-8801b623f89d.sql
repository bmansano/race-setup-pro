-- Create setups table
CREATE TABLE public.setups (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL,
  name TEXT NOT NULL,
  simulator TEXT NOT NULL,
  car TEXT NOT NULL,
  track TEXT NOT NULL,
  category TEXT NOT NULL,
  condition TEXT NOT NULL,
  track_temp TEXT,
  lap_time TEXT,
  configuration JSONB NOT NULL,
  comment TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create setup versions table for history
CREATE TABLE public.setup_versions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  setup_id UUID NOT NULL REFERENCES public.setups(id) ON DELETE CASCADE,
  version_number INTEGER NOT NULL,
  configuration JSONB NOT NULL,
  comment TEXT,
  track_temp TEXT,
  lap_time TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  created_by UUID NOT NULL
);

-- Enable Row Level Security
ALTER TABLE public.setups ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.setup_versions ENABLE ROW LEVEL SECURITY;

-- RLS Policies for setups
CREATE POLICY "Users can view their own setups"
ON public.setups
FOR SELECT
USING (auth.uid() = user_id);

CREATE POLICY "Users can create their own setups"
ON public.setups
FOR INSERT
WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own setups"
ON public.setups
FOR UPDATE
USING (auth.uid() = user_id);

CREATE POLICY "Users can delete their own setups"
ON public.setups
FOR DELETE
USING (auth.uid() = user_id);

-- RLS Policies for setup_versions
CREATE POLICY "Users can view versions of their own setups"
ON public.setup_versions
FOR SELECT
USING (
  EXISTS (
    SELECT 1 FROM public.setups
    WHERE setups.id = setup_versions.setup_id
    AND setups.user_id = auth.uid()
  )
);

CREATE POLICY "Users can create versions for their own setups"
ON public.setup_versions
FOR INSERT
WITH CHECK (
  auth.uid() = created_by AND
  EXISTS (
    SELECT 1 FROM public.setups
    WHERE setups.id = setup_versions.setup_id
    AND setups.user_id = auth.uid()
  )
);

-- Create function to update updated_at timestamp
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_setups_updated_at
BEFORE UPDATE ON public.setups
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

-- Create function to automatically create version on setup update
CREATE OR REPLACE FUNCTION public.create_setup_version()
RETURNS TRIGGER AS $$
BEGIN
  -- Only create version if configuration changed
  IF OLD.configuration IS DISTINCT FROM NEW.configuration THEN
    INSERT INTO public.setup_versions (
      setup_id,
      version_number,
      configuration,
      comment,
      track_temp,
      lap_time,
      created_by
    )
    SELECT
      NEW.id,
      COALESCE(MAX(version_number), 0) + 1,
      OLD.configuration,
      OLD.comment,
      OLD.track_temp,
      OLD.lap_time,
      NEW.user_id
    FROM public.setup_versions
    WHERE setup_id = NEW.id;
  END IF;
  
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

-- Create trigger to save version before update
CREATE TRIGGER save_setup_version_before_update
BEFORE UPDATE ON public.setups
FOR EACH ROW
EXECUTE FUNCTION public.create_setup_version();