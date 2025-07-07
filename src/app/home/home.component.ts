import { Component } from '@angular/core';
import { HeroComponent } from '../hero/hero.component';
import { BenefitCardComponent } from '../benefit-card/benefit-card.component';
import { AboutComponent } from '../about/about.component';
import { ReservationComponent } from '../reservation/reservation.component';
import { TeamComponent } from '../team/team.component';

@Component({
  selector: 'app-home',
  imports: [
    HeroComponent,
    BenefitCardComponent,
    AboutComponent,
    ReservationComponent,
    TeamComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  benefits = [
    {
      id: 1,
      title: 'Master Chefs',
      description:
        'Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam',
      icon: 'benefit-1.svg',
    },
    {
      id: 2,
      title: 'Quality Food',
      description:
        'Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam',
      icon: 'benefit-2.svg',
    },
    {
      id: 3,
      title: 'Online Order',
      description:
        'Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam',
      icon: 'benefit-3.svg',
    },
    {
      id: 4,
      title: '24/7 Service',
      description:
        'Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam',
      icon: 'benefit-4.svg',
    },
  ];
}
