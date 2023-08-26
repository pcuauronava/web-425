/**
 * Title: app.routing.ts
 * Author: Professor Krasso
 * Date: 08/25/2023
 * Modified By: Patrick Cuauro
 * Description: App routing
 */
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SigninComponent } from './signin/signin.component';
import { SignInGuard } from './sign-in.guard';

export const AppRoutes: Routes = [
    {
        path: '',
        component: SigninComponent
    },
    {
        path: 'home',
        component: HomeComponent,
        canActivate: [SignInGuard]
    }
];