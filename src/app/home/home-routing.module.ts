import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { PuttestComponent } from './puttest/puttest.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [{
      path: 'category/:id',
      // pathMatch: 'full',
      // redirectTo: 'category/:id',
      component: PuttestComponent,
      // outlet: 'other'
    }]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
