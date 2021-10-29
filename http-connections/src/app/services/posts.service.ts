import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  url:string;
  constructor(private http:HttpClient) { 
    this.url='https://jsonplaceholder.typicode.com/posts';
  }

  getAll() {
    return this.http.get(this.url).toPromise();
  }

  getById(id:number){
    return this.http.get(this.url+'/'+id).toPromise();
  }

  create({title, body, userid}:any){
    const bodyRequest={title,body,userid};

    const httpOptions={
      headers:new HttpHeaders({
        'Content-Type':'application/json;charset=UTF-8'
      })
    }
    return this.http.post<any>(this.url,bodyRequest,httpOptions).toPromise();
    
    
  }

  update({id,title,body,userId}:any){
    return this.http.put(this.url+'/'+id,{id,title,body,userId}).toPromise();
  }

  delete(id:number){
    return this.http.delete(this.url+'/'+id).toPromise();
  }
}
