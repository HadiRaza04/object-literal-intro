let _name = "Raza";
let _class = "Matric";

let nameObj = {
    _name: _name,  //This is old way
}
let nameObj1 = {
    _name,         //This is new way
    _class         //This is new way
}
console.log(`${nameObj._name} is in ${nameObj1._class}.`);


let firstName = "fName";
let lastName = "lName";

let fullName = {
    [firstName]: "Hadi",  //ES6 version "Defining variable as a key"
    [lastName]: "Raza"    //ES6 version "Defining variable as a key"
}
console.log(`${fullName.fName} ${fullName.lName}`); // Hadi Raza

// ------------------------------ Variable concatenation ------------------------------//
let n = "student";

let studentObj = {
    [n + "Name"]: "Hasan",
    section: "A"
}
console.log(studentObj.studentName); // Output will be Hasan
console.log(studentObj[n + "Name"]); // Output will be Hasan

