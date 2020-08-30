import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HerosComponent implements OnInit {

  hero: Hero = {
    id: 1,
    name: "Windstorm"
  };

  constructor() { }

  ngOnInit(): void {
  }

}
