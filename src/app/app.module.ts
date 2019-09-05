import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { GalleryComponent } from './gallery/gallery.component';
import { AboutService } from 'src/services/about.service';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { GalleryService } from 'src/services/gallery.service';
import { AuthenticationComponent } from './authentication/authentication.component';
import { AuthenticationService } from 'src/services/authentication.service';
import { AuthenticationGuard } from 'src/services/authentication-guard.service';
import { DetailPhotoComponent } from './detail-photo/detail-photo.component';

const appRoutes: Routes = [
  { path: 'about', canActivate: [AuthenticationGuard], component: AboutComponent },
  { path: 'gallery', canActivate: [AuthenticationGuard], component: GalleryComponent },
  { path: 'authentication', component: AuthenticationComponent},
  {
    path: '',
    redirectTo: '/authentication',
    pathMatch: 'full'
  },
  { path: '**', redirectTo: '/authentication'}
];

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    GalleryComponent,
    AuthenticationComponent,
    DetailPhotoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    NgbModule
  ],
  providers: [
    AboutService, 
    GalleryService,
    AuthenticationService,
    AuthenticationGuard],
  bootstrap: [AppComponent],
  entryComponents: [
    DetailPhotoComponent
  ]
})
export class AppModule { }
