import {Component} from "@angular/core";
import {carouselCardModel} from "../carousel-card/carousel-card.model";
import {mock_cards} from "../carousel-card/mock-cards";

@Component({
  selector: "canvas-backpack-rucksack",
  templateUrl: "canv-backpack-rucksack.component.html"
})
export class CanvBackpackRucksackComponent {
    backpackCards:carouselCardModel[] = [];

    constructor() {
      for(var backpackCard of mock_cards) {
        this.backpackCards.push(new carouselCardModel(backpackCard));
      }
    }
}
