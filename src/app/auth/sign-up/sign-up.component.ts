import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  grades = ['Grade 1', 'Grade 2'];
  constructor() { }

  ngOnInit(): void {
  }

}
