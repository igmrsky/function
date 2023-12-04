//  Для повторения целых участков кода, мы можем исользовать функции 
// Функции служат для того, чтобы повторять какой-то участок кода с различными входящим данными

function sumNumbers(firstNumber, secondNumber) {
    return firstNumber + secondNumber
}

const result = sumNumbers(3, 10)
console.log(result)
console.log(sumNumbers(-2, 2))



const users = ['John', 'Ann', 'Alex', 'Max']

function checkForCopyItem(array, item) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === item) {
            return `There is a copy of the ${item} in array`
        }
    }
    return `There is no such item in the array`
}

console.log(checkForCopyItem(users, 'Ann'))




// ==================================== Задания ==================================== 

// 1)

function sayHello(name) {
    return 'Hello ' + name
}

console.log(sayHello('Igor'))




// =================================================================================

// 2) 

const numbers = [1, 2, 3, 4, 6, 8, 10, 11, 15, 20];

function checkNumbersMoreTen(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] > 10) {
            console.log(array[i])
        }
    }
}

checkNumbersMoreTen(numbers)

// =================================================================================

// 3) 

function calculate(firstNum, secondNum, sign) {
    if (sign === 'plus' || sign === '+') {
        return firstNum + secondNum
    } else if (sign === 'minus' || sign === '-') {
        return firstNum - secondNum
    } else if (sign === 'multiply' || sign === '*') {
        return firstNum * secondNum
    } else if (sign === 'divide' || sign === '/') {
        if(secondNum === 0){
            return 'Do not do this, please'
        }
        return firstNum / secondNum
    }
    else {
        return `Please, write all components correctly`
    }
}

const res = calculate(3, 0, '/')
console.log(res)


