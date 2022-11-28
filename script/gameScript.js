const h1Display = document.querySelector('#h1Display-js')
const h1Content = document.querySelector('.h1-content')

const inicialScreen = document.querySelector('#inicialScreen-js')
const startBtn = document.querySelector('#startBtn-js')
const contentText = document.querySelector('#contentText-js')

const gameScreen = document.querySelector('#gameScreen-js')
const questionCounter = document.querySelector('#questionCounter-js')

const userAnswer = document.querySelector('#userAnswer-js')
const operationDisplay = document.querySelector('#operationDisplay-js')

const endScreen = document.querySelector('#endScreen-js')
const finalScored = document.querySelector('#finalScored-js')


let numbersIn = [] // will be use to set numbers range
let numberOfQuestion // will be use to set number or questions
let digitOne // one number between 1 to 10
let digitTwo // one number between 1 to 10
let result // the operation result
let counter = 1 // count questions made
let rightAnswers = 0 // count the right answers 



//timer
let min = 0
let sec = 0
let interval 
let finalTime 


// changing the page layout to game screen 
startBtn.addEventListener('click',  () => {
    h1Content.style.cssText = 
    'top: 10%;';
    h1Display.style.fontSize = '1.8em';

    inicialScreen.style.display = `none`


    gameScreen.style.cssText = 
    'display: flex;' +
    'opacity: 1;' +
    'visibility: visible;'

    setNumberOfQuestions()
    setNumbersRange()
    writeOperation()
    startTimer()
})



// Convert the timer to two digits if the min/sec is less then 10
function makeTwoDigits(digit) {
    if (digit < 10) {
        return ('0'+ digit)
    } else {
        return (digit )
    }
}

function timer() {
    sec ++
    if (sec == 60) {
        min++
        sec = 0
    }

    document.getElementById('timer-js').innerHTML = `${makeTwoDigits(min)}:${makeTwoDigits(sec)}`
}

function startTimer() {
    timer()
    interval = setInterval(timer, 1000)
}

function stopTimer() {
    clearInterval(interval)
    finalTime = `${makeTwoDigits(min)}:${makeTwoDigits(sec)}`
    sec=0
    min=0
}


//set how many questions will have based on the selector
function setNumberOfQuestions() {
    const selectInput = document.querySelector('#numberOfQuestions-js')
    numberOfQuestion =  selectInput.options[selectInput.selectedIndex].value

}


// set numbers range 
function setNumbersRange() {
    let rangeInput = document.getElementById('numbersRange-js').value
    let numbersRange = parseInt(rangeInput)

    for (let n = 0; n < numbersRange; n++) {
        numbersIn.push(n)
    }
}


// gives random numbers based on the player choice 
function makeDigit() {
    let digit = numbersIn[Math.floor(Math.random() * numbersIn.length)] 
    return digit

}


// define the operation
function makeOperator() {
    let operators = []
    let operatorInput = document.getElementsByName('operationChosed')
    if (operatorInput[0].checked) {
        operators = ['sum', 'sub']
    }
    
    if(operatorInput[1].checked) {
        operators = ['mul']
    }

    if(operatorInput[2].checked) {
        operators = ['sum', 'sub', 'mul']
    }

    let getOperator = operators[Math.floor(Math.random() * operators.length)]
    return getOperator
}




function writeOperation() {
    // write the operation on the screen
    
    let operator = makeOperator()
    digitOne = makeDigit() 
    digitTwo = makeDigit() 
    questionCounter.innerHTML = `Question ${counter}`

    // Write the operation and sets the result 
    if (operator === 'sum') {
        result  = digitOne + digitTwo
        operationDisplay.innerHTML = `${digitOne} + ${digitTwo}`
        // console.log(`result is  ${digitOne} + ${digitTwo} = ${result}`)
    } else if (operator === 'sub') {
        result  = digitOne - digitTwo
        operationDisplay.innerHTML = `${digitOne} - ${digitTwo}`
        // console.log(`result is ${digitOne} - ${digitTwo} = ${result}`)
    } else {
        result = digitOne * digitTwo
        console.log(result)
        operationDisplay.innerHTML = `${digitOne} * ${digitTwo}`
    }


}


//submit the user answer 
function submitAnswe(event) {
    //Make the function load only if it is the enter key. 
    if (event.which != 13 || event.keyCode != 13) {
        return 
    }

    //count the if answer is right 
    if (userAnswer.value == result) {
        rightAnswers += 1
    } 

    // questions counter
    counter += 1
    
    if (counter > numberOfQuestion) {
        endGameScreen()
    } else {
        userAnswer.value = ''
        writeOperation()
    }
    
}


function endGameScreen() {
    stopTimer()
    // make the end screen 
    contentText.innerHTML = ''
    gameScreen.style.cssText = 
        'display: none;' +
        'opacity: 0;' +
        'visibility: hidden;'

    endScreen.style.cssText = 
        'display: flex;' +
        'opacity: 1;' +
        'visibility: visible;'

    finalScored.innerHTML = `${rightAnswers}/${numberOfQuestion}`     
    document.getElementById('finalTimer-js').innerHTML = `Time: ${finalTime}`
}



function restart() {
    location.reload()
}