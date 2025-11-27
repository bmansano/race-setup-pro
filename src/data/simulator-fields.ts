// Definições de campos específicos para cada simulador

export interface SetupField {
  name: string;
  label: string;
  category: 'aero' | 'suspension' | 'tires' | 'brakes' | 'differential';
}

export interface SimulatorFields {
  aero: SetupField[];
  suspension: SetupField[];
  tires: SetupField[];
  brakes: SetupField[];
  differential: SetupField[];
}

// iRacing - Campos específicos para diferentes tipos de carros
export const iRacingFields: SimulatorFields = {
  aero: [
    { name: 'frontWing', label: 'Front Wing', category: 'aero' },
    { name: 'rearWing', label: 'Rear Wing', category: 'aero' },
    { name: 'rideHeight', label: 'Ride Height', category: 'aero' },
    { name: 'splitter', label: 'Splitter', category: 'aero' },
    { name: 'rearDiffuser', label: 'Rear Diffuser', category: 'aero' },
  ],
  suspension: [
    { name: 'frontSpringRate', label: 'Front Spring Rate', category: 'suspension' },
    { name: 'rearSpringRate', label: 'Rear Spring Rate', category: 'suspension' },
    { name: 'frontARB', label: 'Front Anti-Roll Bar', category: 'suspension' },
    { name: 'rearARB', label: 'Rear Anti-Roll Bar', category: 'suspension' },
    { name: 'frontDamperCompression', label: 'Front Damper Compression', category: 'suspension' },
    { name: 'frontDamperRebound', label: 'Front Damper Rebound', category: 'suspension' },
    { name: 'rearDamperCompression', label: 'Rear Damper Compression', category: 'suspension' },
    { name: 'rearDamperRebound', label: 'Rear Damper Rebound', category: 'suspension' },
    { name: 'frontCamber', label: 'Front Camber', category: 'suspension' },
    { name: 'rearCamber', label: 'Rear Camber', category: 'suspension' },
    { name: 'frontToe', label: 'Front Toe', category: 'suspension' },
    { name: 'rearToe', label: 'Rear Toe', category: 'suspension' },
  ],
  tires: [
    { name: 'frontLeftPressure', label: 'Front Left Pressure', category: 'tires' },
    { name: 'frontRightPressure', label: 'Front Right Pressure', category: 'tires' },
    { name: 'rearLeftPressure', label: 'Rear Left Pressure', category: 'tires' },
    { name: 'rearRightPressure', label: 'Rear Right Pressure', category: 'tires' },
    { name: 'tireCompound', label: 'Tire Compound', category: 'tires' },
  ],
  brakes: [
    { name: 'brakeBias', label: 'Brake Bias', category: 'brakes' },
    { name: 'brakeDiscType', label: 'Brake Disc Type', category: 'brakes' },
    { name: 'brakePadType', label: 'Brake Pad Type', category: 'brakes' },
  ],
  differential: [
    { name: 'preload', label: 'Preload', category: 'differential' },
    { name: 'powerRamp', label: 'Power Ramp', category: 'differential' },
    { name: 'coastRamp', label: 'Coast Ramp', category: 'differential' },
  ],
};

