import { Component, OnInit } from '@angular/core';
import { UserService } from '../../_services/index';
import { Router } from '@angular/router';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
    loading: boolean = false;
    model: any = {};
    constructor(
        private userService: UserService,
        private router: Router
    ) { }

    ngOnInit() {
    }
    register() {
        this.loading = true;
        this.userService.create(this.model);
        
    }

}
