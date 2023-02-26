import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { CardComponent } from './components/card/card.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { LocationsComponent } from './pages/locations/locations.component';
import { EpisodesComponent } from './pages/episodes/episodes.component';
import { DetailLocationComponent } from './pages/detail-location/detail-location.component';
import { DetailEpisodeComponent } from './pages/detail-episode/detail-episode.component';
import { DetaisCharacterComponent } from './pages/detais-character/detais-character.component';
import { HttpClientModule } from '@angular/common/http';
import { CardLocationComponent } from './components/card-location/card-location.component';
import { SmallCardCharacterComponent } from './components/small-card-character/small-card-character.component';
import { NgOptimizedImage } from '@angular/common';
import { CardEpisodeComponent } from './components/card-episode/card-episode.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CharactersComponent } from './pages/characters/characters.component'
import { InfiniteScrollModule } from "ngx-infinite-scroll";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CardComponent,
    FooterComponent,
    HomeComponent,
    LocationsComponent,
    EpisodesComponent,
    DetailLocationComponent,
    DetailEpisodeComponent,
    DetaisCharacterComponent,
    CardLocationComponent,
    SmallCardCharacterComponent,
    CardEpisodeComponent,
    CharactersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgOptimizedImage,
    BrowserAnimationsModule,
    InfiniteScrollModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