// Automobilista 2
export const automobilista2Fields: SimulatorFields = {
  aero: [
    { name: 'frontWing', label: 'Front Wing', category: 'aero' },
    { name: 'rearWing', label: 'Rear Wing', category: 'aero' },
    { name: 'rideHeight', label: 'Ride Height', category: 'aero' },
    { name: 'brakeDucts', label: 'Brake Ducts', category: 'aero' },
  ],
  suspension: [
    { name: 'frontSpringRate', label: 'Front Spring Rate', category: 'suspension' },
    { name: 'rearSpringRate', label: 'Rear Spring Rate', category: 'suspension' },
    { name: 'frontARB', label: 'Front Anti-Roll Bar', category: 'suspension' },
    { name: 'rearARB', label: 'Rear Anti-Roll Bar', category: 'suspension' },
    { name: 'frontBumpStiffness', label: 'Front Bump Stiffness', category: 'suspension' },
    { name: 'frontReboundStiffness', label: 'Front Rebound Stiffness', category: 'suspension' },
    { name: 'rearBumpStiffness', label: 'Rear Bump Stiffness', category: 'suspension' },
    { name: 'rearReboundStiffness', label: 'Rear Rebound Stiffness', category: 'suspension' },
    { name: 'frontCamber', label: 'Front Camber', category: 'suspension' },
    { name: 'rearCamber', label: 'Rear Camber', category: 'suspension' },
    { name: 'frontToe', label: 'Front Toe', category: 'suspension' },
    { name: 'rearToe', label: 'Rear Toe', category: 'suspension' },
  ],
  tires: [
    { name: 'frontLeftPressure', label: 'Front Left Pressure', category: 'tires' },
    { name: 'frontRightPressure', label: 'Front Right Pressure', category: 'tires' },
    { name: 'rearLeftPressure', label: 'Rear Left Pressure', category: 'tires' },
    { name: 'rearRightPressure', label: 'Rear Right Pressure', category: 'tires' },
    { name: 'tireCompound', label: 'Tire Compound', category: 'tires' },
  ],
  brakes: [
    { name: 'brakeBias', label: 'Brake Bias', category: 'brakes' },
    { name: 'brakePressure', label: 'Brake Pressure', category: 'brakes' },
  ],
  differential: [
    { name: 'preload', label: 'Preload', category: 'differential' },
    { name: 'powerSetting', label: 'Power Setting', category: 'differential' },
    { name: 'coastSetting', label: 'Coast Setting', category: 'differential' },
  ],
};

// Assetto Corsa Competizione
export const accFields: SimulatorFields = {
  aero: [
    { name: 'frontWing', label: 'Front Wing', category: 'aero' },
    { name: 'rearWing', label: 'Rear Wing', category: 'aero' },
    { name: 'frontRideHeight', label: 'Front Ride Height', category: 'aero' },
    { name: 'rearRideHeight', label: 'Rear Ride Height', category: 'aero' },
    { name: 'brakeDucts', label: 'Brake Ducts', category: 'aero' },
  ],
  suspension: [
    { name: 'frontWheelRate', label: 'Front Wheel Rate', category: 'suspension' },
    { name: 'rearWheelRate', label: 'Rear Wheel Rate', category: 'suspension' },
    { name: 'frontBumpStopRate', label: 'Front Bump Stop Rate', category: 'suspension' },
    { name: 'rearBumpStopRate', label: 'Rear Bump Stop Rate', category: 'suspension' },
    { name: 'frontBumpStopRange', label: 'Front Bump Stop Range', category: 'suspension' },
    { name: 'rearBumpStopRange', label: 'Rear Bump Stop Range', category: 'suspension' },
    { name: 'frontARB', label: 'Front Anti-Roll Bar', category: 'suspension' },
    { name: 'rearARB', label: 'Rear Anti-Roll Bar', category: 'suspension' },
    { name: 'frontDamperBumpSlow', label: 'Front Damper Bump Slow', category: 'suspension' },
    { name: 'frontDamperBumpFast', label: 'Front Damper Bump Fast', category: 'suspension' },
    { name: 'frontDamperReboundSlow', label: 'Front Damper Rebound Slow', category: 'suspension' },
    { name: 'frontDamperReboundFast', label: 'Front Damper Rebound Fast', category: 'suspension' },
    { name: 'rearDamperBumpSlow', label: 'Rear Damper Bump Slow', category: 'suspension' },
    { name: 'rearDamperBumpFast', label: 'Rear Damper Bump Fast', category: 'suspension' },
    { name: 'rearDamperReboundSlow', label: 'Rear Damper Rebound Slow', category: 'suspension' },
    { name: 'rearDamperReboundFast', label: 'Rear Damper Rebound Fast', category: 'suspension' },
    { name: 'frontCamber', label: 'Front Camber', category: 'suspension' },
    { name: 'rearCamber', label: 'Rear Camber', category: 'suspension' },
    { name: 'frontToe', label: 'Front Toe', category: 'suspension' },
    { name: 'rearToe', label: 'Rear Toe', category: 'suspension' },
  ],
  tires: [
    { name: 'frontLeftPressure', label: 'Front Left Pressure', category: 'tires' },
    { name: 'frontRightPressure', label: 'Front Right Pressure', category: 'tires' },
    { name: 'rearLeftPressure', label: 'Rear Left Pressure', category: 'tires' },
    { name: 'rearRightPressure', label: 'Rear Right Pressure', category: 'tires' },
    { name: 'frontToeIn', label: 'Front Toe In', category: 'tires' },
    { name: 'rearToeIn', label: 'Rear Toe In', category: 'tires' },
    { name: 'frontCaster', label: 'Front Caster', category: 'tires' },
  ],
  brakes: [
    { name: 'brakeBias', label: 'Brake Bias', category: 'brakes' },
    { name: 'frontBrakePadType', label: 'Front Brake Pad Type', category: 'brakes' },
    { name: 'rearBrakePadType', label: 'Rear Brake Pad Type', category: 'brakes' },
  ],
  differential: [
    { name: 'preload', label: 'Preload', category: 'differential' },
  ],
};

