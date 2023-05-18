import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  discover: string = "discover";
  search = "Search";
  upload = "Upload Picture";
  chat = "Chat";
  profile = "Profile";
}
