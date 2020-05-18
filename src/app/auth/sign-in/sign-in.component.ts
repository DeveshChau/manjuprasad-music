import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  public loader: boolean = false;
  public errorMsg: string;
  public showError: boolean;
  signInForm = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });
  constructor(
    private authService: AuthService,
    private router: Router) { }
  ngOnInit(): void {
  }

  onSubmit() {
    this.loader = true;
    this.showError = false;
    this.authService.signIn(
      this.signInForm.value.email,
      this.signInForm.value.password,
    )
      .then(
        response => {
          this.router.navigate(['/attendance'])
          this.loader = false
        }
      )
      .catch(
        (error) => {
          console.log(error);
          this.errorMsg = error.message
          this.showError = true
          this.loader = false
        }
      )
  }
}
