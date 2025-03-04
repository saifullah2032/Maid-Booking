import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-maid-categories',
  imports: [CommonModule],
  templateUrl: './maid-categories.component.html',
  styleUrl: './maid-categories.component.css'
})
export class MaidCategoriesComponent {
  // ✅ Add the missing 'categories' array
  categories = ['Cleaning', 'Cooking', 'Babysitting', 'Laundry'];
}
