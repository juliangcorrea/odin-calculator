function addOperator(item1, item2){
    return item1 + item2
}

function subtractOperator(item1, item2){
    return item1 - item2
}

function multiplyOperator(item1, item2){
    return item1 * item2
}

function divideOperator(item1, item2){
    return item1 / item2
}

let number1, number2, operator

function operate(number1, number2, operator){
    switch(operator){
        case "+":
            return addOperator(number1, number2)
        case "-":
            return subtractOperator(number1, number2)
        case "*":
            return multiplyOperator(number1, number2)
        case "/":
            return divideOperator(number1, number2)
    }
}

let btnNum = ''
let screenNum = document.querySelector('.show-number')
const numbersBtns = document.querySelectorAll('.number')
const operatorBtns = document.querySelectorAll('.operator')
const clearBtn = document.querySelector('.clear')
const equalBtn = document.querySelector('.equal')
numbersBtns.forEach(button => {
    button.addEventListener('click', (e) => {
        if(btnNum.length < 19){
            if(btnNum != 0){
                btnNum += e.target.textContent
            } else {
                btnNum = e.target.textContent
            }
            screenNum.textContent = btnNum
        }
    });
})

clearBtn.addEventListener('click', ()=>{
    btnNum = ''
    screenNum.textContent = 0
})