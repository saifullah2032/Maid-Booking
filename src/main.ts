import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getDatabase, provideDatabase } from '@angular/fire/database';

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes), provideFirebaseApp(() => initializeApp({ projectId: "maid-booking-4ec9e", appId: "1:59794486383:web:a1de68abd7a9da4945099a", storageBucket: "maid-booking-4ec9e.firebasestorage.app", apiKey: "AIzaSyDKHHmFhtcMsMj365jMcGGSU5UfoVKT3SY", authDomain: "maid-booking-4ec9e.firebaseapp.com", messagingSenderId: "59794486383", measurementId: "G-48143C3T7C" })), provideAuth(() => getAuth()), provideFirestore(() => getFirestore()), provideDatabase(() => getDatabase())]
}).catch(err => console.error(err));
