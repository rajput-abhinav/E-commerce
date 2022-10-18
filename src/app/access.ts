import { Injectable,  OnInit } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({providedIn: 'root'})
export class AccessService implements OnInit{
    haveAccess: boolean;
    accessChange:Subject<boolean>=new Subject<boolean>()
    constructor() {
        this.haveAccess=false;
    }

    ngOnInit(): void {}

    changeAccessStatus(access: boolean){
        this.haveAccess=access
        this.accessChange.next(this.haveAccess)
    }
    getaccessStatus(): boolean{
        return this.haveAccess;
    }
}
