import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { setup, userFeedback, conversationHistory } = await req.json();
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    
    if (!LOVABLE_API_KEY) {
      throw new Error("LOVABLE_API_KEY is not configured");
    }

    const systemPrompt = `Você é um engenheiro de performance especializado em configuração de carros de corrida para simuladores. 
Sua função é analisar setups de carros e fornecer sugestões específicas e técnicas baseadas no feedback do piloto.

Quando o piloto descrever problemas como:
- Subesterço (understeer): Sugira reduzir pressão dos pneus dianteiros, aumentar ângulo de asa dianteira, amaciar suspensão traseira
- Sobreesterço (oversteer): Sugira aumentar pressão dos pneus traseiros, reduzir ângulo de asa traseira, endurecer suspensão traseira
- Perda de tração na aceleração: Ajuste diferencial, distribuição de freio, pressão dos pneus traseiros
- Instabilidade em alta velocidade: Ajuste aerodinâmica, altura do carro, rigidez das molas

Sempre forneça valores específicos e explique o raciocínio técnico por trás de cada sugestão.
Responda em português de forma clara e técnica.`;

    const messages = [
      { role: "system", content: systemPrompt },
      ...(conversationHistory || []),
      { 
        role: "user", 
        content: userFeedback 
          ? `Setup atual:\n${JSON.stringify(setup, null, 2)}\n\nFeedback do piloto: ${userFeedback}`
          : `Analise este setup e forneça uma avaliação inicial:\n${JSON.stringify(setup, null, 2)}`
      }
    ];

    console.log("Calling Lovable AI with messages:", messages);

    const requestBody: any = {
      model: "google/gemini-2.5-flash",
      messages,
      tools: [
        {
          type: "function",
          function: {
            name: "suggest_setup_changes",
            description: "Sugere alterações específicas para o setup do carro",
            parameters: {
              type: "object",
              properties: {
                explanation: {
                  type: "string",
                  description: "Explicação técnica detalhada das sugestões"
                },
                changes: {
                  type: "object",
                  description: "Alterações sugeridas organizadas por categoria",
                  properties: {
                    aero: { type: "object" },
                    suspension: { type: "object" },
                    tires: { type: "object" },
                    brake: { type: "object" },
                    differential: { type: "object" },
                    ffb: { type: "object" },
                    trackTemp: { type: "string" },
                    lapTime: { type: "string" }
                  }
                }
              },
              required: ["explanation", "changes"]
            }
          }
        }
      ],
      tool_choice: { type: "function", function: { name: "suggest_setup_changes" } }
    };

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestBody),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("AI gateway error:", response.status, errorText);
      
      if (response.status === 429) {
        return new Response(
          JSON.stringify({ error: "Limite de requisições excedido. Tente novamente em alguns instantes." }), 
          { status: 429, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      if (response.status === 402) {
        return new Response(
          JSON.stringify({ error: "Créditos insuficientes. Adicione créditos no painel." }), 
          { status: 402, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      
      throw new Error(`AI gateway error: ${response.status} - ${errorText}`);
    }

    const data = await response.json();
    console.log("AI response:", data);

    const toolCall = data.choices[0].message.tool_calls?.[0];
    let suggestion = data.choices[0].message.content;
    let suggestedChanges = null;

    if (toolCall && toolCall.function.name === "suggest_setup_changes") {
      try {
        const functionArgs = JSON.parse(toolCall.function.arguments);
        suggestion = functionArgs.explanation;
        suggestedChanges = functionArgs.changes;
      } catch (e) {
        console.error("Error parsing tool call arguments:", e);
      }
    }

    return new Response(
      JSON.stringify({ 
        suggestion,
        suggestedChanges,
        conversationHistory: [
          ...messages,
          { role: "assistant", content: suggestion }
        ]
      }),
      { headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );

  } catch (error) {
    console.error("Error in performance-engineer function:", error);
    return new Response(
      JSON.stringify({ error: error instanceof Error ? error.message : "Erro desconhecido" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
