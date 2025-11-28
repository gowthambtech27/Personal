// src/app/auth.guard.ts
import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';
import { Auth } from '@angular/fire/auth';
import { inject } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  private auth = inject(Auth);
  private router = inject(Router);

 canActivate(): boolean | UrlTree {
    const user = this.auth.currentUser;
    if (user) {
      return true; // allow access
    } else {
      return this.router.parseUrl('/login'); // redirect to login
    }
  }
}
