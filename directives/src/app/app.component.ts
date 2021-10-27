import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  properties:any;

  classes:string[];

  show:boolean;

  people:any;

  optionNumber:string;
  
  constructor(){
    this.properties={
      color:'red', 
      fontSize:'24px'
    }
    this.classes=['light'];
    this.classes.push('red');
    this.show=true;

    this.people=[
      {name:"Bernardo",lastname:"Salinas",age:23},
      {name:"Jun",lastname:"Amaki",age:26}
    ];

    this.optionNumber='5';
  }

  changeColor(color:string){
    switch(color){
      case 'g':
        this.properties.color='green';
        break;
      case 'r':
        this.properties.color='red';
        break;
      case 'y':
        this.properties.color='yellow';
        break;
    }
  }

  onChange($event:any){
    this.properties.fontSize=$event.target.value+'px';
  }

  onClick(){
    this.show=!this.show;
  }


}


