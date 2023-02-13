import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-main-grid-list',
  templateUrl: './main-grid-list.component.html',
  styleUrls: ['./main-grid-list.component.css']
})
export class MainGridListComponent implements OnInit{

  @Output() onExit = new EventEmitter();

  public posDescription : string = "Друга капіталізація криптовалюта Ethereum успішно пройшла оновлення The Merge, тепер Ethereum працює на алгоритмі консенсусу PoS. Зараз ефір стоїть на місці, основні рухи будуть ближче до середини дня... ";
  public binanceDescription : string = "На честь п'ятої річниці Binance - проводить спеціальну акцію та дає можливість вкласти BNB під 55,5%. На жаль, акція тільки на 14 днів і тільки 1 BNB на аккаунт. Тобто більше 1 BNB покласти під підвищений відсоток...";
  public date : string = "18 лист, 2022";
  public binanceTitle : string = "Binance запустив фіксований стейкінг BNB під 55,5%";

  ngOnInit(): void {}

  exitForm(){
    this.onExit.emit();
  }
}
