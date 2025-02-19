// print("Mohan")

// Dis: i can use functions before declaration, repetitive names are allowed

// function print(a) {
//     console.log("Hello", a)
// }
// print("Rakesh")


// const view = function printText(a) {
//     console.log("Hi", a)
// }
// view("Rakesh")


const view = (a) => {
    console.log("Hi", a)
}
view("Rakesh")


//  function to calculate sum and return its mod 10 value using type 1.
function sum(a, b) {
    return (a + b) % 10
}
console.log(sum(5, 6))

// Do it by type 2, 3, 4
const sum1 = function (a, b) {
    return (a + b) % 10
}
console.log(sum1(5, 6))

const temp = function (a, b) {
    return (a + b) % 10
}
console.log(temp(5, 6))

const sum2 = (a, b) => {
    return (a + b) % 10
}
console.log(sum2(5, 6))