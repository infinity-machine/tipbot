import React, { useEffect } from 'react';
import { useState } from 'react';

function App() {
  const [promptIndex, setPromptIndex] = useState(0);
  const [multipleInputs, setMultipleInputs] = useState(false)
  const promptArray = [
    'HOW MUCH MONEY WE TALKIN?',
    'HOW MANY EXPOS?',
    'ENTER HOURS WORKED FOR EACH EXPO',
  ];
  const [inputSlots, setInputSlots] = useState([]);
  const [formInput, setFormInput] = useState('');
  const [multiFormInput, setMultiFormInput] = useState({});
  const [dataObj, setDataObj] = useState({
    total_cash: null,
    expo_hours: []
  });

  const handleData = () => {
    console.log(dataObj)
    if (promptIndex === 0) {
      setDataObj({ total_cash: formInput });
    };
    if (promptIndex === 1) {
      // HANDLE INPUT ERRORS HEREs
      setMultipleInputs(true);
      handleMultipleInputs(formInput);
    };
    if (promptIndex === 2) {
      setDataObj({...dataObj, expo_hours: multiFormInput});
      setMultipleInputs(false);
    }
    if (promptIndex === 3) {
      console.log(dataObj);
    }
  }

  const handleNext = () => {
    setFormInput('');
    setPromptIndex(promptIndex + 1);
  };

  const handleBack = () => {
    setFormInput('');
    setPromptIndex(promptIndex - 1);
  };

  const handleInputChange = (e) => {
    setFormInput(e.target.value);
  };

  const handleMultiInputChange = (e) => {
    setMultiFormInput({
        ...multiFormInput,
        [e.target.name]: e.target.value
    });
}

  const handleSubmit = (e) => {
    e.preventDefault();
    handleData()
    handleNext();
  };

  const handleMultipleInputs = (amount_expos) => {
    for (let i = 0; i < amount_expos; i++) {
      setInputSlots(current => [...current, true])
    }
  }


  return (
    <div>
      <p>{promptArray[promptIndex]}</p>
      <button onClick={handleBack}>BACK</button>
      <form onSubmit={handleSubmit}>
        {
          multipleInputs ? inputSlots.map((expo, index) => {
            let index_num = index + 1
            return <input key={index} 
              placeholder={`expo ${index} hours`} 
              value={multiFormInput.index_num}
              name={'expo' + index_num} 
              onChange={handleMultiInputChange}/>
          }) : <input onChange={handleInputChange} value={formInput}/>
        }
        <button>NEXT</button>
      </form>

    </div>
  );
}

export default App;
