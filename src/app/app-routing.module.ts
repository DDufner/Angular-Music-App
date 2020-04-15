import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
//album routing imports
import { AlbumsComponent } from './albums/albums.component';
import { ShowAlbumComponent } from './show-album/show-album.component';
import { AddAlbumComponent } from './add-album/add-album.component';
import { EditAlbumComponent } from './edit-album/edit-album.component';
//import { AppRoutingModule } from './app-routing.module';

const routes: Routes = [
  {
    path: 'albums',
    component: AlbumsComponent,
    data: { title: 'albums' }
  },
  {
    path: 'show-Album/:id',
    component: ShowAlbumComponent,
    data: { title: 'Show Album' }
  },
  {
    path: 'add-Album',
    component: AddAlbumComponent,
    data: { title: 'Add Album' }
  },
  {
    path: 'edit-Album/:id',
    component: EditAlbumComponent,
    data: { title: 'Edit Album' }
  },
  { path: '',
    redirectTo: '/albums',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class AppRoutingModule { }
