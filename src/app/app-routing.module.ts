import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SneakerComponent } from './admin/sneaker/sneaker.component';
import { UserComponent } from './admin/user/user.component';

const routes: Routes = [
  {path:'admin/users', component: UserComponent},
  {path:'admin/sneakers', component: SneakerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
