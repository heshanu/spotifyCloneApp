import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { SearchComponent } from './pages/search/search.component';
import { SignupComponent } from './pages/signup/signup.component';
import { PlaylistComponent } from './pages/playlist/playlist.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'search', component: SearchComponent },
  {path:'dashboard',component:DashboardComponent},
  { path: 'signup', component: SignupComponent },
  {path:'playList',component:PlaylistComponent},
  {path:'**',component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
