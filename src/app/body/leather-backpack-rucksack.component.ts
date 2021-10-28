import {Component, OnInit} from "@angular/core";
import {pagecardModel} from "../carousel-card/pagecard.model";
import {mock_cards} from "../carousel-card/mock-cards";
import {CardData1service} from "../carousel-card/cardData1service";

@Component({
  selector: "leather-backpack-rucksack",
  templateUrl: "leather-backpack-rucksack.component.html"
})
export class LeatherBackpackComponent implements OnInit{
  backpackCards1:pagecardModel[] = [];

  constructor(private cardDataService1:CardData1service) {
  }
  ngOnInit(): void {
    console.log("SUBSCRIBED");
    this.showCardData1();

  }
  showCardData1() {
    this.cardDataService1.getCardData1().subscribe((data1: pagecardModel[]) => {
      console.log(data1);
      this.backpackCards1 = data1;
    });;
  }
}
