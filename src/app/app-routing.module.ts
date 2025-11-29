import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HeaderComponent } from './components/header/header.component';
import { AdminComponent } from './components/admin/admin.component';

const routes: Routes = [
  // { path: '', redirectTo: 'login', pathMatch: 'full' }
  // , // <-- default route
  // { path: 'login', component: LoginComponent },
  { 
    path: 'admin', 
    component: AdminComponent,
  },
  
  { path: '**', redirectTo: 'login' } // catch-all redirect
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

