import { HasFormatter } from '../Interfaces/HasFormatter.js'
// now telling it that it must have this formatter when it returns a string
// if we didnt have that format method then it will throw an error
// it must have the format method, it sucessfully implements that
class Details implements HasFormatter {
    constructor(  
        readonly course: string,   
        readonly name: string,
        readonly location: string,
        private contactNumber: number,
    ){}
        format(){
            return `You (${this.name}) have shown interest in ${this.course}`
        }
    
}

export class Master extends Details {
    constructor(
        course: string,
        name: string,
        location: string,
        contactNumber: number,
    ){
        super(course, name, location, contactNumber)
    }
   
}

export class Develop extends Details {
    constructor(
        readonly course: string,
        name: string,
        location: string,
        contactNumber: number
    ){
        super(course, name, location, contactNumber)
    }
    // format(){
    //     return `${this.name} has shown interest in ${this.course}`
    // }
}

export class CyberSC extends Details {
    constructor(
        readonly course: string,
        name: string,
        location: string,
        contactNumber: number
    ){
        super(course, name, location, contactNumber)
    }
    // format(){
    //     return `${this.name} has shown interest in ${this.course}`
    // }
}