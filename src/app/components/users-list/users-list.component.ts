import { Component, OnInit } from '@angular/core';
import { MyServiceService } from 'src/app/my-service.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
  Users: any = [];
  constructor(public crudService:MyServiceService) { }

  ngOnInit(): void {
    this.fetchUsers()
  }
  fetchUsers() {
    return this.crudService.getUsers().subscribe((res: {})=>{
      this.Users = res;
    })
  }
  delete(id: any) {
    if(window.confirm('Are you sure to delete?')){
      this.crudService.deleteUser(id).subscribe((res)=>{
        this.fetchUsers();
      })
    }
  }
}
