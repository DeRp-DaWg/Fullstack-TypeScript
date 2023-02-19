async function calculate(x, y, operation) {
  return await new Promise((resolve, reject) => {
    try {
      resolve(operation(x, y))
    } catch (error) {
      reject(error)
    }
  })
}

function add(x, y) {
  return x + y
}

function subtract(x, y) {
  return x - y
}

function divide(x, y) {
  return x / y
}

function multiply(x, y) {
  return x * y
}

calculate(5, 12, add)
.then((data) => subtract(data, 2))
.then((data) => divide(data, 3))
.then((data) => multiply(data, 5))
.then((data) => console.log(data))

