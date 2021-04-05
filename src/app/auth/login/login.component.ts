import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef, Component, Inject } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { NbAuthService, NbLoginComponent, NB_AUTH_OPTIONS } from '@nebular/auth';
import { AuthenticationService } from '../service/authentication.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent extends NbLoginComponent {
    protected service: NbAuthService;
    protected options: {};
    protected cd: ChangeDetectorRef;
    protected router: Router;

    constructor(
        service: NbAuthService,
        @Inject(NB_AUTH_OPTIONS) protected options1,
        cd: ChangeDetectorRef,
        router: Router,
        private http: HttpClient,
        private authService: AuthenticationService
    ) {
        super(service, options1, cd, router);
    }


    login() {
        console.log('login ---- ');
        this.authService.login("admin", "12345")
    }
}
