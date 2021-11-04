import { Component, OnInit } from '@angular/core';
import {pagecardModel} from "../carousel-card/pagecard.model";
import {CardData1service} from "../carousel-card/cardData1service";
import {DatabaseService} from "../body/database.service";

@Component({
  selector: 'app-edit-card-data1',
  templateUrl: './edit-card-data1.component.html',
  styleUrls: ['./edit-card-data1.component.css']
})
export class EditCardData1Component {

  constructor(private infoService: CardData1service, private dbService:DatabaseService) {
    dbService.showData();


  }

  onUpdateCardData1(data1:pagecardModel){
    this.infoService.modifyCardData1(data1).subscribe(data1=> {
      console.log("Updated backpack info sent to backend")
    })
  }

}
