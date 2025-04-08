import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI();

async function run() {
  const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });
  const chat = model.startChat({
    history: [
      {
        role: "user",
        parts: [{text:"Hello I Have 2 dogs"}],
      },
      {
        role: "model",
        parts: [{text:"Great to meet you"}],
      },
    ],
  });

  const msg = "How many paw  are in my house";

  const result = await chat.sendMessage(msg);
  const response = await result.response;
  console.log(response.text())
}

run();
