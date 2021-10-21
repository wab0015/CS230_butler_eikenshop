import {HttpClient} from "@angular/common/http";
import {Component} from "@angular/core";
import {pagecardModel} from "./pagecard.model";

export class CardDataService {
  private baseUrl: string = "https://cs230-eikenshop-default-rtdb.firebaseio.com/";
  private cardEndpoint: string = "cards.json";


  constructor(private http: HttpClient) {

  }

  getCardData() {
    console.log('GETting: ' + this.baseUrl + this.cardEndpoint);
    let cardData = this.http.get<pagecardModel[]>(this.baseUrl + this.cardEndpoint);
    return cardData;
  }
}
