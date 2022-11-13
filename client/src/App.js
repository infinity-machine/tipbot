import React from 'react';
import { useState } from 'react';

function App() {
  const [promptIndex, setPromptIndex] = useState(0);
  const promptArray = [
    'HOW MUCH MONEY WE TALKIN?',
    'HOW MANY EXPOS?',
    'ENTER HOURS WORKED FOR EACH EXPO',
  ];

  const [formValue, setFormValue] = useState('');

  const handleInputChange = (e) => {
    setFormValue(e.target.value)
  }

  const handleNext = () => {
    setFormValue('');
    setPromptIndex(promptIndex + 1);

  }

  const handleBack = () => {
    setFormValue('');
    setPromptIndex(promptIndex - 1)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('hi')
    handleNext()
  }

  return (
    <div>
      <p>{promptArray[promptIndex]}</p>
      <button onClick={handleBack}>BACK</button>
      <form onSubmit={handleSubmit}>
        <input onChange={handleInputChange} value={formValue}></input>
        <button onClick={handleSubmit}>NEXT</button>
      </form>
    </div>
  );
}

export default App;
