import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { GoogleMap } from '@angular/google-maps';
import { SvgIconComponent } from 'angular-svg-icon';
import { ContactHeroComponent } from '../contact-hero/contact-hero.component';

import { FloatLabel } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';
import { TextareaModule } from 'primeng/textarea';

import { Select } from 'primeng/select';

@Component({
  selector: 'app-contact-page',
  imports: [
    ContactHeroComponent,
    SvgIconComponent,
    GoogleMap,
    ReactiveFormsModule,
    InputTextModule,
    TextareaModule,
    FloatLabel,
  ],
  templateUrl: './contact-page.component.html',
  styleUrl: './contact-page.component.scss',
})
export class ContactPageComponent {
  contactForm = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.maxLength(50),
      Validators.minLength(3),
      Validators.pattern('^[a-zA-Z -]+$'),
    ]),
    email: new FormControl('', [Validators.required, Validators.email]),
    subject: new FormControl('', [
      Validators.required,
      Validators.maxLength(100),
    ]),
    message: new FormControl('', [
      Validators.required,
      Validators.maxLength(250),
    ]),
  });
  noOfPeopleOptions = Array.from({ length: 20 }, (_, i) => i + 1).map(
    (_, idx) => idx + 1
  );
  onSubmit = () => {
    if (!this.contactForm.invalid) {
      console.log('Submitted Form Data:', this.contactForm.value);
    }
  };
}
