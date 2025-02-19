const temp = () => {
    if(true) {
        var username = "Raj"   // var has function scope
    }
    console.log(username)
}
temp()

const mod = (a, b, c) => {
    const calc = (a, b) => {
        return sum = a+b
    }
    return calc(a, b)%c
}
console.log(mod(1, 2, 10))