import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Hero } from '../../models/hero.model';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
  @Input() hero: Hero;
  @Output() remove: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  removeHero() {
    this.remove.emit(this.hero.id);
  }

}
