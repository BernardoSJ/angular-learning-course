import { Component } from '@angular/core';
import { PostsService } from './services/posts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  array:any[100];
  constructor(private postService:PostsService){
    this.array=[];
  }

  ngOnInit(){
    this.postService.getAll()
    .then(posts=>this.array=posts)
    .catch(error=>console.log(error));
  }

  async onClick(id:number){
    try{
      const posts=await this.postService.getById(id);
      console.log(posts);
    }catch(error){
      console.log(error);
    }
    
  }

  onClickPost(){
    this.postService.create({
      title:'New title',
      body:'Bosy post',
      userId:1 
    }).then(response=>console.log(response))
    .catch(error=>console.log(error));
  }
}
