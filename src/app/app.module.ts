import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {TopNavBarComponent} from "./nav bar/top-nav-bar.component";
import {FooterComponent} from "./Footer/footer.component";
import {CarouselComponent} from "./carousel/carousel.component";
import {LayoutComponent } from './layout/layout.component';
import { YoutubeComponent } from './youtube/youtube.component';
import { BodyComponent } from './body/body.component';
import {CanvBackpackRucksackComponent} from "./body/canv-backpack-rucksack.component";
import {LeatherBackpackComponent} from "./body/leather-backpack-rucksack.component";
import {LeatherMessengerBagComponent} from "./body/leather-messenger-bag.component";
import {CanvMessengerBagComponent} from "./body/canv-messenger-bag.component";
import { AppRoutingModule } from './app-routing.module';
import { RoutingLayoutComponent } from './routing-layout/routing-layout.component';


@NgModule({
  declarations: [
    AppComponent,
    TopNavBarComponent,
    FooterComponent,
    CarouselComponent,
    LayoutComponent,
    YoutubeComponent,
    BodyComponent,
    CanvBackpackRucksackComponent,
    LeatherBackpackComponent,
    CanvMessengerBagComponent,
    LeatherMessengerBagComponent,
    RoutingLayoutComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
