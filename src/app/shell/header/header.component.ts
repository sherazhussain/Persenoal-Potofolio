import { Title } from '@angular/platform-browser';
import { Component, OnInit, Input, HostListener, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Router } from '@angular/router';
import { MatSidenav } from '@angular/material/sidenav';

import { AuthenticationService, CredentialsService } from '@app/auth';
import { Subscription, fromEvent } from 'rxjs';
import { DataServiceService } from '@app/@shared/services/data-service.service';

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

  menuButtons: any = [];

  constructor(
    private router: Router,
    private apiService: DataServiceService,
    private authenticationService: AuthenticationService,
    private credentialsService: CredentialsService,
    @Inject(DOCUMENT) private document: Document
  ) {
    this.intializeMenuButtons();
  }

  ngOnInit() {}

  intializeMenuButtons() {
    this.menuButtons = [
      {
        name: 'Home',
        link: 'bannerSection',
      },
      {
        name: 'Projects',
        link: 'projectSection',
      },
      {
        name: 'About',
        link: 'aboutSection',
      },
      {
        name: 'Skills',
        link: 'skillSection',
      },
      {
        name: 'Contact Us',
        link: 'contactSection',
      },
    ];
  }
  scrollToSection(sectionId: string) {
    this.isMobileMenuOpen = false; //close menu on button click in mobile view
    this.router
      .navigate(['/home'])
      .then(() => {
        this.apiService.scrollToSection(sectionId);
      })
      .catch((err) => {
        console.log('error in header component', err);
      });
  }

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
}
