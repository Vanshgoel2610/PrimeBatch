// document.children[0].children[1].children[0].style.color = 'red'
// const outerDiv = document.querySelector("div")
// outerDiv.style.backgroundColor = "blue"
// console.dir(outerDiv)
// const divChildren = Array.from(outerDiv.children)
// console.log(divChildren)
// divChildren.forEach((elem) => {
//     elem.style.backgroundColor = "green"
// })
const divElement = Array.from(document.querySelectorAll("div div"))
divElement.forEach((elem) => {
    elem.style.backgroundColor = "yellow"
})
const mappings = {
    Invitation: "You are invited for event",
    Reminder: "You ar reminded for task",
    Invitation: "You have a notice for college",
    Invitation: "YOu have 7 messages"
}
const newElement = document.createElement("div")
const rootElement = document.querySelector('body')
newElement.innerText = "Hello everyone"
rootElement.appendChild(newElement)

console.log(Object.entries(mappings))
Object.entries(mappings).forEach((elem) => {
    const newChildDiv = document.createElement('div')
    newChildDiv.innerText = "Hello DOM"
    newElement.appendChild(newChildDiv)
    newChildDiv.innerHTML = `
    <h4 style = 'color: orange'>${elem[0]}</h4>
    <p>${elem[1]}</p>
    `
})
console.dir(document.body)