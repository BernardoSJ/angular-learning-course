const add = function (a, b) {
    return a + b;
};
const add2 = function (a, b) {
    return a + b;
};
const add3 = function (a, b) {
    return a + b;
};
//Optional params and given values
function fullname(name, lastname) {
    return `${name} ${lastname}`;
}
console.log(fullname("Bernardo", "Salinas"));
//REST parameters
function fullname2(name, ...restName) {
    return name + " " + restName.join(' ');
}
console.log('Bernardo', "Salinas", "Jaquez");
