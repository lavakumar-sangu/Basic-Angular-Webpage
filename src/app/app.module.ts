import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { IntroComponent } from './component/intro/intro.component';
import { LoginpageComponent } from './component/loginpage/loginpage.component';
import { SidebarComponent } from './component/sidebar/sidebar.component';
import { ProfileComponent } from './component/profile/profile.component';
import { SettingsComponent } from './component/settings/settings.component';
import { UsersComponent } from './component/users/users.component';
import { DataStorageComponent } from './data-storage/data-storage.component';
import { DataViewerComponent } from './data-storage/data-viewer/data-viewer.component';





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
    DataStorageComponent,
    DataViewerComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
