import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { CribListingComponent } from './crib-listing/crib-listing.component';
import { CribCardComponent } from './crib-card/crib-card.component';
import { HttpModule } from '@angular/http';
import { CribsService } from './services/cribs.service';
@NgModule({
  declarations: [
    AppComponent,
    CribListingComponent,
    CribCardComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [CribsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
