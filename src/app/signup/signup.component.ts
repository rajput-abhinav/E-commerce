import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { EnrollmentService } from '../enrollment.service';

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

  constructor(private router:Router,private http:HttpClient) { }
  //private _enrollmentService: EnrollmentService
  
  ngOnInit(): void {
    
  }

  // userModel = new UserC('','','',true)
  
  // signupUser(value: any){
    
  //   this.obj={name:this.name,email:this.email,password:this.password}
    
  //   this.router.navigateByUrl('login')
  // }


  signupdata(data:any){
    this.http.post<any>("http://localhost:3000/signup",data.value).subscribe((res)=>
    {

      console.log(res);
        alert('data added successfully');
        window.location.reload();
        this.router.navigateByUrl('login');
    })
    
  


  }


  // onSubmit(){
  //   this.submitted= true;
  //   // this._enrollmentService.enroll(this.userModel)
  //   .subscribe(data=> console.log('Success!', data),
  //   error=> console.log('Error!', error)
  //   );
  // }

 
}



