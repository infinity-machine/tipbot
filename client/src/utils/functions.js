function returnSum(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
      sum += array[i]
    }
    return sum
}

export function splitTips(thiss, that) {
    console.log(thiss, that)




    // let total_hours = returnSum(hours_array);
    // let percent_array = [];

    // for (let i = 0; i < hours_array.length; i++) {
    //   let percent = hours_array[i] / total_hours;
    //   percent_array.push(Number(percent.toFixed(2)));
    // };

    // let tips_array = [];
    // for (let i = 0; i < percent_array.length; i++) {
    //   let tip = total_cash * percent_array[i];
    //   console.log(tip);
    //   tips_array.push(tip);
    // };

    // return tips_array;
  };