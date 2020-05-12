import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFireDatabase } from '@angular/fire/database'

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  public videoUrls: any;
  public name: string;
  public users: Observable<any[]>;;
  items: Observable<any[]>;

  constructor(
    private db: AngularFireDatabase
  ) { }

  ngOnInit(): void {
    this.users = this.db.list('userProfile').valueChanges();
  }

  addVideo(uid: string) {
    const videoHub = 'https://www.youtube.com/embed/XN63cgiJJIo';
    this.db.database.ref('videoHub/' + uid).push(videoHub).catch(error => {
      console.log(error.message)
    });
  }
  markAttendance(uid: string) {
    const attendace = {date: "07-03-2020", status: 'present', topic: 'c major two handes'}
    this.db.database.ref('attendance/' + uid).push(attendace).catch(error => {
      console.log(error.message)
    });
  }
  manageBatch(uid: string) {
    const attendace = {startDate: "07-03-2020", endDate: "07-06-2020", day: 'monday', time: '10 AM', feeStatus: 'pending', feeDate: 'NULL'}
    this.db.database.ref('batch/' + uid).set(attendace).catch(error => {
      console.log(error.message)
    });
  }
}
