import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  errorMessage: string | null = null;
  
  constructor(
    private fb: FormBuilder,
    private afAuth: AngularFireAuth, // Inject Firebase Auth
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  async onSubmit() {
    if (this.loginForm.invalid) {
      return;
    }

    this.errorMessage = null; // Clear any previous errors
    const { email, password } = this.loginForm.value;

    try {
      // 1. Call the Firebase sign-in method
      await this.afAuth.signInWithEmailAndPassword(email, password);
      
      // 2. On success, navigate to the secure admin page
      this.router.navigate(['/admin']);

    } catch (error: any) {
      // 3. Handle errors (e.g., incorrect password, user not found)
      console.error('Login failed:', error);
      // Display a user-friendly error message
      this.errorMessage = this.mapAuthError(error.code); 
    }
  }

  // Helper function to map Firebase error codes to friendly messages
  private mapAuthError(code: string): string {
    switch (code) {
      case 'auth/user-not-found':
      case 'auth/wrong-password':
        return 'Invalid email or password.';
      case 'auth/invalid-email':
        return 'The email address is badly formatted.';
      default:
        return 'An unexpected error occurred during login.';
    }
  }
}