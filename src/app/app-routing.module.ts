import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CanvBackpackRucksackComponent} from "./body/canv-backpack-rucksack.component";
import {LeatherBackpackComponent} from "./body/leather-backpack-rucksack.component";
import {CanvMessengerBagComponent} from "./body/canv-messenger-bag.component";
import {LeatherMessengerBagComponent} from "./body/leather-messenger-bag.component";
import {LayoutComponent} from "./layout/layout.component";
import {RoutingLayoutComponent} from "./routing-layout/routing-layout.component";

const routes: Routes = [

  { path: 'home', component: LayoutComponent },
  { path: 'not-home', component: RoutingLayoutComponent },
  { path: 'canvasbackpackrucksack', component: CanvBackpackRucksackComponent },
  { path: 'leatherbackpackrucksack', component: LeatherBackpackComponent },
  { path: 'canvasmessengerbag', component: CanvMessengerBagComponent},
  { path: 'leathermessengerbag', component: LeatherMessengerBagComponent },
  { path: '' , redirectTo: '/home', pathMatch: 'full' }
];


@NgModule({

  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
