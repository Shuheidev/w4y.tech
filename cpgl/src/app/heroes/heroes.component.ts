import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { MessagesService } from '../messages.service';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  public heroes: Hero[];
  public selectedHero: Hero;

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.messageService.add(`HeroService: Selected hero id=${hero.id}`);
    console.log('Current selected hero: ', this.selectedHero);
  }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
    console.warn(this.heroes);
  }

  constructor(private heroService: HeroService, private messageService: MessagesService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

}
