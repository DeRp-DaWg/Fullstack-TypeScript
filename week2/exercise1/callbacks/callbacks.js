function calculate(x, y, operation) {
  return operation(x, y)
}

function add(x, y) {
  return x + y
}

console.log(calculate(5, 12, add))
