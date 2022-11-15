import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyServiceService {

  constructor(private http:HttpClient) { }
  baseUrl="http://universities.hipolabs.com/search?country=United+States"
  getData(){
 return this.http.get(this.baseUrl)
  }
}
