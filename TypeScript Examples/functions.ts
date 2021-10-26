const add:(a:number,b:number)=>number=function(a:number,b:number):number{
    return a+b;
}

const add2=function(a:number,b:number):number{
    return a+b;
}

const add3:(a:number,b:number)=>number=function(a,b){
    return a+b;
}

//Optional params and given values
function fullname(name:string,lastname?:string):string{
    return `${name} ${lastname}`;
}

console.log(fullname("Bernardo","Salinas"));

//REST parameters
function fullname2(name:string,...restName:string[]):string{
    return name+ " "+ restName.join(' ');
}

console.log('Bernardo',"Salinas","Jaquez")