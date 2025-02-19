// console.log(document)  // --> window object represents : BOM
// console.dir(document)  // --> document object represents : DOM
// document is given by window. So, window.document --> document

// document.write("Krishna")

// finding/searching the element
// 1. document.getElementById() --> null/element
// 2. document.getElementByClassName() --> html Collection (iterable)
// 3. document.getElementByTagName() --> iterable[]
// 4. document.querySelector() --> gives only first element among all matches
// 5. document.querySelectorAll() --> gives all matches


const elem = document.getElementById("text-1")
console.log(elem)
elem.style.color = "blue"
const cl = document.getElementsByClassName("me")
console.log(cl)