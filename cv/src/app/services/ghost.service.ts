import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GhostService {

  env=environment;
  constructor(private http:HttpClient) {

 
   }


  getPosts(){
    return this.http.get(this.env.ghostApi+"posts");
    
  }
}
