import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { PictureComponent } from './page/picture/picture.component';
import { ProfileComponent } from './page/profile/profile.component';

const routes: Routes = [
  {path:"profile", component: ProfileComponent},
  {path:'picture', component: PictureComponent},
  {path:'home', component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
