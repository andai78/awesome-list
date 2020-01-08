import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LayoutService } from 'src/app/core/services/layout.service';

@Component({
  selector: 'al-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  
  public homePath = 'home';
  public loginPath = 'login';
  public registerPath = 'register';

  constructor(private router: Router, private layoutService: LayoutService) { }

  ngOnInit() {
  }

  navigate(path: string) {
    this.router.navigate([path])
  }

  isActive(path: string) {
    this.router.isActive(path, true)
  }

  public toggleSidenav() {
    this.layoutService.toggleSidenav();
   }

}
