import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-logout',
    templateUrl: './logout.component.html',
})
export class LogoutComponent implements OnInit {

    protected options: {};
    protected router: Router;
    redirectDelay: number;
    strategy: string;


    ngOnInit(): void {
        throw new Error('Method not implemented.');
    }

}