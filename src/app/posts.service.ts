import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http'; 
@Injectable()
export class PostsService {

  constructor(public http: Http) { }

  getPosts(){
    return this.http.get('http://jsonplaceholder.typicode.com/posts?userId=1')
  }

}
