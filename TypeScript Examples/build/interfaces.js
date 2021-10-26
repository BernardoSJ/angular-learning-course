function showPerson(oPerson) {
    console.log(oPerson);
}
showPerson({ name: "Bernardo", lastname: "Salinas", age: 23 });
function showCar(oCar) {
    console.log(oCar);
}
showCar({ brand: "Mereces", model: "C180" });
showCar({ brand: "Mereces", model: "C180", color: "red" });
let p1 = { x: 121, y: 87 };
const mysearch = (v, b) => {
    const result = v.search(b);
    return result > -1;
};
console.log(mysearch('Hello', 'He'));
class adult {
    constructor(pName, pAge, pCar) {
        this.car = pCar;
        this.age = pAge;
        this.name = pName;
    }
}
