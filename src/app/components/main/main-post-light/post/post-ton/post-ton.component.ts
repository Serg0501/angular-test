import { Component } from '@angular/core';

@Component({
  selector: 'app-post-ton',
  templateUrl: './post-ton.component.html',
  styleUrls: ['./post-ton.component.css']
})
export class PostTonComponent {

  public TONTerm: string = "- криптовалюта Павла Дурова - він же власник телеграм - він же месенджер, що найшвидше розвивається (але це вже давно не тільки про";
  public TONDescription: string = "не тільки про спілкування). Офіційно Дуров монетою не володіє - це йому заборонив SEC, але те як іде інтеграція месенджера з екосистемою TON, багато що пояснює і все ставить на свої місця. Історичний максимум у монети був 4,5$, зараз коштує 1.9$ і теж показує зростання на ринку, що падає. Якщо подивитися на роадмап монети та плани з інтеграції з месенджером, то я легко бачу TON по 10-15$, а може навіть вище, через 6-12 місяців.";
  public TONScore: string = "Якщо вкластися у всі три стейкінги, то сумарно має вийти близько 100 TON доходу, пропозиція справді щедра.";
  public remarkDescription: string = "Стейкати можна лише куплені на Huobi монети. Завести TON на біржу та відправити в стейкінг не вийде.";

}
