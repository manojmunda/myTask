import { Component, OnInit } from '@angular/core';
import { MyServiceService } from '../my-service.service';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {
  name = 'Angular 5';
  //posts = ' '.repeat(100).split('').map((s, i) => i + 1)
  posts:any
  p = 1;
  constructor(private service:MyServiceService) { }

  ngOnInit(): void {
    this.service.getData().subscribe((res)=>{
      this.posts=res
      console.log(res)
    })
  }
 
}
