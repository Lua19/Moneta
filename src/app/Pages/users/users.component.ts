import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/Interfaces/contact';
import { WebUser } from 'src/app/Interfaces/WebUser.interface';
import { ContactServiceService } from 'src/app/Services/contact-service.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  contactsList : Contact[] = [];
  usersList : WebUser[] = [];

  constructor(private userService:ContactServiceService) { }

  ngOnInit(): void {
    this.userService.getAllContacts().subscribe(
      (res) => this.contactsList = res
    )
    this.userService.getAllUsers().subscribe(
      (res) => this.usersList = res
    )
  }

}
