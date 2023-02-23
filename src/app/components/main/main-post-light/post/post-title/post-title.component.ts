import { Component } from '@angular/core';

@Component({
  selector: 'app-post-title',
  templateUrl: './post-title.component.html',
  styleUrls: ['./post-title.component.css']
})
export class PostTitleComponent {

  public postTitleDescription: string = "Сьогодні на особистий обліковий запис, я купую наступні монети: TWT, TON, QMALL. Чому роблю таку інвестицію (кажу одразу – це інвестиція з горизонтом у 6-12 місяців, тобто купив і забув на цей час) розповім докладніше.";
  public chapterRemind: string ="Відразу нагадаю, що у мене є два акаунти, один особистий (він же основний), а другий для спільноти «БУРШ – бізнес у рваних штанях».";
  public chapterOverview: string ="Так ось. Сьогодні на особистий обліковий запис, я купую наступні монети: TWT, TON, QMALL. Чому роблю таку інвестицію (кажу одразу – це інвестиція з горизонтом у 6-12 місяців, тобто купив і забув на цей час) розповім докладніше:";

}
