import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrencyPipe, NgFor } from '@angular/common';
@Component({
  selector: 'app-transactions',
  imports: [CommonModule,NgFor, CurrencyPipe],
  templateUrl: './transactions.component.html',
  styleUrl: './transactions.component.css'
})
export class TransactionsComponent {
  transactions = [
    { id: 1, user: 'John Doe', amount: 1000, status: 'Completed' },
    { id: 2, user: 'Jane Smith', amount: 500, status: 'Pending' }
  ];
}
