import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Feature1RoutingModule } from './feature1-routing.module';
import { Feature1Component } from './feature1.component';
import { DynamicComponent } from './dynamic/dynamic.component';
import { ChildComponent } from './child/child.component';
import { HttpClientModule } from '@angular/common/http';
import { SizePipe } from './size.pipe';


@NgModule({
  declarations: [
    Feature1Component,
    DynamicComponent,
    ChildComponent,
    SizePipe
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    Feature1RoutingModule
  ]
})
export class Feature1Module { }
