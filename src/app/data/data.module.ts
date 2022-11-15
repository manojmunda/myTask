import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DataRoutingModule } from './data-routing.module';
import { DataComponent } from './data.component';
import { RouterModule } from '@angular/router';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import {NgxPaginationModule} from 'ngx-pagination';


@NgModule({
  declarations: [
    DataComponent
  ],
  imports: [
    CommonModule,
    DataRoutingModule,
    RouterModule,
    InfiniteScrollModule,
    MatPaginatorModule,
    MatTableModule,
    NgxPaginationModule
  ]
})
export class DataModule { }
