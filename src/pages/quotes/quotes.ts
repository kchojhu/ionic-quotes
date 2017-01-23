import {Component, OnInit} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {Quote} from "../../data/quotes.interface";

/*
 Generated class for the Quotes page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Component({
  selector: 'page-quotes',
  templateUrl: 'quotes.html'
})
export class QuotesPage {
  quoteGroup: {category: string, quotes: Quote[], icon: string};

  constructor(private navCtrl: NavController, private navParams: NavParams) {
  }



  ionViewDidLoad() {

    this.quoteGroup = this.navParams.data;
  }

}
