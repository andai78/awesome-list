import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'al-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  
  public homePath = 'home';
  public loginPath = 'login';
  public registerPath = 'register';

  constructor(private router: Router) { }

  ngOnInit() {
  }

  navigate(path: string) {
    this.router.navigate([path])
  }

  isActive(path: string) {
    this.router.isActive(path, true)
  }

}
