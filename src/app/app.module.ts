import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DisplayComponent } from './display/display.component';
import { RepositoryComponent } from './repository/repository.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TimeCountPipe } from './time-count.pipe';


@NgModule({
  declarations: [
    AppComponent,
    DisplayComponent,
    RepositoryComponent,
    NavbarComponent,
    TimeCountPipe,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
