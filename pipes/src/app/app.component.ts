import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  //Currency pipe
  price:number;

  //Decimal Pipe
  num:number;

  //Date pipe
  date:Date;

  //Percent Pipe
  randomNum:number;

  //Json Pipe
  student:any;

  //Lower case pipe, upper case pide title pipe
  text:string;

  //Slice pipe
  animals:string[];

  

  constructor(){
    this.price=198.87;
    this.num=3.929299273;
    this.date=new Date();
    this.randomNum=Math.random();
    this.student={
      name:'Berni',
      lastname:'salinas'
    }
    this.text="My girlfriend is Jun Amaki"
    this.animals=['dog','cat','bird'];

   
  }
}
