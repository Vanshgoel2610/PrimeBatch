const user = prompt("Enter ur name: ")
const sub = Number(prompt("Number of subjects: "))
var obj = {}
let max = 0
let sum = 0
for(let i = 1; i <= sub; i++) {
    const sub = prompt("Enter the subject: ")
    const mark = Number(prompt("Enter the subject's mark: "))
    obj[mark] = sub
    if(max < mark) max = mark
    sum += mark
}
let per = (sum/sub)
console.log(per)
console.log(obj[max])
if(per >= 90) console.log("A+")
else if(per >= 80) console.log("A")
else if(per >= 70) console.log("B+")