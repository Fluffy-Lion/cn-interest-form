import { Master, Develop, CyberSC } from "./Classes/Details.js";
// ensureing that whatever docOne is, it has to implement this interface
// structures code more and secures it
let docOne;
docOne = new Master("master", "bob", "liverpool", 8833);
let item = "hello";
let docs = [];
// will work
// docs.push(docOne)
// wont work
// docs.push(item)
const detailsOne = new Master("master", "leon", "manchester", 88);
console.log(detailsOne.format());
let details = [];
details.push(detailsOne);
console.log(details);
const form = document.querySelector('.new-item-form');
const course = document.querySelector('#type');
const name = document.querySelector('#name');
const location = document.querySelector('#location');
const contactNumber = document.querySelector('#contact-number');
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
    console.log(course.value, name.value, location.value, contactNumber.value);
});
