import { Component } from '@angular/core';
import { TestimonialCardComponent } from '../testimonial-card/testimonial-card.component';

@Component({
  selector: 'app-testimonials',
  imports: [TestimonialCardComponent],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.scss',
})
export class TestimonialsComponent {
  testimonials = [
    {
      id: 1,
      name: 'Jane Doe',
      profession: 'Food Blogger',
      image: 'assets/testimonial-1.png',
      testimonial:
        'Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam',
    },
    {
      id: 2,
      name: 'John Smith',
      profession: 'Food Critic',
      image: 'assets/testimonial-2.png',
      testimonial:
        'Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam',
    },
    {
      id: 3,
      name: 'Emily Johnson',
      profession: 'Chef',
      image: 'assets/testimonial-3.png',
      testimonial:
        'Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam',
    },
  ];
}
