import { Master, Develop, CyberSC } from "./Classes/Details.js";
import { ListTemplate } from "./Classes/ListTemplate.js";
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
const form = document.querySelector('.new-item-form');
const course = document.querySelector('#type');
const name = document.querySelector('#name');
const location = document.querySelector('#location');
const contactNumber = document.querySelector('#contact-number');
// list template instance
const ul = document.querySelector('ul');
const list = new ListTemplate(ul);
form.addEventListener("submit", (e) => {
    e.preventDefault();
    let doc;
    if (course.value === "master course") {
        doc = new Master(course.value, name.value, location.value, contactNumber.valueAsNumber);
    }
    else if (course.value === "develop course") {
        doc = new Develop(course.value, name.value, location.value, contactNumber.valueAsNumber);
    }
    else {
        doc = new CyberSC(course.value, name.value, location.value, contactNumber.valueAsNumber);
    }
    list.render(doc, course.value, 'end');
    name.value = '';
    location.value = '';
    contactNumber.value = '';
});
// this captures what ever item we pass into and also 
// the extends an object, it must be an object
const addUID = (obj) => {
    let uid = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, obj), { uid });
};
let docOne = addUID({ name: "leon", age: 31 });
// let docTwo = addUID('hello')
console.log(docOne.name);
// ENUMS
// special type that allows us to store consts or keyword and
// assiociate them with a numeric value
var ResourceType;
(function (ResourceType) {
    ResourceType[ResourceType["BOOK"] = 0] = "BOOK";
    ResourceType[ResourceType["AUTHOR"] = 1] = "AUTHOR";
    ResourceType[ResourceType["FILM"] = 2] = "FILM";
    ResourceType[ResourceType["DIRECTOR"] = 3] = "DIRECTOR";
    ResourceType[ResourceType["PERSON"] = 4] = "PERSON";
})(ResourceType || (ResourceType = {}));
// can then say this data type is a string
// pass in this resource so data is that type
const docTwo = {
    uid: 2,
    resourceName: ResourceType.FILM,
    data: "leon"
};
const docThree = {
    uid: 1,
    resourceName: ResourceType.BOOK,
    data: ['bread', 'soup']
};
console.log(docTwo);
console.log(docThree);
