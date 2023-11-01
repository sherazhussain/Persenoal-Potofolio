import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent implements OnInit {
  skillsList: any[] = [];
  constructor() {}

  ngOnInit(): void {
    this.getSkillsList();
  }

  getSkillsList() {
    this.skillsList = [
      {
        id: 1,
        name: 'Angular',
        icon: 'assets/skills-section/html.svg',
      },
      {
        id: 2,
        name: 'Angular Material',
        icon: 'assets/skills-section/html.svg',
      },
      {
        id: 3,
        name: 'FxLayout',
        icon: 'assets/skills-section/html.svg',
      },
      {
        id: 4,
        name: 'HTML5',
        icon: 'assets/skills-section/html.svg',
      },
      {
        id: 5,
        name: 'Tailwind CSS',
        icon: 'assets/skills-section/html.svg',
      },
      {
        id: 6,
        name: 'CSS3',
        icon: 'assets/skills-section/html.svg',
      },
      {
        id: 7,
        name: 'SCSS',
        icon: 'assets/skills-section/html.svg',
      },
      {
        id: 8,
        name: 'TypeScript',
        icon: 'assets/skills-section/html.svg',
      },
    ];
  }
}
