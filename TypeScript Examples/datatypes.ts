//Boolean
let isValid:boolean=true;
isValid=false;

//number
let age:number=12;

//String
let name_user:string="Bernardo";
let lastname_user:string="Salinas";

let full_name:string=`${name_user} ${lastname_user}`;

//Array
let numbers:number[]=[1,2,3,4,5,6];
let numbers2: Array<number> =[1,2,3,4];

//Tuple
let site:[string,number]=["Home",2];

//Enum
enum State{
    Offline,
    Indefine,
    Online
}

let Status:State=State.Online;
console.log(Status);

//Unknown
let notype:unknown="Hello";
notype=23;
notype=true;

//Any
let anytype:any="New Message";

//Void
function logger(): void{
    console.log('Logger');
}