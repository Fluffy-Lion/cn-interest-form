// now telling it that it must have this formatter when it returns a string
// if we didnt have that format method then it will throw an error
// it must have the format method, it sucessfully implements that
class Details {
    constructor(course, name, location, contactNumber) {
        this.course = course;
        this.name = name;
        this.location = location;
        this.contactNumber = contactNumber;
    }
    format() {
        return `You (${this.name}) have shown interest in ${this.course}`;
    }
}
export class Master extends Details {
    constructor(course, name, location, contactNumber) {
        super(course, name, location, contactNumber);
    }
}
export class Develop extends Details {
    constructor(course, name, location, contactNumber) {
        super(course, name, location, contactNumber);
        this.course = course;
    }
}
export class CyberSC extends Details {
    constructor(course, name, location, contactNumber) {
        super(course, name, location, contactNumber);
        this.course = course;
    }
}
