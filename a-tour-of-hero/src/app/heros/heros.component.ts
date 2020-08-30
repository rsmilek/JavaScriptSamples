import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROS } from '../mock-heros';

// The two components will have a parent/child relationship. 
// The parent HeroesComponent will control the child HeroDetailComponent by sending it
// a new hero to display whenever the user selects a hero from the list.
@Component({
  selector: 'app-hero',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.scss']
})
export class HerosComponent implements OnInit {
  heroes: Hero[] = HEROS;
  selectedHero: Hero;

  constructor() { }

  ngOnInit(): void {
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
