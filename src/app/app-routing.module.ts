import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { AsiderComponent } from './asider/asider.component';

const routes: Routes = [
  {
    path: '', component: MenuComponent,
    children: [
      { path: '', component: AsiderComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
