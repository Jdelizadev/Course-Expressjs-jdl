

const numbers = [2,3,4]
const squaredNumbers = numbers.map(num => num * num)
console.log(squaredNumbers)


const colors = ['red', 'pink', 'blue']
const iteratedColors = colors.forEach(color => console.log(color))
console.log(colors)
console.log(iteratedColors)

const tempInFah = [25,32,46,60]
const tempInCel = tempInFah.map(temp => (5/9) * (temp - 32))

console.log(tempInFah)
console.log(tempInCel)

const numbersSum = [2,4,8,10,9]
let sum = 0

numbersSum.forEach(num => {
    sum += num;
})

console.log(numbersSum)
console.log(sum)
