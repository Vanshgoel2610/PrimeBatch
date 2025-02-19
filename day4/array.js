const arr = ["fruits", "hello", 24]
console.log(arr)
console.log(arr.length)

const obj = {
    1: "fruits",
    2: "hello",
    3: 24,
    length: 3
}
console.log(obj)

arr.push("world")
console.log(arr)
console.log(arr[2])
arr[3] = "Amazon"
console.log(arr)

delete arr[2]
console.log(arr)

arr.splice(1, 1)
console.log(arr)