import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dynamic',
  templateUrl: './dynamic.component.html',
  styleUrls: ['./dynamic.component.css']
})
export class DynamicComponent implements OnInit {
@Input() index!:number;
  constructor() { }

  ngOnInit(): void {
  }

}
