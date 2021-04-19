import { Component, OnInit } from '@angular/core';
import { User } from '../User';
import { UserService } from '../user-service';

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
  constructor(private userService: UserService) { }
  save(){
    this.userArray.push(Object.assign({},this.user));
   const promise=this.userService.save(this.user);
   promise.subscribe(response=>{
     console.log(response);
   })

   //this.user.firstname="Raja";
  }

  ngOnInit(): void {
  }

}
