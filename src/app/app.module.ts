import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { NgMatModule } from './ngmat/ng-mat.module';
import { HandlerModule } from './handler/handler.module';

// import { HeaderModule } from './header/header.module';
import { IngredientModule } from './ingredient/ingredient.module';

import { HomeModule } from './home/home.module';
import { SalesModule } from './sales/sales.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    NgMatModule,
    HandlerModule,
    // HeaderModule,
    IngredientModule,
    HomeModule,
    SalesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
