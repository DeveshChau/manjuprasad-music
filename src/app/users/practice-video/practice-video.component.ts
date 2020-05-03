import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-practice-video',
  templateUrl: './practice-video.component.html',
  styleUrls: ['./practice-video.component.css']
})
export class PracticeVideoComponent implements OnInit {
  public videoUrls: any;
  public name: string;
  constructor(private http: HttpClient, private _sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.fetchData();
  }

  private fetchData() {
    this.http.get('https://manjuprasad-music.firebaseio.com/video.json')
      .pipe(map((responseData) => {
        const video = []
        for (const key in responseData) {
          if (responseData.hasOwnProperty(key)) {
            video.push({ ...responseData[key], id: key });
          }
        }
        return video;
      }))
      .subscribe(
        responseData => {
          this.videoUrls = responseData[0].videoHub.map((video: any) => this._sanitizer.bypassSecurityTrustResourceUrl(video));
        }
      );
  }
}
