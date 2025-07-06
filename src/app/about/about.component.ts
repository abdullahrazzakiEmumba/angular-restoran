import { Component } from '@angular/core';
import { SvgIconComponent } from 'angular-svg-icon';

@Component({
  selector: 'app-about',
  imports: [SvgIconComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  img1 = "assets/about-1.png"
  img2 = "assets/about-2.png"
  img3 = "assets/about-3.png"
  img4 = "assets/about-4.png"
  yearsOfExperience = 13;
  numberOfChefs = 50
}
