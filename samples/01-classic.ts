import { ChatPromptTemplate } from "@langchain/core/prompts";
import { AzureChatOpenAI } from "@langchain/openai";

const model = new AzureChatOpenAI();

const chunks = await ChatPromptTemplate.fromMessages([["human", "{input}"]])
  .pipe(model)
  .stream({ input: "Say hello in 5 different language, one per line" });

for await (const chunk of chunks) {
  if (chunk.content) {
    process.stdout.write(chunk.content as string);
  }
}
