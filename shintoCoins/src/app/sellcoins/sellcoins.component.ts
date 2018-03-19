import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-sellcoins',
  templateUrl: './sellcoins.component.html',
  styleUrls: ['./sellcoins.component.css']
})
export class SellcoinsComponent implements OnInit {

  ans = "";
  value = 0;
  balance = 0;
  sell = 0;

  constructor(private _http: HttpService) { }

  ngOnInit() {
    this.balance = this._http.getBalance();
    this.value = this._http.getValue();
  }

  sellCoin(){
    this.sell = parseInt(this.ans);
    console.log("this.ans: ", this.ans);
    if (this.balance - this.sell < 0){
      console.log("Not enought coins");
    }
    else{
      this._http.sellCoin(this.ans);
    }
    this.balance = this._http.getBalance();
    this.value = this._http.getValue();
    this.ans = "";
  }
}
