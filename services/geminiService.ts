import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY || '';

// Initialize Gemini client safely
const getClient = () => {
  if (!apiKey) {
    console.error("API Key is missing");
    return null;
  }
  return new GoogleGenAI({ apiKey });
};

export const generateMarketingCopy = async (dishName: string, ingredients: string): Promise<string> => {
  const ai = getClient();
  if (!ai) return "Erro: Chave de API ausente.";

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: `Atue como um especialista em engenharia de cardápio e copywriting para delivery (iFood/Rappi).
      
      Tarefa: Escreva uma descrição altamente vendedora para o seguinte prato.
      Prato: ${dishName}
      Ingredientes: ${ingredients}
      
      Diretrizes:
      - Idioma: Português do Brasil.
      - Objetivo: Gerar desejo imediato e fome.
      - Estilo: Descritivo, focado em texturas (crocante, suculento, derretido, defumado) e sabores reais.
      - Evite: Linguagem poética excessiva, termos abstratos ou fantasiosos. Seja direto e sensorial.
      - Tamanho: Curto e otimizado para leitura rápida em mobile (máximo 35 palavras).
      - Sem hashtags.`,
      config: {
        systemInstruction: "Você é um copywriter especialista em vendas de delivery. Seu texto deve fazer o cliente salivar e clicar em comprar imediatamente. Use gatilhos mentais de paladar e evite exageros poéticos.",
        temperature: 0.6,
      }
    });

    return response.text || "Não foi possível gerar a descrição.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Sistema indisponível no momento.";
  }
};