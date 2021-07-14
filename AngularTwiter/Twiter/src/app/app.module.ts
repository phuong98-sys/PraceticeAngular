
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './main/layout/header/header.component';
import { HomeComponent } from './main/content/home/home.component';
import { LeftMenuComponent } from './main/layout/left-menu/left-menu.component';
import { SearchBoxComponent } from './main/layout/right-topic/search-box/search-box.component';
import { NewTweetComponent } from './main/content/home/new-tweet/new-tweet.component';
import { HttpClientModule } from '@angular/common/http';
import { TrendsComponent } from './main/layout/right-topic/trends/trends.component';
import { WhoFollowComponent } from './main/layout/right-topic/who-follow/who-follow.component';
import { TopicFollowComponent } from './main/layout/right-topic/topic-follow/topic-follow.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent, 
    LeftMenuComponent, SearchBoxComponent, NewTweetComponent, TrendsComponent, WhoFollowComponent, TopicFollowComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
