import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

// export interface navitem{
//   name:string;
//   href :string;
//   link:string;
// }

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent  {
// sidenavlist : Array<navitem>=[]
opened =true;

isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver) {
    // this.sidenavlist = [{name:"Profile",href :"#",link:"/profile"},
    // {name:"Users",href :"#",link:"/users"},
    // {name:"Settings",href :"#",link:"/settings"},
    // {name:"UserData",href :"#",link:"/data"},
    // {name:"Login",href :"#",link:"/login"},]
  }

}

