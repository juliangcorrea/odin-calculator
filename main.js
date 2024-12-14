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