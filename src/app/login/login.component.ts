import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccessService } from '../access';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  email: any;
  password: any;
  accessed = false;
  userlist: any;
  _subscription: any;
  submitted:boolean =false
  login: any

  constructor(
    private router: Router,
    // private userService: UserListService,
    private accessService: AccessService,
    private appComponent: AppComponent,
    private http:HttpClient
  ) {
    // this.userlist = userService.getUserList();
    this.accessed = accessService.haveAccess;
    this._subscription = accessService.accessChange.subscribe(
      (value) => (this.accessed = value)
      
    );
  }
 
  

  loginUser() {
    for (let i = 0; i < this.userlist.length; i++) {
      if (
        this.userlist[i].emailId == this.email &&
        this.userlist[i].password == this.password
      ) {
        this.accessed = true;
        this.accessService.changeAccessStatus(this.accessed);
        this.router.navigateByUrl('products');
        break;
      }
    }
  }
  
  logindata(data:any){
    console.log(data.value);
    
    this.http.get<any>("http://localhost:3000/signup")
    .subscribe(res=>{
      const user = res.find((a:any)=>{
        console.log(a);                   
        console.log(data.value);                   
        return a.email === data.value.Email && a.password === data.value.password});
        console.log(user);
        
        if(user){
          alert('you are successfully login');
          this.router.navigate(['products']);
        }else{
          alert('User Not Found');
          this.router.navigate(['login']);
        }
      },
      err=>{
        alert('Something was wrong');
      })
    
  }

  ngOnInit(): void {}

  onSubmit(data: any) {
    this.submitted=true;
    console.warn(data);
  }

  hide(){
    this.login = this.appComponent.hideLogin()
    console.log(this.login)
  }
}
