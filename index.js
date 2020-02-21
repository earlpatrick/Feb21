/*let stud1 = {name:"JJ Dela Cruz", section:"2ITH", age:21};
let stud2 = {name:"Pedo Bear", section:"2ITH", age: 22};

function displayInfo(){
    console.log(`${this.name}, ${this.age} is enrolled in section ${this.section}`)
}

let x = displayInfo.bind(stud1);
x();

------------------------------------------------------------------------------------------------------------------

class Student{
    constructor(name, section, age){
        this.name = name;
        this.section = section;
        this.age = age;
    }

    static study(subject){
        document.write(`<h2>${this.name} is enrolled in ${subject}</h2>`);
    }

}

let stud1 = new Student("Cathy Garcia", "2ITH", 69);
Student.study("ICS2609");
*/

class Student{
    setName(name){
        this.name = name;
}
getName(){
    return this.name;
    }
}

let stud1 = new Student();
stud1.setName("JJ DC");
document.write(stud1.getName())

