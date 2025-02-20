const data = [
    {name: "Anuj", city: "Delhi", email: "anuj"},
    {name: "Rakesh", city: "Mumbai", email: "Rakesh"},
    {name: "Anuj", city: "Delhi", email: "anuj"}
]

const root = document.getElementById("parent")
// root.innerHTML = ""
data.forEach((ele) => {
    const newCard = document.createElement('div')
    newCard.className = "card"
    newCard.innerHTML = `
    <h4>${ele.name}</h4>
    <h6>${ele.city}</h6>
    <p class='text'>${ele.email}</p>
    `
    root.appendChild(newCard)
    newCard.addEventListener("click", () => {
        console.log("He")
        newCard.style.backgroundColor = getRandomColor();
    })
})

const handleBgChange = () => {
    const bodyElem = document.querySelector('body')
    bodyElem.style.backgroundColor = getRandomColor()
}

const getRandomColor = () => {
    const randomRed = Math.floor(Math.random()*255);
    const randomGreen = Math.floor(Math.random()*255);
    const randomBlue = Math.floor(Math.random()*255);
    return `rgb(${randomRed}, ${randomGreen}, ${randomBlue})`
}

const textElements = document.querySelectorAll('.text')
textElements.forEach((ele) => {
    ele.addEventListener("click", () => {
        ele.style.color = getRandomColor()
    })
})