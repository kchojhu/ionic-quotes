import {Component, OnInit} from "@angular/core";
import {NavController, NavParams, AlertController} from "ionic-angular";
import {Quote} from "../../data/quotes.interface";
import {QuotesService} from "../../services/quotes.service";

/*
 Generated class for the Quotes page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Component({
  selector: 'page-quotes',
  templateUrl: 'quotes.html'
})
export class QuotesPage implements OnInit {
  quoteGroup: {category: string, quotes: Quote[], icon: string};

  constructor(private navCtrl: NavController, private navParams: NavParams, private alertCtrl: AlertController, private quotesService: QuotesService) {
  }

  ngOnInit(): void {
    this.quoteGroup = this.navParams.data;
  }

  onAddToFavorite(quote: Quote) {
    const alert = this.alertCtrl.create({
      title: 'Add Quote',
      subTitle: 'Are you sure?',
      message: 'Are you sure want to add the quote?',
      buttons: [
        {
          text: 'Yes, go ahead',
          handler: () => {
            console.log('OK');
            this.quotesService.addQuoteToFavorites(quote);
          }
        },
        {
          role: 'cancel',
          text: 'No, I changed my mind!',
          handler: () => {
            console.log('Cancelled');
          }
        }
      ]
    });
    alert.present();
  }

  onRemoveFromFavorite(quote:Quote) {
    this.quotesService.removeQuoteFromFavorites(quote);
  }

  isFavorite(quote: Quote) {
    return this.quotesService.isQuoteFavorite(quote);
  }
}
