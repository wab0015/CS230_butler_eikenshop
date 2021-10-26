import {HttpClient} from "@angular/common/http";
import {Component, Injectable} from "@angular/core";
import {pagecardModel} from "./pagecard.model";

@Injectable ({'providedIn':'root'})

export class CardDataService {
  private baseUrl: string = "https://cs230-eikenshop-default-rtdb.firebaseio.com/";
  private cardEndpoint1: string = "cards.json";


  constructor(private http: HttpClient) {

  }

  getCardData() {
    console.log('GETting: ' + this.baseUrl + this.cardEndpoint1);
    let cardData = this.http.get<pagecardModel[]>(this.baseUrl + this.cardEndpoint1);
    return cardData;
  }
}
