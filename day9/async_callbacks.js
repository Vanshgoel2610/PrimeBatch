// because it is async call so it breaks the flow and go to browser then to callbacks queue and then to call stack
// setTimeout(handleCall, 0);
// console.log("start")

// const handleInnerCall = () => {
//     console.log("Step Y")
// }

// function handleCall() {
//     console.log("Step M")
//     handleInnerCall()
//     console.log("Step N")
// }
// //document.querySelector("body").addEventListener("click", handleCall)

// console.log("end")



// const handleCall = () => {
//     console.log("M")
// }

// console.log("A")
// setTimeout(() => {
//     console.log("N")
//     setTimeout(() => {
//         console.log("P")
//     }, 0)
//     handleCall()
//     console.log("B")
// }, 5000)
// console.log("C")



const res = fetch("https://api.github.com/users/likbalpande")
console.log(res)