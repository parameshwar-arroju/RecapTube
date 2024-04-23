

// const { GoogleGenerativeAI } = require("@google/generative-ai");

// // Access your API key as an environment variable (see "Set up your API key" above)
// const genAI = new GoogleGenerativeAI(process.env.API_KEY);

// app.get("/", async (req, res) => {
//     // For text-only input, use the gemini-pro model
//     const model = genAI.getGenerativeModel({ model: "gemini-pro" });

//     const prompt = "Write a quoatation about the meaning of life in 10 lines";

//     //...
//     res.writeHead(200, {
//         'Content-Type': 'text/plain; charset=utf-8',
//         'Transfer-Encoding': 'chunked',
//         'X-Content-Type-Options': 'nosniff'
//     });

//     const result = await model.generateContentStream(prompt);

//     let text = "";
//     for await (const chunk of result.stream) {
//         const chunkText = chunk.text();
//         console.log(chunkText);
//         res.write(chunkText);
//         text += chunkText;
//     }
//     res.end();
// });

// app.listen(3000, () => {
//     console.log("server started");
// });
