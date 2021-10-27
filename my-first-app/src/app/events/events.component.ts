import { Component, DebugElement, OnInit } from '@angular/core';
import { Event } from '@angular/router';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  message:string;
  constructor() { 
    this.message="outside square";
  }

  ngOnInit(): void {
  }

  onClick($event:any){
    console.log("button pushed");
    console.log($event.target);
  }

  onChange($event:any){
    console.log($event.target.value);
  }

  onMouseenter(){
    this.message="inside square"
  }

  onMouseout(){
    this.message="outside square"
  }

  onChangeInput($event:any){
    console.log($event.target.value);
  }

  onInput($event:any){
    console.log($event.target.value);
  }

  onfocus(){
    console.log("Recibe foco");
  }

  onblur(){
    console.log("Pierde foco");
  }

}
