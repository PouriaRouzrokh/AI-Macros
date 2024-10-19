import { OPENAI_API_KEY } from './personal_apis.js';

const defaultApis = [
    {
        provider: "OpenAI",
        description: "GPT-3.5 and GPT-4 models for natural language processing",
        apiKey: OPENAI_API_KEY,
        dateCreated: "2023-01-15"
    },
    {
        provider: "Anthropic",
        description: "Claude AI models for various language tasks",
        apiKey: "????",
        dateCreated: "2023-03-22"
    },
    {
        provider: "Google",
        description: "PaLM API for text generation and analysis",
        apiKey: "????",
        dateCreated: "2023-05-10"
    }
  ];
  
  export { defaultApis };