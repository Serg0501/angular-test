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
    MainComponent
  
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
