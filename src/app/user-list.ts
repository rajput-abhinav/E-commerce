import { Injectable, OnInit } from "@angular/core";
import { User } from "./users";

@Injectable({providedIn:'root'})
export class UserListService {
    private userList:User[]=[];
    constructor(){}
    addUser(User:User){
        this.userList.push(User)
    }
    getUserList():User[]{
        return this.userList;
    }
}