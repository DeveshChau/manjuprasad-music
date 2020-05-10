import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { AngularFireDatabase } from '@angular/fire/database';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-practice-video',
  templateUrl: './practice-video.component.html',
  styleUrls: ['./practice-video.component.css']
})
export class PracticeVideoComponent implements OnInit {
  public videoUrls: SafeResourceUrl[];
  public name: string;
  public currentUser: string;
  public rootRef: firebase.database.Reference;
  constructor(
    private _sanitizer: DomSanitizer,
    private auth: AuthService,
    private firebaseDatabase: AngularFireDatabase) { }

  ngOnInit(): void {
    this.rootRef = this.firebaseDatabase.database.ref();
    this.currentUser = this.auth.getCurrentUserId();
    this.getVideoHub()
  }

  public getVideoHub() {
    this.rootRef.child('user/' + this.currentUser).child('videoHub').once('value', snap => {
      this.videoUrls = Object.values(snap.val()).map(          
        (url: string) => this._sanitizer.bypassSecurityTrustResourceUrl(url)
      );
    })
  }
}
