import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlbumsComponent } from './albums/albums.component';
import { ShowAlbumComponent } from './show-album/show-album.component';
import { AddAlbumComponent } from './add-album/add-album.component';
import { EditAlbumComponent } from './edit-album/edit-album.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import {
  MatInputModule,
  MatPaginatorModule,
  MatProgressSpinnerModule,
  MatSortModule,
  MatTableModule,
  MatIconModule,

  MatButtonModule,
  MatCardModule,
  MatFormFieldModule } from "@angular/material";

@NgModule({
  declarations: [
    AppComponent,
    AlbumsComponent,
    ShowAlbumComponent,
    AddAlbumComponent,
    EditAlbumComponent,
    //BrowserModule,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),//double check the ....
    AppRoutingModule,
    FormsModule,
    RouterModule, //.forRoot("router-outlet")
    HttpClientModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
