import type { RequestEventBase } from "@builder.io/qwik-city";
import "openai/shims/web";
import { OpenAI } from "openai";
// import fetchAdapter from "@vespaiach/axios-fetch-adapter";

let cached: OpenAI | null = null;
export function createOpenAI(req: RequestEventBase) {
  if (cached) {
    return cached;
  }
  // const configuration = new Configuration({
  //   apiKey: env.OPENAI_API_KEY,
  //   baseOptions: {
  //     adapter: fetchAdapter
  //   }
  // });

  console.log(req.env.get("OPENAI_API_KEY"));
  cached = new OpenAI({
    baseURL: "https://openrouter.ai/api/v1",
    apiKey: req.env.get("OPENAI_API_KEY"),
    defaultHeaders: {
    "HTTP-Referer": "https://qwik-v0.leeapp.cn",
    "X-Title": "qwik-v0",
  },
  });
  return cached;
}
