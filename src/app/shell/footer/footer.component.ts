import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  viewSocialMediaProfile(link: string) {
    switch (link) {
      case 'linkedin':
        window.open('https://www.linkedin.com/in/sheraz-hussain-engineer/', '_blank');
        break;
      case 'facebook':
        window.open('https://www.facebook.com/sheraz.hussain.965580', '_blank');
        break;
      case 'instagram':
        window.open('https://instagram.com/sherazhussain564?igshid=OGQ5ZDc2ODk2ZA==', '_blank');
        break;
      case 'twitter':
        window.open('https://x.com/SherazH26471511?t=dMbVA0pMcTm5_eldNPeL4A&s=09', '_blank');
        break;
      default:
        break;
    }
  }
}
