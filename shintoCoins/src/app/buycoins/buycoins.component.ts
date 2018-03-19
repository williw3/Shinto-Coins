import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-buycoins',
  templateUrl: './buycoins.component.html',
  styleUrls: ['./buycoins.component.css']
})
export class BuycoinsComponent implements OnInit {

  ans = "";
  value = 0;
  balance = 0;

  constructor(private _http: HttpService) { }

  ngOnInit() {
    this.balance = this._http.getBalance();
    this.value = this._http.getValue();
  }

  buyCoin(){
    console.log("this.ans: ", this.ans);
    this._http.buyCoin(this.ans);
    this.balance = this._http.getBalance();
    this.value = this._http.getValue();
    this.ans = "";

  }

}
