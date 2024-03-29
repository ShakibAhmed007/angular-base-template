import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { RegisterComponent } from './register/register.component';
import { AuthComponent } from './auth.component';


const routes: Routes = [{
    path: '',
    component: AuthComponent,
    children: [

        {
            path: 'login',
            component: LoginComponent,
        },
        {
            path: 'logout',
            component: LogoutComponent,
        },
        {
            path: 'register',
            component: RegisterComponent,
        },

    ],
}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class AuthRoutingModule {
}
