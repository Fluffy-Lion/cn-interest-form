import { Details } from "./Classes/Details.js";
// ensureing that whatever docOne is, it has to implement this interface
let docOne;
docOne = new Details("master", "bob", "liverpool", 8833);
const detailsOne = new Details("master", "leon", "manchester", 88);
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
    console.log(course.value, name.value, location.value, contactNumber.value);
});
