/* Övning 3
    Skriv en funktion som tar tre parametrar. De första två är två tal och den sista är en operator d.v.s antingen '+', '-', '/', '*'. 
    Utför beräkningen och returnera summan och skriv ut. Det ska enbart gå att skriva in siffror och varje operation ska vara sin egen funktion.
*/



let calc = (num1, operator, num2) => {
  let sum = '';
  if (typeof num1 != 'number' || typeof num2 != 'number') {
    console.log("You did not enter a number");
  }
  else {
    if (operator == add()) {
      sum = num1 + num2;
    } else if (operator == subtract()) {
      sum = num1 - num2;
    } else if (operator == divide()) {
      sum = num1 / num2;
    } else if (operator == multiply()) {
      sum = num1 * num2;
    };
  }
 
  return sum;
}

let add = () => {
  return '+';
};


let subtract = () => {
  return '-';
}


let divide = () => {
  return '/';
};


let multiply = () => {
  return '*';
};

console.log(calc(45, '-', '2'));