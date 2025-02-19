// const obj = {
//     name: "Vansh",
//     city: "Sikandrabad"
// }
// console.log(obj)


// Repeated Key will overwrite the old value
// const obj = {
//     name: "Vansh",
//     name: "Krishna",
//     city: "Sikandrabad",
// }
// console.log(obj)


// How to access a value
const obj = {
    name: "Vansh",
    name: "Krishna",
    city: "Sikandrabad",
}
const name = obj.name
console.log(name)

// Adding a value
obj.country = "Ind"
console.log(obj)

// Accessing a value which is not present
console.log(obj.address)

// Accessing a value dynamically
// const key = prompt("Enter the key")
// console.log(obj[key])

// updating a value
obj.city = "Delhi"
const n = "Mohan"
obj.name = n
console.log(obj)


// Deleting a value
delete obj.city
console.log(obj)