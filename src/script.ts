import { Master, Develop, CyberSC } from "./Classes/Details.js";
import { HasFormatter } from "./Interfaces/HasFormatter.js";

// ensureing that whatever docOne is, it has to implement this interface
// structures code more and secures it
let docOne: HasFormatter

docOne = new Master("master", "bob", "liverpool", 8833)
let item = "hello"
let docs: HasFormatter[] = []
// will work
// docs.push(docOne)
// wont work
// docs.push(item)


const detailsOne = new Master("master", "leon", "manchester", 88)
console.log(detailsOne.format())

let details: Master[] = []
details.push(detailsOne)

console.log(details)
const form = document.querySelector('.new-item-form') as HTMLFormElement

const course = document.querySelector('#type') as HTMLSelectElement
const name = document.querySelector('#name') as HTMLInputElement
const location = document.querySelector('#location') as HTMLInputElement
const contactNumber = document.querySelector('#contact-number') as HTMLInputElement

form.addEventListener("submit", (e: Event) => {
    e.preventDefault()

    let doc: HasFormatter
    if(course.value === "master course"){
        doc = new Master(course.value, name.value, location.value, contactNumber.valueAsNumber)
    }else if(course.value === "develop course"){
        doc = new Develop(course.value, name.value, location.value, contactNumber.valueAsNumber)
    }else{
        doc = new CyberSC(course.value, name.value, location.value, contactNumber.valueAsNumber)
    }
    console.log(
        course.value, 
        name.value, 
        location.value, 
        contactNumber.value, 
    )
})