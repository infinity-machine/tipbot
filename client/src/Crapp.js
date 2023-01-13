import React from 'react';
import { useState } from 'react';

function App() {
  const promptArray = [
    'HOW MUCH MONEY WE TALKIN?',
    'HOW MANY EXPOS?',
    'ENTER HOURS WORKED FOR EACH EXPO',
    'DOES THIS LOOK RIGHT?'
  ];
  const [promptIndex, setPromptIndex] = useState(0);
  const [showForm, setShowForm] = useState('true');
  const [multipleInputs, setMultipleInputs] = useState(false);
  const [inputSlots, setInputSlots] = useState([]);
  const [formInput, setFormInput] = useState('');
  const [multiFormInput, setMultiFormInput] = useState({});
  const [dataObj, setDataObj] = useState({
    total_cash: null,
    expo_hours: []
  });

  function returnSum(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
      sum += array[i]
    }
    return sum
  }

  function splitTips(total_cash, hours_array) {
    let total_hours = returnSum(hours_array);
    let percent_array = [];
    for (let i = 0; i < hours_array.length; i++) {
      let percent = hours_array[i] / total_hours;
      percent_array.push(Number(percent.toFixed(2)));
    };
    let tips_array = [];
    for (let i = 0; i < percent_array.length; i++) {
      let tip = total_cash * percent_array[i];
      console.log(tip);
      tips_array.push(tip);
    };
    return tips_array;
  };

  const handleData = () => {
    if (promptIndex === 0) {
      setDataObj({ total_cash: formInput });
    };
    if (promptIndex === 1) {
      // HANDLE INPUT ERRORS HEREs
      setMultipleInputs(true);
      handleMultipleInputs(formInput);
    };
    if (promptIndex === 2) {
      setDataObj({ ...dataObj, expo_hours: multiFormInput });
      setMultipleInputs(false);
      setShowForm(false);
    }
    if (promptIndex === 3) {
      // splitTips(dataObj.total_cash, )
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
      {
        showForm ? (
          <div>
            <button onClick={handleBack}>BACK</button>
            <form onSubmit={handleSubmit}>
              {
                multipleInputs ? inputSlots.map((expo, index) => {
                  let index_num = index + 1
                  return <input key={index}
                    placeholder={`expo ${index} hours`}
                    value={multiFormInput.index_num}
                    name={'expo' + index_num}
                    onChange={handleMultiInputChange} />
                }) : <input onChange={handleInputChange} value={formInput} />
              }
              <button>NEXT</button>
            </form>
          </div>
        ) : (
          <div>
            <p>{dataObj.total_cash}</p>
            {
              Object.keys(dataObj.expo_hours).map((key) => {
                return <p key={key}>{key}: {dataObj.expo_hours[key]} HOURS</p>
              })
            }
          </div>
        )
      }

    </div>
  );
}

export default App;
