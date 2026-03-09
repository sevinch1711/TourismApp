import { SYSTEM_INSTRUCTION, PLANNER_INSTRUCTION } from "../constants";
import { TripPreferences } from "../types";

const OPENROUTER_URL = "https://openrouter.ai/api/v1/chat/completions";

const MODELS = [
  "nousresearch/hermes-3-llama-3.1-405b:free",
  "arcee-ai/trinity-large-preview:free",
  "openai/gpt-oss-120b:free",
];

function getApiKey(): string {
  // Vite automatically injects variables starting with VITE_ into import.meta.env
  // @ts-ignore
  const apiKey = import.meta.env.VITE_OPENROUTER_API_KEY;
  if (!apiKey) {
    console.error("CRITICAL: VITE_OPENROUTER_API_KEY is missing from environment variables!");
    throw new Error("API Key is missing. Check .env.local file.");
  }
  return apiKey;
}

interface OpenRouterMessage {
  role: "system" | "user" | "assistant";
  content: string;
}

async function callOpenRouter(
  messages: OpenRouterMessage[],
  model: string
): Promise<string> {
  const apiKey = getApiKey();

  const response = await fetch(OPENROUTER_URL, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model,
      messages,
      temperature: 0.7,
      max_tokens: 2048,
    }),
  });

  if (!response.ok) {
    const errText = await response.text();
    throw new Error(`OpenRouter API error (${response.status}): ${errText}`);
  }

  const data = await response.json();

  if (data.error) {
    throw new Error(`OpenRouter error: ${data.error.message || JSON.stringify(data.error)}`);
  }

  const text = data.choices?.[0]?.message?.content;
  if (!text) {
    throw new Error("Empty response from OpenRouter");
  }

  return text;
}

/**
 * Multi-model fallback: ketma-ket sinab ko'radi, birinchi ishlagan modeldan javob qaytaradi.
 */
async function callWithFallback(messages: OpenRouterMessage[]): Promise<string> {
  let lastError: Error | null = null;

  for (const model of MODELS) {
    try {
      console.log(`Trying model: ${model}`);
      const result = await callOpenRouter(messages, model);
      return result;
    } catch (error) {
      console.warn(`Model ${model} failed:`, error);
      lastError = error as Error;
    }
  }

  throw lastError || new Error("All models failed");
}

/**
 * Chatbot uchun xabar yuborish (AIChat.tsx dan chaqiriladi)
 */
export const sendChatMessage = async (
  message: string,
  history: { role: string; content: string }[]
): Promise<string> => {
  try {
    const messages: OpenRouterMessage[] = [
      { role: "system", content: SYSTEM_INSTRUCTION },
      ...history.map((h) => ({
        role: (h.role === "user" ? "user" : "assistant") as "user" | "assistant",
        content: h.content,
      })),
      { role: "user", content: message },
    ];

    return await callWithFallback(messages);
  } catch (error) {
    console.error("Chat API Error:", error);
    return "Kechirasiz, tizimda xatolik yuz berdi. Iltimos, keyinroq urinib ko'ring.";
  }
};

/**
 * Trip Planner uchun reja generatsiya qilish (TripPlanner.tsx dan chaqiriladi)
 */
export const generateTripPlan = async (
  prefs: TripPreferences,
  lang: string
): Promise<string> => {
  try {
    const langName = lang === "uz" ? "O'zbek" : lang === "ru" ? "Русский" : "English";

    const prompt = `
Please generate a trip plan for Bukhara based on these preferences:
- Traveler Type: ${prefs.travelerType}
- Duration: ${prefs.duration} days
- Pace: ${prefs.pace}
- Interests: ${prefs.interests}
- Budget: ${prefs.budget}

IMPORTANT: The response MUST be entirely in ${langName} language.
`;

    const messages: OpenRouterMessage[] = [
      { role: "system", content: PLANNER_INSTRUCTION },
      { role: "user", content: prompt },
    ];

    return await callWithFallback(messages);
  } catch (error) {
    console.error("Planner Error:", error);
    return "Kechirasiz, sayohat rejasini tuzishda xatolik yuz berdi.";
  }
};
