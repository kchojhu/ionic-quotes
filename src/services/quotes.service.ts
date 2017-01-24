import {Quote} from "../data/quotes.interface";
export class QuotesService {
  private favoriteQuotes: Quote[] = [];

  addQuoteToFavorites(quote: Quote) {
    this.favoriteQuotes.push(quote);
  }

  removeQuoteFromFavorites(quote: Quote) {
    const position:number = this.favoriteQuotes.findIndex((q:Quote)=> {
      return q.id === quote.id;
    });
    this.favoriteQuotes.splice(position, 1);
  }

  getFavoriteQuotes() {
    return this.favoriteQuotes.slice();
  }

  isQuoteFavorite(quote: Quote) {
    return this.favoriteQuotes.find((q:Quote) => {
      return quote.id == q.id;
    });
  }
}
