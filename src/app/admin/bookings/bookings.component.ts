import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-bookings',
  imports: [CommonModule],
  templateUrl: './bookings.component.html',
  styleUrl: './bookings.component.css'
})
export class BookingsComponent {
  // ✅ Add the missing 'bookings' array
  bookings = [
    { id: 1, user: 'John Doe', maid: 'Maya', status: 'Pending' },
    { id: 2, user: 'Jane Smith', maid: 'Sita', status: 'Approved' },
    { id: 3, user: 'Alice Johnson', maid: 'Rita', status: 'Rejected' }
  ];
}
