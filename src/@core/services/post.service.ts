import { ResponsePageable } from './../interfaces/response-pageable.interface';
import { Post } from './../models/post.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private baseURL = `${environment.baseUrlApi}/${environment.versionApi}`;

  constructor(private http: HttpClient) { }

  save(post: Post){
    return this.http.post<Post>(`${this.baseURL}/admin/posts`, post);
  }

  findById(id: number){
    return this.http.get<Post>(`${this.baseURL}/protected/posts/${id}`);
  }

  findAll(page: number, size: number){
    return this.http.get<ResponsePageable<Post>>(`${this.baseURL}/posts?page=${page}&size=${size}&sort=id,desc`, {headers: { skip: 'true' }});
  }

  delete(id: number){
    return this.http.delete(`${this.baseURL}/admin/posts/${id}`);
  }

  count(){
    return this.http.get<number>(`${this.baseURL}/admin/posts/count`);
  }

}
