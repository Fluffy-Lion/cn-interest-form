import { Master, Develop, CyberSC } from "./Classes/Details.js";
import { ListTemplate } from "./Classes/ListTemplate.js";
import { HasFormatter } from "./Interfaces/HasFormatter.js";

// ensureing that whatever docOne is, it has to implement this interface
// structures code more and secures it
// let docOne: HasFormatter

// docOne = new Master("master", "bob", "liverpool", 8833)
// let item = "hello"
// let docs: HasFormatter[] = []
// will work
// docs.push(docOne)
// wont work
// docs.push(item)


// const detailsOne = new Master("master", "leon", "manchester", 88)
// console.log(detailsOne.format())

// let details: Master[] = []
// details.push(detailsOne)

// console.log(details)
const form = document.querySelector('.new-item-form') as HTMLFormElement

const course = document.querySelector('#type') as HTMLSelectElement
const name = document.querySelector('#name') as HTMLInputElement
const location = document.querySelector('#location') as HTMLInputElement
const contactNumber = document.querySelector('#contact-number') as HTMLInputElement

// list template instance

const ul = document.querySelector('ul')!
const list = new ListTemplate(ul)

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
    list.render(doc, course.value, 'end')
    name.value = ''
    location.value =''
    contactNumber.value = ''
})
// this captures what ever item we pass into and also 
// the extends an object, it must be an object
const addUID = <T extends object>(obj: T) => {
    let uid = Math.floor(Math.random() * 100)
    return {...obj, uid}
}

let docOne = addUID({ name: "leon", age: 31 })
// let docTwo = addUID('hello')
console.log(docOne.name)


// ENUMS
// special type that allows us to store consts or keyword and
// assiociate them with a numeric value
enum ResourceType { BOOK, AUTHOR, FILM, DIRECTOR, PERSON }

// T is whatever we pass in
interface Resource<T> {
    uid: number
    resourceName: ResourceType
    data: T
}
// can then say this data type is a string
// pass in this resource so data is that type
const docTwo: Resource<string> = {
    uid: 2,
    resourceName: ResourceType.FILM,
    data: "leon"
}
const docThree: Resource<string[]> = {
    uid: 1,
    resourceName: ResourceType.BOOK,
    data: ['bread', 'soup']
}

console.log(docTwo)
console.log(docThree)


