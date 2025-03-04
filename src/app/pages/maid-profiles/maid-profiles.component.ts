import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-maid-profiles',
  standalone: true,
  imports: [CommonModule], // ✅ Import CommonModule
  templateUrl: './maid-profiles.component.html',
  styleUrls: ['./maid-profiles.component.css']
})
export class MaidProfilesComponent {
  maids = [
    { name: 'Alice', age: 25, rating: 4.5, minPay: 200, maxPay: 500, workHours: 8, expanded: false, image: 'assets/maid1.jpg' },
    { name: 'Sophia', age: 30, rating: 4.8, minPay: 250, maxPay: 600, workHours: 6, expanded: false, image: 'assets/maid2.jpg' }
  ];

  toggleExpand(maid: any) {
    maid.expanded = !maid.expanded;
  }
}
