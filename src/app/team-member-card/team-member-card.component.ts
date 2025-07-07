import { Component, Input } from '@angular/core';
import { SvgIconComponent } from 'angular-svg-icon';

@Component({
  selector: 'app-team-member-card',
  imports: [SvgIconComponent],
  templateUrl: './team-member-card.component.html',
  styleUrl: './team-member-card.component.scss',
})
export class TeamMemberCardComponent {
  @Input() name: string = '';
  @Input() designation: string = '';
  @Input() image: string = '';
  @Input() fbLink: string = '';
  @Input() twitterLink: string = '';
  @Input() instaLink: string = '';
}
