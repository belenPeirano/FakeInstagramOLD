import { Injectable } from '@angular/core';
import { User } from './image';

@Injectable({
  providedIn: 'root',
})
export class ImagesService {
  users: User[] = [
    {
      image: 'https://i.ytimg.com/vi/kmVCT2xpkQ0/maxresdefault.jpg',
      userProfile: 'https://imagenes.montevideo.com.uy/imgnoticias/201906/_W933_80/696600.jpg',
      userName: 'Juan',
      userLastName: 'Tabarez',
      user: '@JTaba',
    },
    {
      image: 'https://cdn.pixabay.com/photo/2017/09/25/13/12/puppy-2785074_1280.jpg',
      userProfile: 'https://el-pais.brightspotcdn.com/dims4/default/af41b67/2147483647/strip/true/crop/2784x3434+0+611/resize/600x740!/quality/90/?url=https%3A%2F%2Fel-pais-uruguay-production-web.s3.amazonaws.com%2Fbrightspot%2F5c%2F4e%2F4476a070480c82ac033864a7f7fd%2Fpablo-mendez.jpg',
      userName: 'Pablo',
      userLastName: 'Mendez',
      user: '@PVmendez',
    },
    {
      image: 'https://images6.alphacoders.com/678/678636.jpg',
      userProfile: 'https://uruguaymusical.com/wp-content/uploads/2021/04/sebastian-olivera.png',
      userName: 'Sebastian',
      userLastName: 'Olivera',
      user: '@Solivera',
    },
  ];

  getUser(): User[] {
    return this.users;
  };

}
