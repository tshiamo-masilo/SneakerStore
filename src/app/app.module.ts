import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { UserComponent } from './admin/user/user.component';
import { AddUserComponent } from './admin/user/add-user/add-user.component';
import {FormsModule} from '@angular/forms';
import { ViewUserComponent } from './admin/user/view-user/view-user.component';
import { SneakerComponent } from './admin/sneaker/sneaker.component'


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    UserComponent,
    AddUserComponent,
    ViewUserComponent,
    SneakerComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
