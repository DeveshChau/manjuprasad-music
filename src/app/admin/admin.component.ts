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
    this.users = this.db.list('user').valueChanges();
  }

  addVideo(uid: string) {
    const videoHub = 'https://www.youtube.com/embed/XN63cgiJJIo';
    this.db.database.ref('user/' + uid).child('videoHub').push(videoHub).catch(error => {
      console.log(error.message)
    });
  }
}
