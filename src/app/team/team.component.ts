import { Component } from '@angular/core';
import { TeamMemberCardComponent } from '../team-member-card/team-member-card.component';

@Component({
  selector: 'app-team',
  imports: [TeamMemberCardComponent],
  templateUrl: './team.component.html',
  styleUrl: './team.component.scss',
})
export class TeamComponent {
  members = [
    {
      id: 1,
      name: 'John Doe',
      designation: 'Head Chef',
      image: 'assets/team-1.png',
      fbLink: 'https://www.facebook.com/johndoe',
      twitterLink: 'https://twitter.com/johndoe',
      instaLink: 'https://www.instagram.com/johndoe',
    },
    {
      id: 2,
      name: 'John Doe',
      designation: 'Head Chef',
      image: 'assets/team-2.png',
      fbLink: 'https://www.facebook.com/johndoe',
      twitterLink: 'https://twitter.com/johndoe',
      instaLink: 'https://www.instagram.com/johndoe',
    },
    {
      id: 3,
      name: 'John Doe',
      designation: 'Head Chef',
      image: 'assets/team-3.png',
      fbLink: 'https://www.facebook.com/johndoe',
      twitterLink: 'https://twitter.com/johndoe',
      instaLink: 'https://www.instagram.com/johndoe',
    },
    {
      id: 4,
      name: 'John Doe',
      designation: 'Head Chef',
      image: 'assets/team-4.png',
      fbLink: 'https://www.facebook.com/johndoe',
      twitterLink: 'https://twitter.com/johndoe',
      instaLink: 'https://www.instagram.com/johndoe',
    },
  ];
}
