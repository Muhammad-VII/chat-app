import { Component, OnInit, ChangeDetectionStrategy, OnDestroy } from '@angular/core';
import { Form, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignUpComponent implements OnInit, OnDestroy {
  subscribtions$: Subscription[] = []
  hide:boolean = true;
  signUpForm: FormGroup = new FormGroup<{
    displayName: FormControl<string | null>,
    email: FormControl<string | null>,
    password: FormControl<string | null>
  }>({
    displayName: new FormControl('', [Validators.minLength(3)]),
    email: new FormControl('', [Validators.email]),
    password: new FormControl('', [Validators.minLength(6)])
  })

  constructor(
    private auth: AuthService,
    private router: Router,
    private snackbar: MatSnackBar
  ) {}

  ngOnInit(): void {

  }

  ngOnDestroy(): void {
    this.subscribtions$.forEach(sub => sub.unsubscribe())
  }

  signUp() {
    this.subscribtions$.push(
      this.auth.signUp(this.signUpForm.value).subscribe({
        next: () => this.router.navigate(['chat']),
        error: (error) => this.snackbar.open(error.message)
      })
    )
  }

}
