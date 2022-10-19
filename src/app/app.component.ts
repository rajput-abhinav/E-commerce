import { Component } from '@angular/core';
import { AccessService } from './access';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  access: any
  show = true;
  constructor(private accessService: AccessService) {
    this.access = this.accessService.getaccessStatus();
  }

  hide(){
    this.show=!this.show
  }
}
