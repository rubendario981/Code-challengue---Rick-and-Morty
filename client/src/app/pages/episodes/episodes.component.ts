import { DOCUMENT } from '@angular/common';
import { Component, HostListener, Inject } from '@angular/core';
import { Episode } from 'src/app/models/ModelEpisode';
import { EpisodesService } from 'src/app/services/episodes.service';

@Component({
  selector: 'app-episodes',
  templateUrl: './episodes.component.html',
  styleUrls: ['./episodes.component.css'],
  providers: [EpisodesService]
})
export class EpisodesComponent {
  public episodes!: Episode[];
  public pages!: number;
  public currentPage!: number;
  public endPage!: boolean;

  constructor(private requestEpisodes: EpisodesService,
    @Inject(DOCUMENT) private document: Document) {
    this.episodes = []
  }
  @HostListener("window:scroll")
  loadMore() {
    const scrollTop = this.document.documentElement.scrollTop;
    if ((this.currentPage < this.pages) && (this.currentPage * 600 < scrollTop)) {
      this.currentPage++
      this.requestEpisodes.loadMoreEpisodes(this.currentPage).subscribe(
        response => {
          response.results.map((el: Episode) => {
            this.episodes.push(el)
          })
        }
      )
    }
    if(this.currentPage === this.pages) this.endPage = true

  }

  ngOnInit() {
    this.requestEpisodes.getAllEpisodes().subscribe(
      response => {
        this.episodes = response.results
        this.pages = response.info.pages
        this.currentPage = 1
      }
    )
  }

  ngDoCheck() {

  }
}
