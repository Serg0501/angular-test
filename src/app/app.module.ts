import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MainGridListComponent } from './components/main/main-grid-list/main-grid-list.component';
import { FooterComponent } from './components/footer/footer.component';
import { MainListLightComponent } from './components/main/main-list-light/main-list-light.component';
import { MainSearchComponent } from './components/main-search/main-search.component';
import { LogInMetaMaskComponent } from './components/log-in-meta-mask/log-in-meta-mask.component';
import { MessageMetaMaskComponent } from './components/message-meta-mask/message-meta-mask.component';
import { MainComponent } from './components/main/main.component';
import { MainPostLightComponent } from './components/main/main-post-light/main-post-light.component';
import { PostComponent } from './components/main/main-post-light/post/post.component';
import { PostTitleComponent } from './components/main/main-post-light/post/post-title/post-title.component';
import { PostTwtComponent } from './components/main/main-post-light/post/post-twt/post-twt.component';
import { PostTonComponent } from './components/main/main-post-light/post/post-ton/post-ton.component';
import { PostQmallComponent } from './components/main/main-post-light/post/post-qmall/post-qmall.component';
import { PostHashtagComponent } from './components/main/main-post-light/post/post-hashtag/post-hashtag.component';
import { PopularQuestionComponent } from './components/main/main-post-light/popular-question/popular-question.component';
import { WhatIsCriptosComponent } from './components/main/main-post-light/popular-question/what-is-criptos/what-is-criptos.component';
import { SafeBuyingComponent } from './components/main/main-post-light/popular-question/safe-buying/safe-buying.component';
import { WhatIsStakingComponent } from './components/main/main-post-light/popular-question/what-is-staking/what-is-staking.component';
import { WhatIsStockMarketComponent } from './components/main/main-post-light/popular-question/what-is-stock-market/what-is-stock-market.component';
import { SimilarPublicationsComponent } from './components/main/main-post-light/similar-publications/similar-publications.component';
import { PublicationsComponent } from './components/main/main-post-light/similar-publications/publications/publications.component';
import { PublicationEthereumComponent } from './components/main/publication-ethereum/publication-ethereum.component';
import { PublicationBinanceComponent } from './components/main/publication-binance/publication-binance.component';
import { MainGridComponent } from './Pages/main-grid/main-grid.component';
import { MainListComponent } from './Pages/main-list/main-list.component';
import { MainGridSearchComponent } from './Pages/main-grid-search/main-grid-search.component';
import { MainGridLoginMetaMaskComponent } from './Pages/main-grid-login-meta-mask/main-grid-login-meta-mask.component';
import { MainGridLoginMessageComponent } from './Pages/main-grid-login-message/main-grid-login-message.component';
import { PostOneComponent } from './Pages/post-one/post-one.component';
import { NotFoundComponent } from './Pages/not-found/not-found.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainGridListComponent,
    FooterComponent,
    MainListLightComponent,
    MainSearchComponent,
    LogInMetaMaskComponent,
    MessageMetaMaskComponent,
    MainComponent,
    MainPostLightComponent,
    PostComponent,
    PostTitleComponent,
    PostTwtComponent,
    PostTonComponent,
    PostQmallComponent,
    PostHashtagComponent,
    PopularQuestionComponent,
    WhatIsCriptosComponent,
    SafeBuyingComponent,
    WhatIsStakingComponent,
    WhatIsStockMarketComponent,
    SimilarPublicationsComponent,
    PublicationsComponent,
    PublicationEthereumComponent,
    PublicationBinanceComponent,
    MainGridComponent,
    MainListComponent,
    MainGridSearchComponent,
    MainGridLoginMetaMaskComponent,
    MainGridLoginMessageComponent,
    PostOneComponent,
    NotFoundComponent
    
  
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
