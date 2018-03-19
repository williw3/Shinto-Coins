import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpService } from './http.service';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MinecoinsComponent } from './minecoins/minecoins.component';
import { BuycoinsComponent } from './buycoins/buycoins.component';
import { SellcoinsComponent } from './sellcoins/sellcoins.component';
import { BrowseledgerComponent } from './browseledger/browseledger.component';
import { HomeComponent } from './home/home.component';
import { DetailComponent } from './detail/detail.component';


@NgModule({
  declarations: [
    AppComponent,
    MinecoinsComponent,
    BuycoinsComponent,
    SellcoinsComponent,
    BrowseledgerComponent,
    HomeComponent,
    DetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
