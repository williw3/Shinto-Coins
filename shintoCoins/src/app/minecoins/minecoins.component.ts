import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-minecoins',
  templateUrl: './minecoins.component.html',
  styleUrls: ['./minecoins.component.css']
})
export class MinecoinsComponent implements OnInit {
  algos = {};
  ans = "";
  ledger = [];

  constructor(private _http: HttpService) { }


  ngOnInit() {
    this.algos = this._http.getAlgos();
    console.log(this.algos['answer']);
  }

  mineCoin(){
    console.log("this.ans", this.ans);
    if(this.ans == this.algos['answer']){
      this._http.mineCoin();
    }
    else{
      console.log("Wrong Anser dumbass");
    }
    this.ans = "";
  }
}
