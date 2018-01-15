import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-new-hero',
  templateUrl: './new-hero.component.html',
  styleUrls: ['./new-hero.component.css']
})
export class NewHeroComponent implements OnInit {
  @Output() save = new EventEmitter();
  name: String = '';

  constructor() { }

  ngOnInit() {
  }

  newHero() {
    this.save.emit(this.name);
    this.name = '';
  }

}
