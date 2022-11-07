import { HttpResponseBase } from '@angular/common/http';
import { Component } from '@angular/core';
import { AccessService } from './access';
import { CommonService } from './common.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  access: any
  loginShow = true;
  signupShow = true;
  constructor(private accessService: AccessService,private commonService:CommonService) {
    this.access = this.accessService.getaccessStatus();
  }
  addUser(formObj: any){
    this.commonService.createUser(formObj).subscribe((Response)=>{
      console.log("updarted")
    })
  }

  hideSignup(){
    this.signupShow=!this.signupShow
  }

  hideLogin(){
    this.loginShow=!this.loginShow
  }
}
