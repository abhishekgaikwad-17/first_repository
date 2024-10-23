import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PropertycardComponent } from './Property/propertycard/propertycard.component';
import { PropertylistComponent } from './Property/propertylist/propertylist.component';
import { PropertynavbarComponent } from './Property/propertynavbar/propertynavbar.component';

@NgModule({
  declarations: [
    AppComponent,
    PropertycardComponent,
    PropertylistComponent,
    PropertynavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
