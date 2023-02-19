function add(x, y) {
  return x + y
}

function multiply(x, y) {
  return x * y
}

function operateOnNumbers(operator, x, y) {
  return operator(x, y)
}

console.log(operateOnNumbers(add, 3, 4)) // 7
console.log(operateOnNumbers(multiply, 3, 4)) // 12

console.log(operateOnNumbers((x, y) => x - y, 3, 4))

function doubleOperate(operator1, operator2, array) {
  const result = []
  for (let i = 0; i < array.length; i++) {
    let current = array[i]
    current = operator1(current, current)
    current = operator2(current, current)
    result.push(current)
  }
  return result
}

console.log(doubleOperate(multiply, add, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))
