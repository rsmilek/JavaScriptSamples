import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

// 1. The two components will have a parent/child relationship. 
// The parent HeroesComponent will control the child HeroDetailComponent by sending it
// a new hero to display whenever the user selects a hero from the list.
// 2. Sends and display a message each time the user clicks on a hero, showing a history of the user's selections.
@Component({
  selector: 'app-hero',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.scss']
})
export class HerosComponent implements OnInit {

  selectedHero: Hero;
  heroes: Hero[];

  // Inject the HeroService: 
  // 1. Add a private heroService parameter of type HeroService to the constructor.
  // 2. The parameter simultaneously defines a private heroService property and identifies it as a HeroService injection site.
  // 3. When Angular creates a HeroesComponent, the Dependency Injection system sets the heroService parameter to the singleton instance of HeroService.
  // 4. Subscribe in HeroesComponent. The HeroService.getHeroes method used to return a Hero[]. Now it returns an Observable<Hero[]>.
  constructor(private heroService: HeroService, private messageService: MessageService) { }

  // 4. Reserve the constructor for simple initialization such as wiring constructor parameters to properties. The constructor shouldn't do anything.
  // It certainly shouldn't call a function that makes HTTP requests to a remote server as a real data service would.
  ngOnInit(): void {
    this.getHeros();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.messageService.add(`HeroesComponent: Selected hero id=${hero.id} name=${hero.name}`);
  }

  getHeros(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }
}
