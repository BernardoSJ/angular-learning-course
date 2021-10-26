import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-greetings',
  templateUrl: './greetings.component.html',
  styleUrls: ['./greetings.component.css']
})
export class GreetingsComponent implements OnInit {

  message:string;
  paragraphid:string;
  inputid:string;

  constructor() {
    this.message="Hello everyone";
    this.paragraphid="mainParagraph";
    this.inputid="text";

    setTimeout(()=>{
      this.message="Another message";
    },3000);
   }

  ngOnInit(): void {
  }

  showMessage(): string{
    return 'Greetings from a method';
  }

}
