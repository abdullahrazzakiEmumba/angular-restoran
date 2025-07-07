import { CurrencyPipe } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-menu-item',
  imports: [CurrencyPipe],
  templateUrl: './menu-item.component.html',
  styleUrl: './menu-item.component.scss',
})
export class MenuItemComponent {
  @Input() name: string = '';
  @Input() image: string = '';
  @Input() price: string = '';
  @Input() description: string = '';
}
