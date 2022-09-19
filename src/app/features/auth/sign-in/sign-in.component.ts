import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent implements OnInit {
  constructor(
    private auth: AuthService,
    private router: Router,
    private snackbar: MatSnackBar
  ) {}

  hide: boolean = true;
  signInForm: FormGroup = new FormGroup<{
    email: FormControl<string | null>;
    password: FormControl<string | null>;
  }>({
    email: new FormControl('', [Validators.email]),
    password: new FormControl('', [Validators.minLength(6)]),
  });

  signIn() {
    this.auth.signIn(this.signInForm.value).subscribe({
      next: () => this.router.navigate(['chat']),
      error: (error) => this.snackbar.open(error.message),
    });
  }

  ngOnInit(): void {}
}
