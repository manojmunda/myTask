import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DataComponent } from './data/data.component';
import { AddUserComponent } from './components/add-user/add-user.component';
import { EditUserComponent } from './components/edit-user/edit-user.component';
import { UsersListComponent } from './components/users-list/users-list.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'add' },
  { path: 'add', component: AddUserComponent },
  { path: 'edit/:id', component: EditUserComponent },
  { path: 'list', component: UsersListComponent },
  { path : 'feature', loadChildren:()=>import('./feature1/feature1.module').then(m=>m.Feature1Module)},
  { path: 'data', loadChildren:()=>import('./data/data.module').then(m=>m.DataModule)}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
