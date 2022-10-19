import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserListService } from '../user-list';
import { EnrollmentService } from '../enrollment.service';
import { UserC } from '../user_c';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent implements OnInit {
  name: any;
  email: any;
  password: any;
  obj: any;
  submitted:boolean = false;

  constructor(private userService: UserListService, private router:Router,private _enrollmentService: EnrollmentService) { }
 
  ngOnInit(): void {
  }

  userModel = new UserC('','','',true)
  signupUser(value: any){
    
    this.obj={name:this.name,email:this.email,password:this.password}
    this.userService.addUser(this.obj)
    this.router.navigateByUrl('login')
  }


  onSubmit(){
    this.submitted= true;
    this._enrollmentService.enroll(this.userModel)
    .subscribe(data=> console.log('Success!', data),
    error=> console.log('Error!', error)
    );
  }
}

console.log('userModel');

