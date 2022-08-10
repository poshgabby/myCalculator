
let wholeCalculator = {
    displayValue: '0',
    firstOperand: null,
    secondOperand: false,
    calculatorSign: null
}

function updateDisplay(){
    const output = document.querySelector(".output");
    output.value = wholeCalculator.displayValue;
    console.log(output.value);
}
// updateDisplay();
function inputDigit(digit) {
    const { displayValue, waitingForSecondOperand } =wholeCalculator;
    if (waitingForSecondOperand === true){
        wholeCalculator.displayValue = digit;
        wholeCalculator.waitingForSecondOperand = false;
    }
    else {wholeCalculator.displayValue = displayValue === '0' ? digit : displayValue + digit};
    console.log(wholeCalculator);
}

function Calculate(firstOperand, secondOperand, calculatorSigns){
    if (calculatorSigns === '+'){
        return firstOperand+secondOperand;
    }
    else if (calculatorSigns === '-'){
        return firstOperand - secondOperand;
    }
    else if (calculatorSigns === '/'){
        return firstOperand / secondOperand;
    }
    else if (calculatorSigns === '*'){
        return firstOperand * secondOperand;
    }
    return secondOperand;
}

function inputDecimal(dot){
    if (wholeCalculator.waitingForSecondOperand === true){
        wholeCalculator.displayValue = '0.';
        wholeCalculator.waitingForSecondOperand = false;
        return;
    }
    if (!wholeCalculator.displayValue.includes(dot)){
        wholeCalculator.displayValue += dot;
    }

}
function allClear (){
    wholeCalculator.displayValue = '0';
    wholeCalculator.firstOperand = null;
    wholeCalculator.waitingForSecondOperand = false;
    wholeCalculator.calculatorSign = null;
    console.log(wholeCalculator);
}
function handleOperator(nextOperator){
    const {firstOperand, displayValue, calculatorSign} = wholeCalculator
    const inputValue = parseFloat(displayValue);

    if (calculatorSign && wholeCalculator.waitingForSecondOperand){
        wholeCalculator.calculatorSigs = nextOperator;
        console.log(wholeCalculator);
        return;
    }
    if (firstOperand === null && !isNaN(inputValue)){
        wholeCalculator.firstOperand = inputValue;
    }
    else if (calculatorSign){
        const result = Calculate (firstOperand, inputValue, calculatorSign);
        wholeCalculator.displayValue = String(result);
        wholeCalculator.firstOperand = result;
    }
    wholeCalculator.waitingForSecondOperand = true;
    wholeCalculator.calculatorSign = nextOperator;
    console.log(wholeCalculator);
}


const keys = document.querySelector('.calculatorKeys');
keys.addEventListener('click', event => {
    const { target } = event;
    const { value } = target;
    if (!target.matches('button')) {
        return;
    }

    switch (value) {
        case '+':
        case '-':
        case '*':
        case '/':
        case '=':
            handleOperator(value);
            break;
        case '.':
            inputDecimal(value);
            break;
        case 'allClear':
            allClear();
            break;
        default:
            // check if the key is an integer
            if (Number.isInteger(parseFloat(value))) {
                inputDigit(value);
            }
    }
    updateDisplay();
});
// keys.addEventListener('click', (event) =>{
//     const {target} = event;
//
//     if (!target.matches ('button')){
//         // console.log('invalid key)', target.value);
//
//     }
//
//     if (target.classList.contains ('calculatorSigns')){
//         console.log('calculatorSigns', target.value);
//         handleOperator(target.value);
//         updateDisplay();
//     }
//     if (target.classList.contains ('decimal')){
//         // console.log('decimal', target.value);
//         inputDecimal(target.value);
//         updateDisplay();
//     }
//     if (target.classList.contains ('allClear')){
//         // console.log('all clear', target.value);
//         allClear(target.value);
//         updateDisplay();
//     }
//     if (target.classList.contains('number')){
//         inputDigit(target.value);
//         updateDisplay();
//         console.log('digit', target.value);
//     }
// })


// function


// let calculate = {
//
//     addNumber (firstNumber, secondNumber) {
//         let answer = firstNumber+secondNumber;
//         return answer;
//     },
//
//     subtractNumber (firstNumber, secondNumber){
//         let answer = firstNumber-secondNumber;
//         return answer;
// },
//     multiplyNumber (firstNumber, secondNumber){
//         let answer = firstNumber*secondNumber;
//         return answer;
// },
//     divideNumber (firstNumber, secondNumber){
//         let answer = firstNumber/secondNumber;
//         return answer;
//     }
// }
//
// function calculator (firstNumber, secondNumber, calculatorSigns){
//     let answer = 0;
//     if (calculatorSigns === '+'){
//          answer = calculate.addNumber(firstNumber, secondNumber);
//     }
//     else if (calculatorSigns === '-'){
//          answer = calculate.subtractNumber(firstNumber, secondNumber);
//     }
//     else if (calculatorSigns === '*'){
//          answer = calculate.multiplyNumber(firstNumber, secondNumber);
//     }
//     else if (calculatorSigns === '/'){
//          answer = calculate.divideNumber(firstNumber, secondNumber)
//     }
//     else {
//        answer = 0;
//     }
//     return answer;
// }
//
// let numbera = 10;
// let numberb = 22;
// let calculatorSign = '+';
// console.log(calculator(numbera,numberb,calculatorSign));
//
// //Add to variable
// let number = 5;
// // number = number + 5;
// number += 5;
// console.log(number);
//
// //Subtract from variable
// let numberc = 5;
// // number = number + 5;
// numberc -= 5;
// console.log(numberc);


//events
// function testingEventsOnclick (){
//     console.log('this is being clicked');
// }
// function testingEventsOnkeyhold (){
//     console.log('this key is hold');
// }
// function testingEventsOnload (){
//     console.log('page is loading');
// }
// function testingEventsOnmouseout (){
//     console.log('mouse is out');
// }
// function testingEventsOnmousehover (){
//     console.log('mouse is hovered on me');
// }