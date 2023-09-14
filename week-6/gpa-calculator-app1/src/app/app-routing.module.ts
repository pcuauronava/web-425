/**
 * Title: app-routing.module.ts
 * Author: Richard Krasso
 * Modified by: Patrick Cuauro
 * Date: 09/13/2023
 * Description: App routing module
 */


import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BaseLayoutComponent } from './base-layout/base-layout.component';
import { HomeComponent } from './home/home.component';
import { AuthLayoutComponent } from './auth-layout/auth-layout.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  { path: '',
    component: BaseLayoutComponent,
    children: [
      { path: 'home',
      component: HomeComponent
      }
    ]
  },
  { path: 'session',
    component: AuthLayoutComponent,
    children: [
      { path: 'not-found',
      component: NotFoundComponent
      }
    ]
  },
  { path: '**',
    redirectTo: 'session/not-found'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
