const defaultModels = [
    {
        name: "GPT-4o-agent",
        description: "GPT-4o LLM by OpenAI",
        apiName: "OpenAI",
        systemPrompt: "You are a helpful assistant.",
        curl_command: `curl https://api.openai.com/v1/chat/completions \\
            -H "Content-Type: application/json" \\
            -H "Authorization: Bearer $$apiName$$" \\
            -d '{
                "model": "$$modelName$$",
                "messages": [{"role": "system", "content": "$$systemPrompt$$"},{"role": "user", "content": "$$userPrompt$$"}],
                "temperature": 0.7
            }'`,
        responseParser: "choices.0.message.content",
        dateCreated: "2023-01-15"
    }
  ];
  
  export { defaultModels };