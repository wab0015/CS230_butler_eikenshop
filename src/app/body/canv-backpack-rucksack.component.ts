import {Component, OnInit} from "@angular/core";
import {pagecardModel} from "../carousel-card/pagecard.model";
import {mock_cards} from "../carousel-card/mock-cards";
import {CardDataService} from "../carousel-card/cardData.service";

@Component({
  selector: "canvas-backpack-rucksack",
  templateUrl: "canv-backpack-rucksack.component.html"
})
export class CanvBackpackRucksackComponent implements OnInit{
    backpackCards:pagecardModel[] = [];

    constructor(private cardDataService:CardDataService) {
    }
    ngOnInit(): void {
      console.log("SUBSCRIBED");
      this.showCardData();
    }
    showCardData() {
      this.cardDataService.getCardData().subscribe((data: pagecardModel[]) => {
        console.log(data);
        this.backpackCards = data;
      });;
    }
}