// Assetto Corsa EVO
export const assettoCornaEVOFields: SimulatorFields = {
  aero: [
    { name: 'frontWing', label: 'Front Wing', category: 'aero' },
    { name: 'rearWing', label: 'Rear Wing', category: 'aero' },
    { name: 'rideHeight', label: 'Ride Height', category: 'aero' },
  ],
  suspension: [
    { name: 'frontSpringRate', label: 'Front Spring Rate', category: 'suspension' },
    { name: 'rearSpringRate', label: 'Rear Spring Rate', category: 'suspension' },
    { name: 'frontARB', label: 'Front Anti-Roll Bar', category: 'suspension' },
    { name: 'rearARB', label: 'Rear Anti-Roll Bar', category: 'suspension' },
    { name: 'frontDamperBump', label: 'Front Damper Bump', category: 'suspension' },
    { name: 'frontDamperRebound', label: 'Front Damper Rebound', category: 'suspension' },
    { name: 'rearDamperBump', label: 'Rear Damper Bump', category: 'suspension' },
    { name: 'rearDamperRebound', label: 'Rear Damper Rebound', category: 'suspension' },
    { name: 'frontCamber', label: 'Front Camber', category: 'suspension' },
    { name: 'rearCamber', label: 'Rear Camber', category: 'suspension' },
    { name: 'frontToe', label: 'Front Toe', category: 'suspension' },
    { name: 'rearToe', label: 'Rear Toe', category: 'suspension' },
  ],
  tires: [
    { name: 'frontLeftPressure', label: 'Front Left Pressure', category: 'tires' },
    { name: 'frontRightPressure', label: 'Front Right Pressure', category: 'tires' },
    { name: 'rearLeftPressure', label: 'Rear Left Pressure', category: 'tires' },
    { name: 'rearRightPressure', label: 'Rear Right Pressure', category: 'tires' },
  ],
  brakes: [
    { name: 'brakeBias', label: 'Brake Bias', category: 'brakes' },
  ],
  differential: [
    { name: 'preload', label: 'Preload', category: 'differential' },
    { name: 'power', label: 'Power', category: 'differential' },
    { name: 'coast', label: 'Coast', category: 'differential' },
  ],
};

// RaceRoom Racing Experience
export const raceroomFields: SimulatorFields = {
  aero: [
    { name: 'frontWing', label: 'Front Wing', category: 'aero' },
    { name: 'rearWing', label: 'Rear Wing', category: 'aero' },
    { name: 'rideHeight', label: 'Ride Height', category: 'aero' },
  ],
  suspension: [
    { name: 'frontSpringRate', label: 'Front Spring Rate', category: 'suspension' },
    { name: 'rearSpringRate', label: 'Rear Spring Rate', category: 'suspension' },
    { name: 'frontARB', label: 'Front Anti-Roll Bar', category: 'suspension' },
    { name: 'rearARB', label: 'Rear Anti-Roll Bar', category: 'suspension' },
    { name: 'frontBumpStiffness', label: 'Front Bump Stiffness', category: 'suspension' },
    { name: 'frontReboundStiffness', label: 'Front Rebound Stiffness', category: 'suspension' },
    { name: 'rearBumpStiffness', label: 'Rear Bump Stiffness', category: 'suspension' },
    { name: 'rearReboundStiffness', label: 'Rear Rebound Stiffness', category: 'suspension' },
    { name: 'frontCamber', label: 'Front Camber', category: 'suspension' },
    { name: 'rearCamber', label: 'Rear Camber', category: 'suspension' },
    { name: 'frontToe', label: 'Front Toe', category: 'suspension' },
    { name: 'rearToe', label: 'Rear Toe', category: 'suspension' },
  ],
  tires: [
    { name: 'frontLeftPressure', label: 'Front Left Pressure', category: 'tires' },
    { name: 'frontRightPressure', label: 'Front Right Pressure', category: 'tires' },
    { name: 'rearLeftPressure', label: 'Rear Left Pressure', category: 'tires' },
    { name: 'rearRightPressure', label: 'Rear Right Pressure', category: 'tires' },
  ],
  brakes: [
    { name: 'brakeBias', label: 'Brake Bias', category: 'brakes' },
    { name: 'brakePressure', label: 'Brake Pressure', category: 'brakes' },
  ],
  differential: [
    { name: 'preload', label: 'Preload', category: 'differential' },
    { name: 'powerLock', label: 'Power Lock', category: 'differential' },
    { name: 'coastLock', label: 'Coast Lock', category: 'differential' },
  ],
};

