import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { MainComponent } from './main/main.component';
import { NewUserComponent } from './new-user/new-user.component';
import { CreditComponent } from './credit/credit.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthGuardService } from '../services/auth-guard.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MapsComponent } from './maps/maps.component';
import { MoneyComponent } from './money/money.component';

import { MyViewComponent } from './my_view/my_view.component';


const routes: Routes = [
  {
    path: 'admin',
    component: LayoutComponent,
    canActivate: [AuthGuardService],
    children: [
      { path: '', redirectTo: 'main', pathMatch: 'full' },
      { path: 'main', component: MainComponent },
      { path: 'new', component: NewUserComponent }, // /admin/new
      { path: 'edit/:userId', component: NewUserComponent }, // /admin/edit/xxx
      { path: 'credit', component: CreditComponent }, // /admin/credit
      { path: 'dashboard', component: DashboardComponent }, // /admin/dashboard
      { path: 'maps', component: MapsComponent }, // /admin/maps
      { path: 'money', component: MoneyComponent  }, // /admin/maps
      { path: 'my_view', component: MyViewComponent },
      { path: '**', component: PageNotFoundComponent },
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
