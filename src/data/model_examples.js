const defaultModels = [
    {
        name: "OpenAI/GPT-4o",
        description: "Base GPT-4o LLM by OpenAI",
        apiName: "AI Macros",
        baseModel: "gpt-4o",
        curl_command: `curl https://api.openai.com/v1/chat/completions \\
            -H "Content-Type: application/json" \\
            -H "Authorization: Bearer $$apiName$$" \\
            -d '{
                "model": "$$modelName$$",
                "messages": [{"role": "system", "content": "$$systemPrompt$$"},{"role": "user", "content": "$$userPrompt$$"}],
                "temperature": $$temperature$$
            }'`,
        responseParser: "choices.0.message.content",
        dateCreated: "2023-01-15"
    }
  ];
  
  export { defaultModels };