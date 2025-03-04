import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { FindMaidComponent } from './pages/find-maid/find-maid.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { LoginComponent } from './pages/login/login.component';
import { MaidProfilesComponent } from './pages/maid-profiles/maid-profiles.component';
import { TransactionHistoryComponent } from './pages/transaction-history/transaction-history.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { MaidManagementComponent } from './admin/maid-management/maid-management.component';
import { UserManagementComponent } from './admin/user-management/user-management.component';
import { BookingsComponent } from './admin/bookings/bookings.component';
import { TransactionsComponent } from './admin/transactions/transactions.component';
import { MaidCategoriesComponent } from './admin/maid-categories/maid-categories.component';
import { AdminProfileComponent } from './admin/admin-profile/admin-profile.component';
import { AdminGuard } from './guards/admin.guard';
export const routes: Routes = [
  // Public Pages
  { path: '', component: HomeComponent },
  { path: 'find-maid', component: FindMaidComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'login', component: LoginComponent },
  { path: 'maid-profiles', component: MaidProfilesComponent },
  { path: 'transaction-history', component: TransactionHistoryComponent },

  // Admin Dashboard and Pages
  { path: 'dashboard', component: DashboardComponent ,canActivate: [AdminGuard]},
  { path: 'admin/maid-management', component: MaidManagementComponent },
  { path: 'admin/user-management', component: UserManagementComponent },
  { path: 'admin/bookings', component: BookingsComponent },
  { path: 'admin/transactions', component: TransactionsComponent },
  { path: 'admin/maid-categories', component: MaidCategoriesComponent },
  { path: 'admin/admin-profile', component: AdminProfileComponent },

  // Redirect unknown routes to Home
  { path: '**', redirectTo: '' }
];
