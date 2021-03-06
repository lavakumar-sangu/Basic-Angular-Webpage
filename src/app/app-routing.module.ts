import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginpageComponent } from './component/loginpage/loginpage.component';
import { ProfileComponent } from './component/profile/profile.component';
import { SettingsComponent } from './component/settings/settings.component';
import { UsersComponent } from './component/users/users.component';
import { IntroComponent } from './component/intro/intro.component';
import { DataStorageComponent } from './data-storage/data-storage.component';



const routes: Routes = [
  {path: 'login', component: LoginpageComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'settings', component: SettingsComponent },
  { path: 'users', component: UsersComponent },
  { path: 'home', component: IntroComponent },
  { path :'data', component:DataStorageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
