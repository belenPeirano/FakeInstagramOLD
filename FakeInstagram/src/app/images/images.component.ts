import { Component, inject } from '@angular/core';
import { User } from '../image';
import { ImagesService } from '../images.service';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.css']
})
export class ImagesComponent {
  usersList: User[] = [];
  imagesService: ImagesService = inject(ImagesService);

  constructor() {
    this.usersList = this.imagesService.getUser();
  }
}
