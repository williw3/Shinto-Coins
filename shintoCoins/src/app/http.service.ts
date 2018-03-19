import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HttpService {
  ledger = [];
  balance = 0;
  value = 1;
  algos = [{question: "What is the 5th Fibonacci number?", answer: "5"},
          {question: "What is the 6th Fibonacci number?", answer: "8"},
          {question: "What is the 7th Fibonacci number?", answer: "13"},
          {question: "What is the 8th Fibonacci number?", answer: "21"}, 
          {question: "What is the 9th Fibonacci number?", answer: "34"} 
        ];

  constructor(private _http: HttpClient) { }

  buyCoin(num){
    let id = Math.floor(Math.random() * 1001) + 1;
    let tranny = {id: id, action: "bought", amount: num, value: this.value}
    this.ledger.push(tranny);

    this.value += 1;
    this.balance += parseInt(num);

    console.log("buy leger: ", this.ledger);
    console.log("buy balance: ", this.balance);
  }

  sellCoin(num){
    let id = Math.floor(Math.random() * 1001) + 1;
    let tranny = {id: id, action: "sold", amount: num, value: this.value}
    this.ledger.push(tranny);

    if(this.value > 0){
      this.value -= 1;
    }
    this.balance -= parseInt(num);

    console.log("sell leger: ", this.ledger);
    console.log("buy balance: ", this.balance);
  }

  mineCoin(){
    let id = Math.floor(Math.random() * 1001) + 1;
    let mined = Math.floor(Math.random() * 10) + 1;
    let tranny = {id: id, action: "mined", amount: mined, value: this.value}
    this.ledger.push(tranny);
    console.log("You mined", mined);
    this.value += 1;
  }

  getValue(){
    return this.value;  
  }

  getBalance(){
    return this.balance;
  }

  getLedger(){
    return this.ledger;
  }

  getAlgos(){
    let puzzle = Math.floor(Math.random() * this.algos.length);
    return this.algos[puzzle];
  }




}
