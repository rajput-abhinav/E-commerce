import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccessService } from '../access';
import { UserListService } from '../user-list';

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

  constructor(
    private router: Router,
    private userService: UserListService,
    private accessService: AccessService
  ) {
    this.userlist = userService.getUserList();
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
  
  ngOnInit(): void {}

  onSubmit(data: any) {
    this.submitted=true;
    console.warn(data);
  }
}
