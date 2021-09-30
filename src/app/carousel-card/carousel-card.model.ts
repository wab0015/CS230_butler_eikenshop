export class carouselCardModel {
  cardImg: string;
  category: string;
  backpackName: string;
  currentPrice: string;
  previousPrice: string;

constructor({cardImg, category, backpackName, currentPrice, previousPrice} :

              {cardImg:string,category:string, backpackName:string, currentPrice:string, previousPrice:string }) {

  this.cardImg = cardImg;
  this.category = category;
  this.backpackName = backpackName;
  this.currentPrice = currentPrice;
  this.previousPrice = previousPrice;

  }
}
