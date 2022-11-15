import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DataComponent } from './data/data.component';

const routes: Routes = [
  { path: '',redirectTo:'data',pathMatch:'full' },
  { path: 'data', loadChildren:()=>import('./data/data.module').then(m=>m.DataModule)}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
