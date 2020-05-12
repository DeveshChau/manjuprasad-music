import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import * as firebase from 'firebase';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase } from '@angular/fire/database';

import { User } from '../shared/model/user.model';
import { DomSanitizer } from '@angular/platform-browser';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public videoUrls: string[];
  constructor(
    private _sanitizer: DomSanitizer,
    private router: Router,
    private db: AngularFireDatabase,
    private auth: AngularFireAuth) { }

  signUp(proileObj: User) {
    this.auth.createUserWithEmailAndPassword(proileObj.email, proileObj.password)
      .then(
        () => {
          const user = {
            uid: this.getCurrentUserId(),
            email: proileObj.email,
            grade: proileObj.grade,
            firstName: proileObj.firstName,
            lastName: proileObj.lastName
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

  signIn(email: string, password: string) {
    this.auth.signInWithEmailAndPassword(email, password)
      .then(
        () => this.router.navigate(['/'])
      )
      .catch(
        error => console.log(error)
      )
  }

  getCurrentUserId() {
    return firebase.auth().currentUser.uid;
  }

  logout() {
    this.auth.signOut()
    this.router.navigate(['/signIn'])
  }
}
