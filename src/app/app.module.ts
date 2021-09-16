import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {TopNavBarComponent} from "./nav bar/top-nav-bar.component";
import {FooterComponent} from "./Footer/footer.component";
import {CarouselComponent} from "./carousel/carousel.component";
import {LayoutComponent } from './layout/layout.component';
import { YoutubeComponent } from './youtube/youtube.component';


@NgModule({
  declarations: [
    AppComponent,
    TopNavBarComponent,
    FooterComponent,
    CarouselComponent,
    LayoutComponent,
    YoutubeComponent,

  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
