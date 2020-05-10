import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  grades = ['Grade 1', 'Grade 2'];
  profileForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    confirmpPssword: new FormControl('', Validators.required),
    grade: new FormControl('', Validators.required),
  });
  
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    // console.log(this.profileForm.value)
    this.authService.signUp(this.profileForm.value)
  }

}
