import { useState } from 'react'
import './App.css'
import { GoogleGenerativeAI } from "@google/generative-ai";
import InputField from './components/InputField'
import PoemDisplay from './components/PoemDisplay'

function App() {
  //This is a state variable for holding your input
  const [input, setInput] = useState('');
  // this will hold the response - which is the poem
  const [response, setResponse] = useState("");
  // if there is an error we will hold it in this one
  const [error, setError] = useState(null);

  const generatePoem = async () =>{
      try {
          const apiKey =  import.meta.env.VITE_GEMINI_API_KEY;
          // console.log('the apikey is:', apiKey);

       
          const genAI = new GoogleGenerativeAI(apiKey);
          const model = genAI.getGenerativeModel({model: 'gemini-1.5-flash'});
          const prompt = input;
          const result = await model.generateContent(prompt);
          const text = result.response.text();
          console.log(text)
          setResponse(text);
      } catch (err) {
          //if poem generation fails, set an alert with message - error generating the poem
          alert("error generating the poem")
          //as a developer you check the error from the browser console
          console.log(err.message)
          setError(err.message);
      }
  }



  return (
    <div className="App">
      <h2>Gemini poem Generator</h2>
      {/* here as you are typing in the input field, the function setInput updates the value of input variable */}
      <InputField value={input} onChange={(e) => setInput(e.target.value)}/>
      {/* on button click a function generatePoem is called */}
      <button onClick={generatePoem}>Generate Poem</button>

      {response && <PoemDisplay poem={response} />}
    </div>
  )
}

export default App
