import { Injectable } from '@angular/core';

import { People } from '../models/people.model';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {


  people:People[];

  constructor() { 
    this.people=[
      new People('Berni','Salinas',23,true),
      new People('Bernardo','Salinas',23,true)
    ];
  }

  getAll(){
    return this.people;
  }
}
