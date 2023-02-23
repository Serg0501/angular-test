import { Component } from '@angular/core';

@Component({
  selector: 'app-post-qmall',
  templateUrl: './post-qmall.component.html',
  styleUrls: ['./post-qmall.component.css']
})
export class PostQmallComponent {

  public qmallTerm: string = "- токен нашої української біржі, яка пре як ЗСУ сьогодні на харківському напрямі! Амбасадором біржі став Усик, а ще обіцяють поставити";
  public qmallAnswer: string = "По-перше, можна купити монету на самому початку її шляху, а по-друге, якщо обіцяне керівництвом буде покладено в життя, то це багато іксів.";
  public remarkDescription: string = "Всі вищезгадані покупки - це інвестиції з горизонтом у 6-12 місяців. Якщо ринок знову піде у бік 18К то монети впадуть - я в такому разі буду докупляти. Кошти для купівлі розподіляю так: TWT – 40%, TON – 40%, QMALL – 20%.";

}
