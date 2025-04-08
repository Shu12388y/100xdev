import { GoogleGenerativeAI } from "@google/generative-ai";



const genAI = new GoogleGenerativeAI();




async function run() {
    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });
    const prompt = `Write a story about a magic  backpack`
    const result  = await model.generateContent(prompt)
    const response = await result.response
    console.log(response.text())
}


run()