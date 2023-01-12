

function returnSum(array){
    let sum = 0;
    for (let i = 0; i < array.length; i++){
        sum += array[i]
    }
    return sum
}

function splitTips(total_cash, hours_array){
    let total_hours = returnSum(hours_array);
    let percent_array = [];
    for (let i = 0; i < hours_array.length; i++){
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


const myObject = { 
    name: 'John', 
    age: 25, 
    location: 'New York' 
}; 
  
const renderProperties = Object.keys(myObject).map((key) => { 
    return <p>{key}: {myObject[key]}</p>; 
});


renderProperties(myObj)