import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    loading: boolean = false;
    model: any = {}

    constructor() { }

    ngOnInit() {
    }

    login() {
        this.loading = true;
    }

}
