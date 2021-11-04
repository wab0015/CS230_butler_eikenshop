import {Injectable} from "@angular/core";
import {AngularFireDatabase} from "@angular/fire/compat/database";
import {Observable} from "rxjs";
import {pagecardModel} from "../carousel-card/pagecard.model";

@Injectable ({
  providedIn: 'root',

})

export class DatabaseService {
  items: Observable<pagecardModel []>
constructor(private db:AngularFireDatabase) {
  console.log("Setting up FIrebase communication");
  this.items = this.db.list<pagecardModel>('2ndcards').valueChanges();
}

public showData() {
    this.items.subscribe((data ) => {

      console.log("Data received");
      for(let item of data) {
        console.log(item);
      }
  })
}

}
