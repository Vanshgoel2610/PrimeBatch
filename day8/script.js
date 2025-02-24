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

// const cities = data.map((elem) => elem.city)
// const selectElement = document.getElementsByTagName("select")[0]

const citiesObj = {}
data.forEach((ele) => citiesObj[ele.city] = true)
const cities = Object.keys(citiesObj)

const showOptions = () => {
    cities.forEach((city) => {
        const newOption = document.createElement('option')
        newOption.value = city
        newOption.innerText = city
        selectElement.appendChild(newOption)
    })
}

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
            <button onClick = "deleteCard(event, '${ele.id}')">Delete</button>

        </div>
        `
        root.appendChild(card)
    })
}
const deleteCard = (event, idx) => {
    // One way to delete
    // event.target.parentElement.parentElement.remove()

    // Another way to delete
    // data.splice(idx, 1)
    // showCards(data)

    // Correct way to delete
    const index = data.findIndex((ele) => ele.id === idx)
    data.splice(index, 1)
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
const handleFormSubmit = (e) => {
    e.preventDefault()
    // console.log(e)
    // console.log(e.target.email.value)
    // console.log(e.target.email.value)
    // console.log(e.target[0].value)
    // console.log(e.target[1].value)
    // console.log(e.target.fullName)

    const isEmailExists = data.some((elem) => {
        return elem.email === e.target.email.value
    })
    if(isEmailExists) {
        alert("Already Exists")
        return
    }
    const newElement = {
        name: e.target.fullName.value,
        name: e.target.email.value,
        name: e.target.city.value,
    }
    data.push(newElement)
    showCards(data)
}

showCards(data)