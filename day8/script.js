const data = [
    {
        id: '1',
        name: "Rakesh",
        city: "Delhi"
    },
    {
        id: '2',
        name: "Mohan",
        city: "Noida"
    },
    {
        id: '3',
        name: "Rishabh",
        city: "Mumbai"
    },
    {
        id: '4',
        name: "Raj",
        city: "Delhi"
    },
];

const root = document.getElementById('root')

const showCards = (newData) => {
    root.innerHTML = ""
    newData.forEach((ele, idx) => {
        const card = document.createElement('div');
        card.className = "card"
        card.innerHTML = `
        <div>
            <h1>${ele.name}</h1>
            <p>${ele.city}</p>
            <button onClick = "deleteCard(event, ${idx})">Delete</button>

        </div>
        `
        root.appendChild(card)
    })
}
const deleteCard = (event, idx) => {
    // One way to delete
    // event.target.parentElement.parentElement.remove()

    // Another way to delete
    data.splice(idx, 1)
    showCards(data)
}
const handleSelect = (e) => {
    const selectedCity = e.target.value;
    const newData = data.filter((ele) => {
        if(ele.city === selectedCity) return true;
        return false;
    })
    showCards(newData)
}

showCards(data)