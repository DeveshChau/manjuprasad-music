import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.css']
})
export class AttendanceComponent implements OnInit {
  public rootRef: firebase.database.Reference;
  public currentUserId: string;
  public attendance: never[];
  public batch;
  public userProfile;
  public displayedColumns;
  constructor(
    private firebaseDatabase: AngularFireDatabase,
    private auth: AuthService,
  ) { }

  ngOnInit(): void {
    this.displayedColumns = ['date', 'status', 'topic'] 
    this.rootRef = this.firebaseDatabase.database.ref();
    this.currentUserId = this.auth.getCurrentUserId();
    this.getAttendance();
    this.getBatch();
    this.getUserProfile();
  }

  public getAttendance() {
    this.rootRef.child('attendance/' + this.currentUserId).once('value')
      .then((snap) => {
        this.attendance = Object.values(snap.val())
      })
      .catch((err) => {
        console.log(err);
      })
  }
  public getBatch() {
    this.rootRef.child('batch/' + this.currentUserId).once('value')
      .then((snap) => {
        this.batch = snap.val();
      })
      .catch((err) => {
        console.log(err);
      })
  }
  public getUserProfile() {
    this.rootRef.child('userProfile/' + this.currentUserId.slice(0,-2)).once('value')
      .then((snap) => {
        console.log(snap.val())
        this.userProfile = snap.val();
      })
      .catch((err) => {
        console.log(err);
      })
  }
}
