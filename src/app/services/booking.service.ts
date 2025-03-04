import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class BookingService {
  constructor(private firestore: AngularFirestore) {}

  bookMaid(bookingData: any) {
    return this.firestore.collection('bookings').add(bookingData);
  }
}
