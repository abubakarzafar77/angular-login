import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  loading: boolean = false;
  model: any = {};
  constructor() { }

  ngOnInit() {
  }
  register() {
    this.loading = true;
  }

}