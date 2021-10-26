interface person{
    name:string;
    lastname:string;
    age:number;
}

function showPerson(oPerson:person){
    console.log(oPerson);
}

showPerson({name:"Bernardo",lastname:"Salinas",age:23});

//Option properties

interface car{
    brand:string;
    model:string;
    color?:string; //optional
}

function showCar(oCar:car){
    console.log(oCar);
}

showCar({brand:"Mereces",model:"C180"});
showCar({brand:"Mereces",model:"C180",color:"red"});

//Only read properties
interface point{
    readonly x:number;
    readonly y:number;
}

let p1:point={x:121,y:87};

//Functions
interface Search{
    (value:string,search:string):boolean;
}

const mysearch:Search=(v:string, b:string):boolean=>{
    const result=v.search(b);
    return result>-1;
}

console.log(mysearch('Hello','He'));

//Class interface
interface human{
    name:string;
    age:number;
}

class adult implements human{
    name:string;
    age:number;
    car:boolean;

    constructor(pName:string,pAge:number,pCar:boolean){
        this.car=pCar;
        this.age=pAge;
        this.name=pName;
    }
}
