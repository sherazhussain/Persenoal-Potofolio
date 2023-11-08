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
        icon: 'assets/skills-section/angular.png',
        class: 'w-32 h-32',
        headingStyle: 'text-primary !mt-0',
      },
      {
        id: 2,
        name: 'Angular Material',
        icon: 'assets/skills-section/material.png',
        class: 'w-24 h-24',
        headingStyle: 'text-primary !mt-4',
      },
      {
        id: 3,
        name: 'FxLayout',
        icon: 'assets/skills-section/fxlayout.png',
        class: 'w-24 h-24',
        headingStyle: 'text-primary !mt-4',
      },
      {
        id: 4,
        name: 'HTML5',
        icon: 'assets/skills-section/html.png',
        class: 'w-24 h-24',
        headingStyle: 'text-primary !mt-4',
      },
      {
        id: 5,
        name: 'Tailwind CSS',
        icon: 'assets/skills-section/tailwind.png',
        class: 'w-24 h-24',
        headingStyle: 'text-primary !mt-4',
      },
      {
        id: 6,
        name: 'CSS3',
        icon: 'assets/skills-section/css.png',
        class: 'w-24 h-24',
        headingStyle: 'text-primary !mt-4',
      },
      {
        id: 7,
        name: 'SCSS',
        icon: 'assets/skills-section/scss.png',
        class: 'w-24 h-24',
        headingStyle: 'text-primary !mt-4',
      },
      {
        id: 8,
        name: 'TypeScript',
        icon: 'assets/skills-section/typescript.png',
        class: 'w-24 h-24',
        headingStyle: 'text-primary !mt-4',
      },
    ];
  }
}
