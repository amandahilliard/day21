import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from '../interfaces/post.interface';

@Injectable({
  providedIn: 'root'
})
export class PostService {
post: Post;
  constructor(private http: HttpClient) { }


  postsByUser(id: number){
    return this.http.get(`https://jsonplaceholder.typicode.com/posts?userId=${id}`);
  }

  postsById(id: number){
    return this.http.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
  }
}
