import { Component, OnInit } from '@angular/core';
import { Hero } from '../models/hero.interface';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];

  constructor(private heroService: HeroService) {}

  ngOnInit() {
    this.getHeroes();
  }

  //this is saying subscribe to getHeroes (we don't know when that assync function will return something, but when it does, call it heroes, and assign it to this.heroes)
  getHeroes(): void {
    this.heroService.getHeroes().subscribe(heroes => (this.heroes = heroes));
  }
}
