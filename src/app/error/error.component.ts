import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {
  errorMessage = 'Oops! We can\'t find the page you are looking for.';
  constructor() { }

  ngOnInit(): void {
  }

}
