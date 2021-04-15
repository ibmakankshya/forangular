import { Component, OnInit } from '@angular/core';
import { User } from '../User';

@Component({
  selector: 'app-userform',
  templateUrl: './userform.component.html',
  styleUrls: ['./userform.component.css']
})
export class UserformComponent implements OnInit {
  title:string="Userform";
  user:User=new User();
  userArray:User[]=[];
  //firstname='Ram';
  //age=18;
  constructor() { }
  save(){
    this.userArray.push(Object.assign({},this.user));
    console.log("UP");
    console.log(this.user.firstname);
    //this.user.firstname="Raja";
  }

  ngOnInit(): void {
  }

}
