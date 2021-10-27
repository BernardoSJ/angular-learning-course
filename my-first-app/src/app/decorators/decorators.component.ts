import { Component, OnInit, Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-decorators',
  templateUrl: './decorators.component.html',
  styleUrls: ['./decorators.component.css']
})
export class DecoratorsComponent implements OnInit {

  @Input() message:string;
  @Input() sub:string;

  @Output() alert: EventEmitter<string>;

  constructor() { 
    this.message="Message alert";
    this.sub="sub";

    this.alert=new EventEmitter();
  }

  ngOnInit(): void {
  }

  onClick(){
    this.alert.emit("Alert");
  }

}
