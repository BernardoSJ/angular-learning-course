import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  result:string;
  calc:boolean;

  constructor() {
    this.result="";
    this.calc=false;
   }



  ngOnInit(): void {
  }

  onClick($event:any){
    if(this.calc){
      this.result=$event.target.innerText;
      this.calc=false;
    }else{
      this.result+=$event.target.innerText;
    }
   
   
  }

  onResult(){
    this.result=eval(this.result);
    this.calc=true;
  }
}
