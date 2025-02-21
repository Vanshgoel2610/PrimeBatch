const data = [
    {
        id: 1,
        name: "Rakesh",
        city: "Delhi"
    },
    {
        id: 2,
        name: "Mohan",
        city: "Noida"
    },
    {
        id: 3,
        name: "Rishabh",
        city: "Mumbai"
    }
];

const root = document.getElementById('root')

const showCards = () => {
    data.forEach((ele) => {
        const card = document.createElement('div');
        card.className = "card"
        card.innerHTML = `
        <div>
            <h1>${ele.name}</h1>
            <p>${ele.city}</p>
            <button onClick = "deleteCard(event)">Delete</button>

        </div>
        `
        div.style.visi
        root.appendChild(card)
    })
}
showCards()
const deleteCard = (event) => {
    event.target.parentElement.parentElement.remove()
}