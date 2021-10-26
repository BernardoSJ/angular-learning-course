//Boolean
let isValid = true;
isValid = false;
//number
let age = 12;
//String
let name_user = "Bernardo";
let lastname_user = "Salinas";
let full_name = `${name_user} ${lastname_user}`;
//Array
let numbers = [1, 2, 3, 4, 5, 6];
let numbers2 = [1, 2, 3, 4];
//Tuple
let site = ["Home", 2];
//Enum
var State;
(function (State) {
    State[State["Offline"] = 0] = "Offline";
    State[State["Indefine"] = 1] = "Indefine";
    State[State["Online"] = 2] = "Online";
})(State || (State = {}));
let Status = State.Online;
console.log(Status);
//Unknown
let notype = "Hello";
notype = 23;
notype = true;
//Any
let anytype = "New Message";
//Void
function logger() {
    console.log('Logger');
}
