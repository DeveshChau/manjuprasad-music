import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { AuthService } from 'src/app/auth/auth.service';
import { AngularFireAuth } from '@angular/fire/auth/';

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
  public attendaceLoader:boolean;
  public batchLoader:boolean;
  public profileLoader:boolean;
  constructor(
    private firebaseDatabase: AngularFireDatabase,
    private authService: AuthService,
  ) { }

  ngOnInit(): void {
    this.displayedColumns = ['date', 'status', 'topic']
    this.rootRef = this.firebaseDatabase.database.ref();
    this.currentUserId = this.authService.getCurrentUserId();
    this.getAttendance();
    this.getBatch();
    this.getUserProfile();
  }

  public getAttendance() {
    this.attendaceLoader = true;
    this.rootRef.child('attendance/' + this.currentUserId).once('value')
      .then((snap) => {
        this.attendance = Object.values(snap.val())
        this.attendaceLoader = false;
      })
      .catch((err) => {
        console.log(err);
      })
  }
  public getBatch() {
    this.batchLoader = true;
    this.rootRef.child('batch/' + this.currentUserId).once('value')
      .then((snap) => {
        this.batch = snap.val();
        this.batchLoader = false;
      })
      .catch((err) => {
        console.log(err);
        this.batchLoader = false;
      })
  }
  public getUserProfile() {
    this.profileLoader = true;
    this.rootRef.child('userProfile/' + this.currentUserId.slice(0, -2)).once('value')
      .then((snap) => {
        this.userProfile = snap.val();
        this.profileLoader = false;
      })
      .catch((err) => {
        console.log(err);
        this.profileLoader = false;
      })
  }
}
