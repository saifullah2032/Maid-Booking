import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-maid-management',
  imports: [CommonModule],
  templateUrl: './maid-management.component.html',
  styleUrl: './maid-management.component.css'
})
export class MaidManagementComponent {
  // ✅ Add the missing 'maids' array
  maids = [
    { id: 1, name: 'Alice', category: 'Cleaning', status: 'Available' },
    { id: 2, name: 'Bob', category: 'Cooking', status: 'Busy' },
    { id: 3, name: 'Charlie', category: 'Babysitting', status: 'Available' }
  ];
}
