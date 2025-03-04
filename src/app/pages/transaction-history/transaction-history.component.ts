import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-transaction-history',
  standalone: true,
  imports: [CommonModule], // ✅ Required for Angular 19+
  templateUrl: './transaction-history.component.html',
  styleUrls: ['./transaction-history.component.css']
})
export class TransactionHistoryComponent {
  transactions = [
    { id: 'TXN001', date: '2024-03-01', amount: 500, status: 'Success', paymentMethod: 'UPI' },
    { id: 'TXN002', date: '2024-03-02', amount: 1200, status: 'Pending', paymentMethod: 'Credit Card' },
    { id: 'TXN003', date: '2024-03-03', amount: 700, status: 'Failed', paymentMethod: 'Net Banking' },
    { id: 'TXN004', date: '2024-03-04', amount: 950, status: 'Success', paymentMethod: 'Debit Card' }
  ];
}
