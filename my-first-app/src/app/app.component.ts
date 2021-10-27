import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  titles:string[];

  person:any;

  text:string;
  constructor(){
    this.titles=["zelda","mario bros"];
    this.text="Value"

    this.person={}
  }

  onalert(){
    alert("pulso");
  }
}
