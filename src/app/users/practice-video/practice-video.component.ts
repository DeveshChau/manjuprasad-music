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
  public currentUserId: string;
  public rootRef: firebase.database.Reference;
  public videoLoader: boolean;
  constructor(
    private _sanitizer: DomSanitizer,
    private auth: AuthService,
    private firebaseDatabase: AngularFireDatabase) { }

  ngOnInit(): void {
    this.rootRef = this.firebaseDatabase.database.ref();
    this.currentUserId = this.auth.getCurrentUserId();
    this.getVideoHub()
  }

  public getVideoHub() {
    this.videoLoader = true;
    this.rootRef.child('videoHub/' + this.currentUserId).once('value')
    .then((snap) => {
      this.videoUrls = Object.values(snap.val()).map(          
        (url: string) => this._sanitizer.bypassSecurityTrustResourceUrl(url)
      );
      this.videoLoader = false;
    })
    .catch((err) => {
      console.log(err);
      this.videoLoader = false;
    })
  }
}
