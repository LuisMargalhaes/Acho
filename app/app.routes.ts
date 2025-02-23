import { Routes } from '@angular/router';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { GalleryComponent } from './componentes/gallery/gallery.component';
import { ExibirprofileComponent } from './exibirprofile/exibirprofile.component';



export const routes: Routes = [
  {
    path: 'NavBar',
    component: NavbarComponent,
  },
  {
    path: 'Gallery',
    component: GalleryComponent,
  },
  {
    path: 'profile',
    component:ExibirprofileComponent,
  },
];
