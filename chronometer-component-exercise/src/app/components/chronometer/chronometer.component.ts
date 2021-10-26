import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chronometer',
  templateUrl: './chronometer.component.html',
  styleUrls: ['./chronometer.component.css']
})
export class ChronometerComponent implements OnInit {

  num1:number;

  constructor() { 
    this.num1=10;
  }

  ngOnInit(): void {
    
  }

  onClick(){
    let interval=setInterval(()=>{
      this.num1--;
      if(this.num1===0){
        clearInterval(interval);
      }
    },1000)
  }

}
