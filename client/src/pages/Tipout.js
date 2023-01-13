import React from 'react'
import { useState } from 'react';
import { splitTips } from '../utils/functions';

const Tipout = () => {
    const promptArray = [
        'Total cash tips for shift?',
        'How many people?',
        'Enter hours worked for each person on shift',
        'Does this look right?'
    ];
    const [promptIndex, setPromptIndex] = useState(0);
    const [multipleInputs, setMultipleInputs] = useState(false);
    const [amountEmps, setAmountEmps] = useState([]);
    const [formInput, setFormInput] = useState('');
    const [totalCash, setTotalCash] = useState(0);
    const [empHours, setEmpHours] = useState({});

    const handleMultipleInputs = (inputs) => {
        console.log(inputs)
        for (let i = 0; i < inputs; i++) {
            setAmountEmps(state => [...state, true]);
        }
    }

    const handleMultiInputChange = (e) => {
        setFormInput({
            ...formInput,
            [e.target.name]: e.target.value
        });
    }

    const handleInputChange = (e) => {
        setFormInput(e.target.value);
    }

    const handleNext = (e) => {
        e.preventDefault();
        setFormInput('');
        setPromptIndex(promptIndex + 1);

        if (promptIndex === 0) {
            setTotalCash(formInput)
        };
        if (promptIndex === 1) {
            setMultipleInputs(true);
            handleMultipleInputs(formInput);
        };
        if (promptIndex === 2) {
            setMultipleInputs(false);
            setEmpHours(formInput);
        }
        if (promptIndex === 3) {
            splitTips(totalCash, empHours);
        }
    }

    const handleBack = (e) => {
        e.preventDefault();
        setFormInput('');
        setPromptIndex(promptIndex - 1);
    }


    return (
        <div>
            <p>{promptArray[promptIndex]}</p>
            <div>
                <form>
                    <button onClick={handleBack}>BACK</button>
                    {
                        multipleInputs ? (
                            amountEmps.map((data, index) => {
                                const i = index + 1;
                                return (
                                    <input
                                        key={index}
                                        placeholder={`Employee ${i} hours`}
                                        value={formInput.i}
                                        name={`Employee ${i}`}
                                        onChange={handleMultiInputChange} />
                                )
                            })
                        ) : (
                            <input onChange={handleInputChange} value={formInput} ></input>
                        )
                    }
                    <button onClick={handleNext}>NEXT</button>
                </form>
            </div>
        </div>
    )
}

export default Tipout