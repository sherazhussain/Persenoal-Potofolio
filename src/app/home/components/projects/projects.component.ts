import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit {
  projectsList: any[] = [];
  constructor(private router: Router) {}

  ngOnInit(): void {
    this.getProjectsList();
  }

  getProjectsList() {
    this.projectsList = [
      {
        id: 1,
        title: 'SpreadLee Admin',
        image: 'assets/project-images/spreadlee.PNG',
        description: 'A responsive admin panel for managing the user chats and complaints.',
        link: 'https://spreadlee-admin.codesorbit.net/',
        technologiesUsed: ['Angular 13', 'Angular Material', 'Firebase', 'FxLayout'],
      },
      {
        id: 2,
        title: 'E-Ride Admin',
        image: 'assets/project-images/E_Ride.PNG',
        description: 'Admin panel for managing bikes, scooters and also their tracking records.',
        link: 'https://admin.eridejo.com',
        technologiesUsed: ['Angular 13', 'Angular Material', 'Google Map', 'Tailwind CSS'],
      },
      {
        id: 3,
        title: 'E-Ride Website',
        image: '/assets/project-images/E_ride_web.PNG',
        description: 'An online scooter and bike management system within a specified geofence area.',
        link: 'https://eridejo.com',
        technologiesUsed: ['Angular 13', 'Angular Material', 'Tailwind CSS', 'FxLayout'],
      },
      {
        id: 4,
        title: 'Blissiree Admin',
        image: 'assets/project-images/blissree.PNG',
        description:
          'This project focuses on mental health, allowing users to subscribe to programs and access empowering audio sections.',
        link: 'https://web.blissiree.com',
        technologiesUsed: ['Angular 13', 'Angular Material', 'Firebase', 'FxLayout'],
      },
      {
        id: 5,
        title: 'NeuroQur Website',
        image: 'assets/project-images/neuroQur.png',
        description:
          'Neuroqur is a platform designed for medical professionals, offering a collection of case studies and articles related to medical research.',
        link: 'https://neuroqur.com/',
        technologiesUsed: ['Angular 12', 'Angular Material', 'Google Login', 'Bootstrap'],
      },
      {
        id: 6,
        title: 'Goongetit Website',
        image: 'assets/project-images/goongetit.PNG',
        description:
          'View discounts at registered stores, earn points by sharing apps, and reserve expiring or damaged products.',
        link: 'https://goongetit-web.codesorbit.net',
        technologiesUsed: ['Angular 12', 'Angular Material', 'GooleMaps', 'FxLayout'],
      },
    ];
  }

  redirectTo(link: string) {
    window.open(link, '_blank');
  }
}
