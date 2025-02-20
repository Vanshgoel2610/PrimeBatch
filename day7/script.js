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
    <p>${ele.email}</p>
    `
    root.appendChild(newCard)
})

const handleBgChange = () {
    console.log("btn clicked")
}