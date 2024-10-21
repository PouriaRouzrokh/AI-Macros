import { OPENAI_API_KEY } from './personal_apis.js';

const defaultApis = [
    {
        name: "AI Macros",
        description: "Your AI Macros API key.",
        apiKey: "SAMPLE_AI_MACROS_API_KEY",
        dateCreated: "2024-01-01"
    },
    {
        name: "OpenAI",
        description: "Edit to enter your API key.",
        apiKey: OPENAI_API_KEY,
        dateCreated: "2023-01-15"
    },
    {
        name: "Anthropic",
        description: "Edit to enter your API key.",
        apiKey: "????",
        dateCreated: "2023-03-22"
    },
    {
        name: "Google",
        description: "Edit to enter your API key.",
        apiKey: "????",
        dateCreated: "2023-05-10"
    }
  ];
  
  export { defaultApis };