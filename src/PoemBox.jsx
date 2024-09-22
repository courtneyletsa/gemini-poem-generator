import { useEffect, useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";

export default function PoemBox() {
    const [response, setResponse] = useState("");
    const [error, setError] = useState(null);
    const [currentTime, setCurrentTime] = useState(new Date());
    const fetchPoem = async () =>{
        try {
            const apiKey = process.env.REACT_APP_GEMINI_API_KEY;
            const genAI = new GoogleGenerativeAI(apiKey);
            const model = genAI.getGenerativeModel({model: 'gemini-1.5-flash'});
            const prompt = 'Write a poem about a cat';
            const result = await model.generateContent(prompt);
            const text = result.response.text();
            setResponse(text);
        } catch (err) {
            setError(err.message);
        }
    }
    
    useEffect(() => {
        // Fetch a poem on initial render
        fetchPoem();
      
        // Fetch a new poem every 30 seconds
        const poemIntervalId = setInterval(fetchPoem, 30000);
        return () => {
          clearInterval(poemIntervalId); // Cleanup poem interval on component unmount
        };
      }, [prompt]);

      return <div>{error ? <p>{error}</p> : <p>{response}</p>}</div>;
}