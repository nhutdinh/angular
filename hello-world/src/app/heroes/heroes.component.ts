import { Component, OnInit } from '@angular/core'
import { Hero } from '../hero/hero'
import { HEROES } from '../hero/mock'

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
  
  hero : Hero = {
    name: '',
    id: null
  }
  selectedHero: Hero
  heroes = HEROES
  onSelect(hero: Hero):void {
    this.selectedHero = hero
  }
  constructor() { }

  ngOnInit() {
  }

}
