import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';
import { IPost } from 'src/interface/ipost';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private client:HttpClient) {
  }
   getPosts():Observable<IPost[]>{
       return this.client.get<IPost[]>('http://localhost:3000/posts')   
  }  
}
