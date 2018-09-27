class Student {
    fullName: string;
    constructor(public firstName: string, public inName: string, public lastName: string) {
        this.fullName = firstName + " " + inName + " " + lastName;
    }
}
interface Person {
    firstName: string;
    lastName: string;
}

function greeter(person: Person) {
    return "Hello " + person.firstName + " " + person.lastName;
}
let user = new Student("Green", ".D.", "King");
document.body.innerHTML = greeter(user);