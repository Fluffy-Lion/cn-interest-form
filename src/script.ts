import { Details } from "./Classes/Details.js";
import { HasFormatter } from "./Interfaces/HasFormatter.js";

// ensureing that whatever docOne is, it has to implement this interface
let docOne: HasFormatter

docOne = new Details("master", "bob", "liverpool", 8833)

const detailsOne = new Details("master", "leon", "manchester", 88)
console.log(detailsOne.format())

let details: Details[] = []
details.push(detailsOne)

console.log(details)
const form = document.querySelector('.new-item-form') as HTMLFormElement

const course = document.querySelector('#type') as HTMLSelectElement
const name = document.querySelector('#name') as HTMLInputElement
const location = document.querySelector('#location') as HTMLInputElement
const contactNumber = document.querySelector('#contact-number') as HTMLInputElement

form.addEventListener("submit", (e: Event) => {
    e.preventDefault()
    console.log(
        course.value, 
        name.value, 
        location.value, 
        contactNumber.value, 
    )
})