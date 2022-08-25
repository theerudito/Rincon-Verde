let myArray = [1, 2, 3, 4, 5];
let par = []
let impar = []

myArray.map(num => num % 2 === 0 ? par.push(num) : impar.push(num))
console.log(par)
console.log(impar)