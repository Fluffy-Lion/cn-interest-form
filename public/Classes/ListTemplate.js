export class ListTemplate {
    // private property, called container, 
    // will output a ul
    // type of an unorder list element
    constructor(container) {
        this.container = container;
    }
    // this has to take in the hasFormatter method
    // because all classes will have this 
    // heading will be at the top of the li tag
    // position, one of 2, either at the start or at the end
    // the item is being the class that is to be rendered eg(Master, Develop)
    render(item, heading, pos) {
        // creating a list element, automatically infers the html type
        const li = document.createElement('li');
        const h4 = document.createElement('h4');
        // value of the h4 is the heading string
        h4.innerText = heading;
        // add that h4 to the list element
        li.append(h4);
        const p = document.createElement('p');
        // this implements the has formatter is in the item
        // returns a formatted string
        p.innerText = item.format();
        li.append(p);
        if (pos === 'start') {
            // prepend means put it at the start
            this.container.prepend(li);
        }
        else {
            this.container.append(li);
        }
    }
}
