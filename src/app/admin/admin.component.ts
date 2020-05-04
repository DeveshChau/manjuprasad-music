import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  public videoUrls: any;
  public name: string;
  constructor(private http: HttpClient, private _sanitizer: DomSanitizer) { }

  ngOnInit(): void {
  }

  public postUrl() {
    const videoHub = [
      "https://www.youtube.com/embed/XN63cgiJJIo",
      "https://www.youtube.com/embed/XN63cgiJJIo",
      "https://www.youtube.com/embed/XN63cgiJJIo"
    ];
    const obj = {
      name: 'Devesh',
      videoHub
    }
    this.http.post('https://manjuprasad-music.firebaseio.com/video.json', obj)
      .subscribe(responseData => {
        console.log(responseData);
      });
  }
}