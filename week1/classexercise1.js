function createMultiplier(y) {
  return x => x * y
}

const timesTwo = createMultiplier(2)
const timesThree = createMultiplier(3)

timesThree(5)

const numbers = [1, 2, 3, 4, 5, 6, 7, 8 ,9, 10]

function map(array, mapFunc) {
  const mapArr = []
  for (let i = 0; i < array.length; i++) {
    const result = mapFunc(array[i], i)
    mapArr.push(result)
  }
  return mapArr
}

const square = map(numbers, (num) => num ** 2)

console.log(square)

function filter(array, filterFunc) {
  const filterArr = []
  for (let i = 0; i < array.length; i++) {
    const current = array[i]
    if (filterFunc(current)) {
      filterArr.push(current)
    }
  }
  return filterArr
}

const evenNumbers = filter(numbers, (x) => x % 2 === 0)

console.log(evenNumbers)

const array1 = [1, 2, 3, 4]

const initialValue = 2
const sumWithInitial = array1.reduce(
  (accumaltor, currentValue) => accumaltor * currentValue,
  initialValue
)

console.log(sumWithInitial)

const reduce = (arr, reduceFunc, initValue) => {
  let sum = initialValue;
  for (let i = 0; i < arr.length; i++) {
    sum = reduceFunc(sum, arr[i])
  }
  return sum
}

const sum = reduce(numbers, (sum, num) => sum + num, 0)
const multiply = reduce(numbers, (sum, num) => sum * num, 0)

console.log(sum)
console.log(multiply)