// Le Mans Ultimate
export const leMansUltimateFields: SimulatorFields = {
  aero: [
    { name: 'frontWing', label: 'Front Wing', category: 'aero' },
    { name: 'rearWing', label: 'Rear Wing', category: 'aero' },
    { name: 'frontRideHeight', label: 'Front Ride Height', category: 'aero' },
    { name: 'rearRideHeight', label: 'Rear Ride Height', category: 'aero' },
    { name: 'brakeDucts', label: 'Brake Ducts', category: 'aero' },
  ],
  suspension: [
    { name: 'frontSpringRate', label: 'Front Spring Rate', category: 'suspension' },
    { name: 'rearSpringRate', label: 'Rear Spring Rate', category: 'suspension' },
    { name: 'frontARB', label: 'Front Anti-Roll Bar', category: 'suspension' },
    { name: 'rearARB', label: 'Rear Anti-Roll Bar', category: 'suspension' },
    { name: 'frontBumpStiffness', label: 'Front Bump Stiffness', category: 'suspension' },
    { name: 'frontReboundStiffness', label: 'Front Rebound Stiffness', category: 'suspension' },
    { name: 'rearBumpStiffness', label: 'Rear Bump Stiffness', category: 'suspension' },
    { name: 'rearReboundStiffness', label: 'Rear Rebound Stiffness', category: 'suspension' },
    { name: 'frontCamber', label: 'Front Camber', category: 'suspension' },
    { name: 'rearCamber', label: 'Rear Camber', category: 'suspension' },
    { name: 'frontToe', label: 'Front Toe', category: 'suspension' },
    { name: 'rearToe', label: 'Rear Toe', category: 'suspension' },
  ],
  tires: [
    { name: 'frontLeftPressure', label: 'Front Left Pressure', category: 'tires' },
    { name: 'frontRightPressure', label: 'Front Right Pressure', category: 'tires' },
    { name: 'rearLeftPressure', label: 'Rear Left Pressure', category: 'tires' },
    { name: 'rearRightPressure', label: 'Rear Right Pressure', category: 'tires' },
    { name: 'tireCompound', label: 'Tire Compound', category: 'tires' },
  ],
  brakes: [
    { name: 'brakeBias', label: 'Brake Bias', category: 'brakes' },
    { name: 'frontBrakePressure', label: 'Front Brake Pressure', category: 'brakes' },
    { name: 'rearBrakePressure', label: 'Rear Brake Pressure', category: 'brakes' },
  ],
  differential: [
    { name: 'preload', label: 'Preload', category: 'differential' },
    { name: 'powerRamp', label: 'Power Ramp', category: 'differential' },
    { name: 'coastRamp', label: 'Coast Ramp', category: 'differential' },
  ],
};

// Mapa de simuladores para seus campos específicos
export const simulatorFieldsMap: Record<string, SimulatorFields> = {
  'iRacing': iRacingFields,
  'Automobilista 2': automobilista2Fields,
  'Assetto Corsa Competizione': accFields,
  'Assetto Corsa EVO': assettoCornaEVOFields,
  'RaceRoom Racing Experience': raceroomFields,
  'Le Mans Ultimate': leMansUltimateFields,
};

// Função para obter campos de um simulador específico
export const getSimulatorFields = (simulator: string): SimulatorFields => {
  return simulatorFieldsMap[simulator] || iRacingFields; // Default para iRacing se não encontrar
};
