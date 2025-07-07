import { Component, Input } from '@angular/core';
import { SvgIconComponent } from 'angular-svg-icon';

@Component({
  selector: 'app-testimonial-card',
  imports: [SvgIconComponent],
  templateUrl: './testimonial-card.component.html',
  styleUrl: './testimonial-card.component.scss',
})
export class TestimonialCardComponent {
  @Input() name: string = '';
  @Input() profession: string = '';
  @Input() image: string = '';
  @Input() testimonial: string = '';
}
