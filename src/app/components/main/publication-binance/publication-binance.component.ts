import { Component } from '@angular/core';

@Component({
  selector: 'app-publication-binance',
  templateUrl: './publication-binance.component.html',
  styleUrls: ['./publication-binance.component.css']
})
export class PublicationBinanceComponent {

  public binanceDescription : string = "На честь п'ятої річниці Binance - проводить спеціальну акцію та дає можливість вкласти BNB під 55,5%. На жаль, акція тільки на 14 днів і тільки 1 BNB на аккаунт. Тобто більше 1 BNB покласти під підвищений відсоток...";
  public binanceTitle : string = "Binance запустив фіксований стейкінг BNB під 55,5%";
  public date : string = "18 лист, 2022";
}
