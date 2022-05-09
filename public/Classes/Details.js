// now telling it that it must have this formatter when it returns a string
// if we didnt have that format method then it will throw an error
// it must have the format method, it sucessfully implements that
export class Details {
    constructor(course, name, location, contactNumber) {
        this.course = course;
        this.name = name;
        this.location = location;
        this.contactNumber = contactNumber;
    }
    format() {
        return `${this.name} has shown interest in ${this.course}`;
    }
}
