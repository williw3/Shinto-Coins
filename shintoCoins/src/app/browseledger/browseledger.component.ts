import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-browseledger',
  templateUrl: './browseledger.component.html',
  styleUrls: ['./browseledger.component.css']
})
export class BrowseledgerComponent implements OnInit {

  ledger = [];

  constructor(private _http: HttpService) { }

  ngOnInit() {
    this.ledger = this._http.getLedger();
  }
}
