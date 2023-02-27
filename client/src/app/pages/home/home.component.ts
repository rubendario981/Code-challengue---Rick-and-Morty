import { Component, HostListener } from '@angular/core';
import { Character } from 'src/app/models/ModelCharacter';
import { CharactersService } from 'src/app/services/characters.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [CharactersService]
})

export class HomeComponent {
  public characters: Character[];
  public currentPage!: number;
  public pages!: number;
  constructor(private requestCharacter: CharactersService) {
    this.characters = []
  }

  ngOnInit() {
    this.requestCharacter.getAllCharacters().subscribe(
      response => {
        this.characters = response.results.splice(0, 6)
        this.pages = response.info.pages
        this.currentPage = 1
      }
    )
  }

  @HostListener("window:scroll")
  loadMore(): void {
    const scrollTop = document.documentElement.scrollTop;
    if (this.currentPage === 1 && scrollTop > 250) {
      this.requestCharacter.getAllCharacters().subscribe(
        response => this.characters = response.results        
      )
      this.currentPage++
    } else if ((this.currentPage < this.pages) && (this.currentPage * 1000 < scrollTop)) {
      this.currentPage++
      this.requestCharacter.getCharactersByPage(this.currentPage).subscribe(
        response => {
          response.results.map((el: Character) => {
            this.characters.push(el)
          })
        }
      )
    }
  }
}
