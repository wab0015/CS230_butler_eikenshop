import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-carousel-card',
  templateUrl: './carousel-card.component.html',
  styleUrls: ['./carousel-card.component.css']
})
export class CarouselCardComponent implements OnInit {

  @Input()
  cardImg! :string;
  @Input()
  category! :string;
  @Input()
  backpackName!: string;
  @Input()
  currentPrice!: string;
  @Input()
  previousPrice!: string;




  constructor() { }

  ngOnInit(): void {
  }

}
