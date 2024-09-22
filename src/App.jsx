import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PoemBox from './PoemBox'
import InputField from './InputField'
import PoemDisplay from './PoemDisplay'

function App() {
  const [input, setInput] = useState('');
  const [submittedPrompt, setSubmittedPrompt] = useState('');

  const generatePoem = async () => {
    try {
      // Simulating API call to generate poem
      const response = await fetch('/api/generate-poem', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt: input }),
      });
      const data = await response.json();
      setPoem(data.poem);
    } catch (error) {
      console.error('Error generating poem:', error);
      alert('Sorry, unable to generate poem at this time.');
    }
  };

  return (
    <div className="App">
      <h2>Gemini poem Generator</h2>
      <InputField value={input} onChange={(e) => setInput(e.target.value)}/>
      <button onClick={generatePoem}>Generate Poem</button>
      {/* {submittedPrompt && <PoemBox prompt={submittedPrompt} />} */}
      <PoemDisplay />
      {/* <PoemBox /> */}
    </div>
  )
}

export default App
