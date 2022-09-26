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
  const [multipleFormValue, setMultipleFormValue] = useState({})
  const [totalAmount, setTotalAmount] = useState(0);
  const [empAmount, setEmpAmount] = useState(0);
  const [empHours, setEmpHours] = useState([]);
  const [multipleInput, setMultipleInput] = useState(false)

  const handleInputChange = (e) => {
    setFormValue(e.target.value)
  }

  const handleNext = (e) => {
    e.preventDefault();
    setFormValue('');
    setPromptIndex(promptIndex + 1);
    // handleSetValue(formValue);
  }

  const handleBack = (e) => {
    e.preventDefault();
    setFormValue('');
    setPromptIndex(promptIndex - 1)
  }

  // const handleSetValue = (value) => {
  //   switch (promptIndex) {
  //     case 0:
  //       setTotalAmount(value);
  //       break;
  //     case 1:
  //       for (let i = 0; i < value; i++) {
  //         empHours.push(0);
  //       };
  //       setMultipleInput(true);
  //       break;
  //     case 2:
  //       setEmpHours(...value);
  //       break;
  //     case 3:
  //       console.log(empHours);
  //       break;
  //   }
  // }

  return (
    <div>
      <p>{promptArray[promptIndex]}</p>
      <form>
        <button onClick={handleBack}>BACK</button>
        {
          multipleInput ?
            empHours.map((input, index) => {
              return <input key={index} placeholder={`EMPLOYEE ${index + 1} HOURS`}></input>
            }) :
            <input onChange={handleInputChange} value={formValue} placeholder="AMOUNT"></input>
        }
        <button onClick={handleNext}>NEXT</button>
      </form>
    </div>
  );
}

export default App;
