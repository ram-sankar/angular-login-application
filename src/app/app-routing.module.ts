import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';
import { HomeComponent } from './components/home/home.component';
import { AuthGaurdService } from './service/auth-gaurd.service';
import { FormControlExampleComponent } from './components/form-control-example/form-control-example.component';



export const AppRoutes: Routes = [
    { path: 'home', component: HomeComponent, canActivate:[AuthGaurdService]  },
    { path: '', component: LoginComponent },
    { path: 'test', component: FormControlExampleComponent },
    { path: 'logout', component: LogoutComponent, canActivate:[AuthGaurdService]  }
  ];

@NgModule({
  imports: [RouterModule.forRoot(AppRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

