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
import { NgOptimizedImage } from '@angular/common'

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
    SmallCardCharacterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgOptimizedImage
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
