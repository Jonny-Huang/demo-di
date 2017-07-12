import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginService } from './service/login.service';
import { Page1Component } from './page1/page1.component';
import { MenuComponent } from './menu/menu.component';
import { AsiderComponent } from './asider/asider.component';

@NgModule({
  declarations: [
    AppComponent,
    Page1Component,
    MenuComponent,
    AsiderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
