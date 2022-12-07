import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MyServiceService } from 'src/app/my-service.service';
import { UsernameValidator } from './whitespace.validator';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  form!:FormGroup
  @Input() userObj = { firstname: '',lastname: '', email: '', phone: 0 ,dob:'',doj:''}
  constructor(public crudService:MyServiceService,public router:Router,private fb:FormBuilder) { }

  ngOnInit(): void {
    this.form=this.fb.group({
      firstname:['',[Validators.required,UsernameValidator.cannotContainSpace]],
      lastname:['',[Validators.required,UsernameValidator.cannotContainSpace]],
      email:['',[Validators.required,Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$'),UsernameValidator.cannotContainSpace]],
      phone:['',[Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$"),UsernameValidator.cannotContainSpace]],
      dob:['',Validators.required],
      doj:['',Validators.required],
    })
  }
  onSubmit(){
    this.crudService.addUser(this.form.value).subscribe((res:{})=>{
      this.router.navigate(['/list'])
    })
console.log(this.form.value)
  }
  get m() {
    return this.form.controls;
  }

}
