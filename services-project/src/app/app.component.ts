import { Component } from '@angular/core';
import { People } from './models/people.model';
import { PeopleService } from './services/people.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  arrayPeople:People[];

  constructor(private peopleService:PeopleService){
    this.arrayPeople=[];
  }

  ngOnInit(){
    this.arrayPeople=this.peopleService.getAll();
  }
}
