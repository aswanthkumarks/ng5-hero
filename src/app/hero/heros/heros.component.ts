import { Component, OnInit } from '@angular/core';
import { Hero } from '../models/hero.model';

@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.css']
})
export class HerosComponent implements OnInit {
  heros: Array<Hero> = [];

  constructor() {
    this.heros = [
      { id: 1, name: 'Sachin' },
      { id: 2, name: 'Ganguli' }
    ];
  }

  ngOnInit() {
  }

  removeHero(id) {
    this.heros = this.heros.filter(item => item.id !== id);
  }

  newHero(name) {
    const newHero = {
      id: Math.floor(Math.random() * 2000),
      name
    };
    this.heros.push(
      newHero
    );
  }

}
