import { Component } from '@angular/core';

import { CommonModule } from '@angular/common';
import { TabsModule } from 'primeng/tabs';
import { SvgIconComponent } from 'angular-svg-icon';
import { MenuItemComponent } from '../menu-item/menu-item.component';
@Component({
  selector: 'app-menu',
  imports: [TabsModule, CommonModule, SvgIconComponent, MenuItemComponent],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
})
export class MenuComponent {
  allItems = {
    breakfast: [
      {
        id: 1,
        name: 'Classic Breakfast',
        image: 'assets/menu-1.png',
        price: '12.99',
        description: 'A classic breakfast with eggs, bacon, and toast.',
      },
      {
        id: 2,
        name: 'Pancakes Delight',
        image: 'assets/menu-2.png',
        price: '10.99',
        description: 'Fluffy pancakes served with maple syrup and butter.',
      },
      {
        id: 3,
        name: 'Healthy Smoothie Bowl',
        image: 'assets/menu-3.png',
        price: '9.99',
        description: 'A refreshing smoothie bowl topped with fruits and nuts.',
      },
      {
        id: 4,
        name: 'Avocado Toast',
        image: 'assets/menu-4.png',
        price: '8.99',
        description:
          'Toasted bread topped with smashed avocado and poached eggs.',
      },
      {
        id: 5,
        name: 'Omelette Special',
        image: 'assets/menu-5.png',
        price: '11.99',
        description:
          'A fluffy omelette filled with cheese, vegetables, and herbs.',
      },
      {
        id: 6,
        name: 'French Toast',
        image: 'assets/menu-6.png',
        price: '9.99',
        description:
          'Golden-brown French toast served with powdered sugar and syrup.',
      },
      {
        id: 7,
        name: 'Breakfast Burrito',
        image: 'assets/menu-7.png',
        price: '10.99',
        description:
          'A hearty burrito filled with scrambled eggs, cheese, and salsa.',
      },
      {
        id: 8,
        name: 'Fruit Salad',
        image: 'assets/menu-8.png',
        price: '7.99',
        description: 'A refreshing mix of seasonal fruits served with yogurt.',
      },
    ],
    lunch: [
      {
        id: 1,
        name: 'Grilled Chicken Salad',
        image: 'assets/menu-1.png',
        price: '14.99',
        description:
          'A healthy salad with grilled chicken, greens, and dressing.',
      },
      {
        id: 2,
        name: 'Veggie Burger',
        image: 'assets/menu-2.png',
        price: '11.99',
        description: 'A delicious veggie burger served with fries.',
      },
      {
        id: 3,
        name: 'Pasta Primavera',
        image: 'assets/menu-3.png',
        price: '13.99',
        description:
          'Pasta tossed with seasonal vegetables in a light tomato sauce.',
      },
      {
        id: 4,
        name: 'Caesar Salad',
        image: 'assets/menu-4.png',
        price: '12.99',
        description: 'Crisp romaine lettuce with Caesar dressing and croutons.',
      },
      {
        id: 5,
        name: 'Margherita Pizza',
        image: 'assets/menu-5.png',
        price: '15.99',
        description:
          'Classic pizza topped with fresh tomatoes, basil, and mozzarella.',
      },
      {
        id: 6,
        name: 'Quinoa Bowl',
        image: 'assets/menu-6.png',
        price: '10.99',
        description:
          'A nutritious bowl of quinoa with roasted vegetables and dressing.',
      },
      {
        id: 7,
        name: 'Chicken Tacos',
        image: 'assets/menu-7.png',
        price: '12.99',
        description:
          'Soft tacos filled with grilled chicken and fresh toppings.',
      },
      {
        id: 8,
        name: 'Caprese Sandwich',
        image: 'assets/menu-8.png',
        price: '9.99',
        description:
          'A sandwich with fresh mozzarella, tomatoes, basil, and balsamic glaze.',
      },
    ],
    dinner: [
      {
        id: 1,
        name: 'Steak with Roasted Vegetables',
        image: 'assets/menu-1.png',
        price: '24.99',
        description:
          'Juicy steak served with a side of roasted seasonal vegetables.',
      },
      {
        id: 2,
        name: 'Salmon with Lemon Butter Sauce',
        image: 'assets/menu-2.png',
        price: '22.99',
        description:
          'Grilled salmon fillet drizzled with a lemon butter sauce.',
      },
      {
        id: 3,
        name: 'Vegetable Stir-Fry',
        image: 'assets/menu-3.png',
        price: '18.99',
        description:
          'A colorful mix of vegetables stir-fried in a savory sauce.',
      },
      {
        id: 4,
        name: 'Chicken Alfredo Pasta',
        image: 'assets/menu-4.png',
        price: '19.99',
        description: 'Creamy Alfredo pasta with grilled chicken and parmesan.',
      },
      {
        id: 5,
        name: 'Lamb Chops with Mint Sauce',
        image: 'assets/menu-5.png',
        price: '26.99',
        description: 'Tender lamb chops served with a refreshing mint sauce.',
      },
      {
        id: 6,
        name: 'Vegetarian Lasagna',
        image: 'assets/menu-6.png',
        price: '17.99',
        description:
          'Layers of pasta with vegetables, cheese, and marinara sauce.',
      },
      {
        id: 7,
        name: 'Shrimp Scampi',
        image: 'assets/menu-7.png',
        price: '21.99',
        description:
          'Succulent shrimp sautéed in garlic butter and served with pasta.',
      },
      {
        id: 8,
        name: 'Mushroom Risotto',
        image: 'assets/menu-8.png',
        price: '16.99',
        description:
          'Creamy risotto with mushrooms, parmesan, and fresh herbs.',
      },
    ],
  };
  items = this.allItems.breakfast;

  currentTab: 'breakfast' | 'lunch' | 'dinner' = 'breakfast';
  updateItems() {
    // console.log(event);
    // this.currentTab = event.value;
    this.items = this.allItems[this.currentTab] || [];
  }
}
