import {Component} from "@angular/core";
import {NavController, NavParams, ModalController, MenuController} from "ionic-angular";
import {QuotesService} from "../../services/quotes.service";
import {Quote} from "../../data/quotes.interface";
import {QuotePage} from "../quote/quote";
import {SettingsService} from "../../services/settings.service";


@Component({
  selector: 'page-favorites',
  templateUrl: 'favorites.html'
})
export class FavoritesPage {
  quotes: Quote[];

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private quotesService: QuotesService,
              private modalCtrl: ModalController,
              private menuCtrl: MenuController,
              private settingService: SettingsService) {
  }

  ionViewWillEnter() {
    this.quotes = this.quotesService.getFavoriteQuotes();
  }

  onViewQuote(quote: Quote) {
    const modal = this.modalCtrl.create(QuotePage, quote);
    modal.present();
    modal.onDidDismiss( (remove : boolean)=> {
      if (remove) {
;       this.onRemoveFromFavorite(quote);
      }
    });

  }

  onRemoveFromFavorite(quote:Quote) {
    this.quotesService.removeQuoteFromFavorites(quote);
    this.ionViewWillEnter()
  }

  openMenu() {
    this.menuCtrl.open();
  }

  getBackground() {
    return this.settingService.isAltBackground() ? 'altQuoteBackground' : 'quoteBackground';
  }

  isAltBackground() {
    return this.settingService.isAltBackground();
  }
}
