import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(
    private router: Router,
    private auth: AngularFireAuth) { }

  signUp(email: string, password: string) {
    return this.auth.createUserWithEmailAndPassword(email, password)      
  }

  signIn(email: string, password: string) {
    return this.auth.signInWithEmailAndPassword(email, password)
  }

  getCurrentUserId() {
    return firebase.auth().currentUser.uid;
  }

  logout() {
    this.auth.signOut()
    this.router.navigate(['/signIn'])
  }
}
