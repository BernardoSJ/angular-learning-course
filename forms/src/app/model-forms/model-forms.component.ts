import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-model-forms',
  templateUrl: './model-forms.component.html',
  styleUrls: ['./model-forms.component.css']
})
export class ModelFormsComponent implements OnInit {


  form:FormGroup;

  constructor() { 
    this.form=new FormGroup({
      name:new FormControl('',[
        Validators.required,
        Validators.minLength(3)
      ]),
      lastname:new FormControl('',[
        Validators.maxLength(10)
      ]),
      age:new FormControl('',[
        this.ageValidation
      ]),
      id:new FormControl(''),
      password:new FormControl(''),
      repeatPassword:new FormControl(''),
      email:new FormControl('',[
        Validators.pattern(/^[^@]+@[^@]+\.[a-zA-Z]{2,}$/)
      ])
    });
  }

  ngOnInit(): void {
  }

  onSubmit(){
    alert(this.form.value);
  }
  
  ageValidation(formControl:any){
    const value=formControl.value;
    
    const max=65;
    const min=18;

    if(value>=min && value<=max){
      return null;
    }else{
      return { ageValidation:{max,min}}
    }
    
  }

}
