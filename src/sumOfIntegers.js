function sumOfIntegers(numbers) {
  const integers=numbers.filter((num)=> Number.isInteger(num))
    let sum=0
    // we can user javascript reduce function to iterate and sum elements
     sum= integers.reduce((accumulator, current) => accumulator + current, 0);

    // we can also use loop through each element and add to sum  

    //  for (let i = 0; i < integers.length; i++) {
    // sum += integers[i];
    //  } 
      return sum;
  }

  const numbers =[1,2,3];
const total = sumOfIntegers(numbers);
console.log(`The sum of the integers is: ${total}`); 
