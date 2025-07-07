import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { DatePickerModule } from 'primeng/datepicker';

import { FloatLabel } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';
import { TextareaModule } from 'primeng/textarea';

import { Select } from 'primeng/select';
import { MessageService } from 'primeng/api';
import { Toast } from 'primeng/toast';

@Component({
  selector: 'app-reservation',
  imports: [
    ReactiveFormsModule,
    DatePickerModule,
    InputTextModule,
    Select,
    TextareaModule,
    FloatLabel,
    Toast,
  ],
  templateUrl: './reservation.component.html',
  styleUrl: './reservation.component.scss',
  providers: [MessageService],
})
export class ReservationComponent {
  constructor(private messageService: MessageService) {}
  minDate = new Date();
  reservationForm = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.maxLength(50),
      Validators.minLength(3),
      Validators.pattern('^[a-zA-Z -]+$'),
    ]),
    email: new FormControl('', [Validators.required, Validators.email]),
    date: new FormControl(null, [Validators.required]),
    noOfPeople: new FormControl(null, [Validators.required]),
    instructions: new FormControl('', [Validators.maxLength(250)]),
  });
  noOfPeopleOptions = Array.from({ length: 20 }, (_, i) => i + 1).map(
    (_, idx) => idx + 1
  );
  onSubmit = () => {
    if (!this.reservationForm.invalid) {
      console.log('Submitted Form Data:', this.reservationForm.value);
      this.messageService.add({
        severity: 'success',
        summary: 'Reservation Successful',
        life: 4000,
        detail: `Reservation for ${
          this.reservationForm.controls.name.value
        } on ${(
          this.reservationForm.controls.date.value! as Date
        ).toLocaleDateString()} for ${
          this.reservationForm.controls.noOfPeople.value
        } people has been successfully created.`,
      });
    }
  };
}
