import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { forkJoin } from 'rxjs';
import { DynamicComponent } from './dynamic/dynamic.component';

@Component({
  selector: 'app-feature1',
  templateUrl: './feature1.component.html',
  styleUrls: ['./feature1.component.css']
})
export class Feature1Component implements OnInit {
@ViewChild('container',{read:ViewContainerRef}) container!:ViewContainerRef
private _counter = 1;
user={
  firstName:'manoj',
  lastName:'munda'
}
response = [];
  constructor(private http:HttpClient) {
    const request1 =this.http.get('https://jsonplaceholder.typicode.com/posts');
    const request2 = this.http.get('https://jsonplaceholder.typicode.com/albums');
    const requestArray = [];
    requestArray.push(request1)
    requestArray.push(request2)
    forkJoin(requestArray).subscribe((res)=>{
      console.log(res[0])
    })
   }

  ngOnInit(): void {
  }
  add(){
    //this.container.clear();
    const componentRef =this.container.createComponent(DynamicComponent)
    componentRef.instance.index = this._counter++
  }
  changeName(){
    this.user.firstName='rohan'
  }
  changeObj(){
    this.user={
      firstName:'rohit',
      lastName:'jadhav'
    }
  }

}
