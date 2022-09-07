class Calculator {
    constructor(num1, num2) {
     this.num1 = num1;
     this.num2 = num2;
   }
     add() {
       return this.num1 + this.num2;
     }
     sub() {
       return this.num1 - this.num2;
     }
     mul(){
       return this.num1 * this.num2;
     }
     div(){
       return this.num1 / this.num2;
     }
     mod(){
       return this.num1 % this.num2;
     }
}

// const calculate = new Calculator(2,3);
// console.log(`${calculate.num1} + ${calculate.num2} = ${calculate.add()}`)
// console.log(`${calculate.num1} - ${calculate.num2} = ${calculate.sub()}`)
// console.log(`${calculate.num1} * ${calculate.num2} = ${calculate.mul()}`)
// console.log(`${calculate.num1} / ${calculate.num2} = ${calculate.div()}`)
// console.log(`${calculate.num1} % ${calculate.num2} = ${calculate.mod()}`)


const num1 = document.querySelector('.num1');
const num2 = document.querySelector('.num2');
const ops = document.querySelector('.operations');
const form = document.querySelector('form');
const result = document.querySelector('.result');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  num1Val = Number(num1.value);
  num2Val = Number(num2.value);
  opsVal = ops.value;

  const calculate = new Calculator(num1Val, num2Val);

  if(opsVal ==="add"){
    result.innerHTML = `${num1Val} + ${num2Val} = ${calculate.add()}`
  }
  if(opsVal ==="sub"){
    result.innerHTML = `${num1Val} - ${num2Val} = ${calculate.sub()}`
  }
  if(opsVal ==="mul"){
    result.innerHTML = `${num1Val} * ${num2Val} = ${calculate.mul()}`
  }
  if(opsVal ==="div"){
    result.innerHTML = `${num1Val} / ${num2Val} = ${calculate.div()}`
  }
  if(opsVal ==="mod"){
    result.innerHTML = `${num1Val} % ${num2Val} = ${calculate.mod()}`
  }

})


//Console.
document.querySelector('.console').addEventListener('click', () => {

    result.innerHTML = "See the console..."
    let number1 = Number(prompt("Enter first number: "))
    let number2 = Number(prompt("Enter Second number: "))
    let operation = prompt("Enter operation to perform (add, subtract, multiply, divide, mod): ")
    const calculate = new Calculator(number1,number2);

    if(operation.toLowerCase() === "add"){
      console.log(`${number1} + ${number2} = ${calculate.add()}`)
    }
    else if(operation.toLowerCase() === "subtract"){
      console.log(`${number1} - ${number2} = ${calculate.sub()}`)
    }
    else if(operation.toLowerCase() === "multiply"){
      console.log(`${number1} * ${number2} = ${calculate.mul()}`)
    }
    else if(operation.toLowerCase() === "divide"){
      console.log(`${number1} * ${number2} = ${calculate.div()}`)
    }
    else if(operation.toLowerCase() === "mod"){
      console.log(`${number1} % ${number2} = ${calculate.mod()}`)
    }
    else{
      console.log("Bhai, Kya kar raha tu 0-0");
    }

});
