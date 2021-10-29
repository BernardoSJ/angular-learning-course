import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModelFormsComponent } from './model-forms/model-forms.component';
import { TemplateFormsComponent } from './template-forms/template-forms.component';

const routes: Routes = [
  {path:'',pathMatch:'full',redirectTo:'/model'},
  {path:'template',component:TemplateFormsComponent},
  {path:'model',component:ModelFormsComponent},
  {path:'**',redirectTo:'/model'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
