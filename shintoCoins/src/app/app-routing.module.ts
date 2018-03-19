import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MinecoinsComponent } from './minecoins/minecoins.component';
import { BuycoinsComponent } from './buycoins/buycoins.component';
import { SellcoinsComponent } from './sellcoins/sellcoins.component';
import { BrowseledgerComponent } from './browseledger/browseledger.component';
import { HomeComponent } from './home/home.component';
import { DetailComponent } from './detail/detail.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'minecoins', component: MinecoinsComponent },
  { path: 'buycoins', component: BuycoinsComponent },
  { path: 'sellcoins', component: SellcoinsComponent },
  { path: 'browseledger', component: BrowseledgerComponent },
  { path: 'detail/:id', component: DetailComponent},
  { path: '', pathMatch: 'full', redirectTo: '/home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
