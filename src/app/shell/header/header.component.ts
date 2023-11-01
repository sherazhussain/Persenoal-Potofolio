import { Title } from '@angular/platform-browser';
import { Component, OnInit, Input, HostListener, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Router } from '@angular/router';
import { MatSidenav } from '@angular/material/sidenav';

import { AuthenticationService, CredentialsService } from '@app/auth';
import { Subscription, fromEvent } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() sidenav!: MatSidenav;
  mobileMenuOpen: boolean = false;
  isMobileMenuOpen: boolean = false;
  isScrolled = false;

  constructor(
    private router: Router,
    private titleService: Title,
    private authenticationService: AuthenticationService,
    private credentialsService: CredentialsService,
    @Inject(DOCUMENT) private document: Document
  ) {}

  ngOnInit() {}

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  logout() {
    this.authenticationService.logout().subscribe(() => this.router.navigate(['/login'], { replaceUrl: true }));
  }

  get username(): string | null {
    const credentials = this.credentialsService.credentials;
    return credentials ? credentials.username : null;
  }

  get title(): string {
    return this.titleService.getTitle();
  }
  @HostListener('window:scroll', [])
  onWindowScroll() {
    console.log(window.scrollY);
    // Detect if the user has scrolled down
    if (window.scrollY > 50) {
      this.isScrolled = true;
    } else {
      this.isScrolled = false;
    }
  }

  // @HostListener('window:scroll', [])
  // onWindowScroll() {
  //   console.log(window.scrollY)
  //   const offset = window.scrollY || this.document.documentElement.scrollTop || this.document.body.scrollTop || 0;
  //   if (offset > 80) {
  //     this.isScrolled = true;
  //   } else {
  //     this.isScrolled = false;
  //   }
  // }
}
