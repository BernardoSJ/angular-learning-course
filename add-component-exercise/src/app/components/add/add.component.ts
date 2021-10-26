import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  num1:number;
  num2:number;
  result:number;

  constructor() { 
    this.num1=4;
    this.num2=30;
    this.result=0;
  }

  ngOnInit(): void {
  }

  onClick(){
    this.result=this.num1+this.num2;
  }

}
