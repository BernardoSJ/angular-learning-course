import { animate, keyframes, state, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations:[
    trigger('changeColor',[
      state('red',style({
        'background-color':'red'
      })),

      state('yellow',style({
        'background-color':'yellow',
        'transform':'scale(2)'
      })),

      state('green',style({
        'background-color':'green'
      })),

      transition('green => yellow',animate(500)),
      transition('yellow => red',animate(1000)),
      transition('red => green',animate('.5s ease-in')),
      // transition('void => *',[
      //   style({'transform':'translateX(-100%)'}),
      //   animate(1000)
      // ])

      transition('void => *',[
        animate(500,keyframes([
          style({opacity:0,transform:'translateX(-100%)',offset:0}),
          style({opacity:1,transform:'translateX(20px)',offset:0.7}),
          style({opacity:1,transform:'translateX(0)',offset:1})
        ]))
      ])
    ])
  ]
})
export class AppComponent {
  color:string;

  constructor(){
    this.color='green';
  }

  ngOnInit(){
    setInterval(()=>{
      if(this.color==='green'){
        this.color='yellow';
      } else if(this.color==='yellow'){
        this.color='red';
      }else if(this.color==='red'){
        this.color='green';
      }
    },2000);
  }
}
