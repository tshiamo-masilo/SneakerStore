import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './admin/user/user.component';
import { Sneaker } from './model/Sneaker';

const routes: Routes = [
  {path:'admin/users', component: UserComponent},
  {path:'admin/sneaker', component: Sneaker}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
