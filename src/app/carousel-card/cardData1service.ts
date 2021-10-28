import {HttpClient} from "@angular/common/http";
import {Component, Injectable} from "@angular/core";
import {pagecardModel} from "./pagecard.model";

@Injectable ({'providedIn':'root'})

export class CardData1service {
  private baseUrl1: string = "https://cs230-eikenshop-default-rtdb.firebaseio.com/";
  private cardEndpoint1: string = "2ndcards";
  private extension: string = ".json";


  constructor(private http: HttpClient) {

  }

  getCardData1() {
    console.log('GETting: ' + this.baseUrl1 + this.cardEndpoint1);
    let cardData1 = this.http.get<pagecardModel[]>(this.baseUrl1 + this.cardEndpoint1 + this.extension);
    return cardData1;
  }
  modifyCardData1(data:pagecardModel) {

    return this.http.put(this.baseUrl1 + this.cardEndpoint1 + "/0" +  this.extension, data);
  }

}
