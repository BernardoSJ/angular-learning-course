import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { InfoComponent } from './components/info/info.component';

const routes: Routes = [
  { path:'', pathMatch:'full',redirectTo:'info'},
  { path: 'info',component:InfoComponent },
  { path: 'about',component:AboutComponent },
  { path: 'contact',component:ContactComponent },
  { path: '**', redirectTo:'info' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
