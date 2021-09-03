import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { IntroComponent } from './component/intro/intro.component';
import { LoginpageComponent } from './component/loginpage/loginpage.component';
import { SidebarComponent } from './component/sidebar/sidebar.component';
import { ProfileComponent } from './component/profile/profile.component';
import { SettingsComponent } from './component/settings/settings.component';
import { UsersComponent } from './component/users/users.component';
import { BasicComponent } from './basic/basic.component';

@NgModule({
  declarations: [
    IntroComponent,
    AppComponent,
    NavbarComponent,
    LoginpageComponent,
    SidebarComponent,
    ProfileComponent,
    SettingsComponent,
    UsersComponent,
    BasicComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
