import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './_helpers';

import { LogInComponent } from './components/log-in/log-in.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { AdminComponent } from './components/admin/admin.component';
import { UserProfileComponent } from './components/user/user-profile/user-profile.component';
import { CompanyHomeComponent } from './components/company/company-home/company-home.component';
import { AdminGuard } from './_helpers/admin.guard';
import { CompanyGuard } from './_helpers/company.guard';
import { CompanyDetailsComponent } from './components/company/company-details/company-details.component';
import { UserHomeComponent } from './components/user/user-home/user-home.component';
import { UserConnnectionsComponent } from './components/user/user-connnections/user-connnections.component';
import { ConnectionProfileComponent } from './components/user/user-connnections/connection-profile/connection-profile.component';
import { ConnectionRequestComponent } from './components/user/user-connnections/connection-request/connection-request.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'login', component: LogInComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: UserProfileComponent, canActivate: [AuthGuard]},
  { path: 'admin', component: AdminComponent, canActivate: [AuthGuard,AdminGuard]},
  { path: 'company-home', component: CompanyHomeComponent, canActivate: [AuthGuard,CompanyGuard]},
  { path: 'company-details/:id', component: CompanyDetailsComponent, canActivate: [AuthGuard]},
  { path: 'user-home', component: UserHomeComponent, canActivate: [AuthGuard]},
  { path: 'user/my-connections', component: UserConnnectionsComponent, canActivate: [AuthGuard]},
  { path: 'user/connection-requests', component: ConnectionRequestComponent, canActivate: [AuthGuard]},
  { path: 'user/my-connections/:id/:isRequests', component: ConnectionProfileComponent, canActivate: [AuthGuard]},

  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
