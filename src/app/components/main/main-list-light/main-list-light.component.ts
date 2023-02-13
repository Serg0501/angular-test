import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-main-list-light',
  templateUrl: './main-list-light.component.html',
  styleUrls: ['./main-list-light.component.css']
})
export class MainListLightComponent implements OnInit {

  @Output() addEvent = new EventEmitter();

  public posDescription : string = "Друга капіталізація криптовалюта Ethereum успішно пройшла оновлення The Merge, тепер Ethereum працює на алгоритмі онсенсусу PoS. Зараз ефір стоїть на місці, основні рухи будуть ближче до середини дня, по-перше, ще не всі прокинулися,а по-друге, всі ще шукають свої безкоштовні монети. Якщо до вечора не буде безкоштовних монет,  то можна контастувати, що всіх кинули )";
  public binanceDescription : string = "На честь п'ятої річниці Binance - проводить спеціальну акцію та дає можливість вкласти BNB під 55,5%. На жаль, акція тільки на 14 днів і тільки 1 BNB на аккаунт. Тобто більше 1 BNB покласти під підвищений відсоток не вийде, але якщо монета у вас є, то безглуздо не дозаробити. Період акції: з 15:00 05.07.2022 до 14:59 19.07.2022 (по Києву). Посилання на сторінку зі стейкінгу, https://www.binance.com/uk-UA/staking переходимо, вибираємо монету BNB...";
  public date : string = "18 лист, 2022";
  public posTitle : string = "Ethereum успішно перейшов на PoS";
  public binanceTitle : string = "Binance запустив фіксований стейкінг BNB під 55,5%";

  ngOnInit(): void{
  };

  onAdd() {
    this.addEvent.emit();
  }
}
