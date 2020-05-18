import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { AngularFireDatabase } from '@angular/fire/database';

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

  constructor(
    private authService: AuthService,
    private db: AngularFireDatabase,

    ) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.authService.signUp(this.profileForm.value.email, this.profileForm.value.password)
      .then(
        () => {
          const user = {
            uid: this.authService.getCurrentUserId(),
            email: this.profileForm.value.email,
            grade: this.profileForm.value.grade,
            firstName: this.profileForm.value.firstName,
            lastName: this.profileForm.value.lastName
          };
          this.db.database.ref('userProfile/' + user.uid).set(user).catch(error => {
            console.log(error.message)
          });
        }
      )
      .catch(
        (error) => console.log(error)
      )
  }
}
