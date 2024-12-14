let screenNum = document.querySelector('.show-number')
const numbersBtns = document.querySelectorAll('.number')
const operatorBtns = document.querySelectorAll('.operator')
const clearBtn = document.querySelector('.clear')
const equalBtn = document.querySelector('.equal')
const floatBtn = document.querySelector('.float')

function operate(number1, number2, operator){
    let num1, num2
    if(number1.includes('.')){
        num1 = parseFloat(number1)
    }else{
        num1 = parseInt(number1)
    }
    if(number2.includes('.')){
        num2 = parseFloat(number2)
    } else {
        num2 = parseInt(number2)
    }
    switch(operator){
        case '+':
            return num1 + num2
        case '-':
            return num1 - num2
        case '*':
            return num1 * num2
        case '/':
            if(number2 == '0'){
                return 'Error - Division By 0'
            }
            return num1 / num2
    }
}

let number1 = number2 = operator = tempRestult = btnNum = ''
let state = false

numbersBtns.forEach(button => {
    button.addEventListener('click', (e) => {
        if(screenNum.textContent.length < 19){
            if(operator == ''){
                number1 += e.target.textContent
            } else {
                number2 += e.target.textContent
            }
            if(screenNum.textContent != 0 && state == false){
                screenNum.textContent += e.target.textContent
            } else {
                screenNum.textContent = e.target.textContent
                state = false
            }
        }
    });
})

operatorBtns.forEach(button => {
    button.addEventListener('click', (e)=>{
        if(screenNum.textContent != 'Error - Division By 0'){
            if(operator != ''){
                if(number2 != ''){
                    tempRestult = operate(number1, number2, operator).toString()
                    operator = e.target.textContent
                    number1 = tempRestult
                    number2 = ''
                    screenNum.textContent = tempRestult + operator
                }
            } else {
                operator = e.target.textContent
                screenNum.textContent += operator
            }
        }
    })
})

clearBtn.addEventListener('click', ()=>{
    number1 = number2 = operator = tempRestult = btnNum = ''
    screenNum.textContent = 0
})

equalBtn.addEventListener('click', ()=>{
    if(number1 != '' && operator != '' && number2 != ''){
        tempRestult = operate(number1, number2, operator)
        if(tempRestult.toString().includes('.')){
            tempRestult = tempRestult.toFixed(2)
        }
        screenNum.textContent = tempRestult
    }
    number1 = number2 = operator = tempRestult = btnNum = ''
    state = true
})

floatBtn.addEventListener('click', ()=>{
    let tempCheck = screenNum.textContent[0]
    if(!isNaN(tempCheck)){
        if(operator == ''){
            if(!number1.toString().includes('.')){
                number1 += '.'
                screenNum.textContent += '.'
            }
        } else {
            if(!number2.toString().includes('.')){
                number2 += '.'
                screenNum.textContent += '.'
            }
        }
    }
})