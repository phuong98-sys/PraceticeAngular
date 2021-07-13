
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './main/layout/header/header.component';
import { HomeComponent } from './main/content/home/home.component';
import { LeftMenuComponent } from './main/layout/left-menu/left-menu.component';
import { SearchBoxComponent } from './main/layout/right-topic/search-box/search-box.component';
import { NewTweetComponent } from './main/content/home/new-tweet/new-tweet.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent, 
    LeftMenuComponent, SearchBoxComponent, NewTweetComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
