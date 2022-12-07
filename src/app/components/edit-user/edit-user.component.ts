import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MyServiceService } from 'src/app/my-service.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  id =this.route.snapshot.params['id']
  userObj: any = {};
  constructor( public crudService:MyServiceService,public route:ActivatedRoute,public router:Router) { }

  ngOnInit(): void {
    this.crudService.getSingleUser(this.id).subscribe((res: {})=>{
      this.userObj=res
    })
  }
  updateUser(id: any, data: any) {
    if(window.confirm('Are you sure to update')){
      this.crudService.updateUser(this.id,data).subscribe((res)=>{
        this.router.navigate(['/list'])
      })
    }
  }

}
