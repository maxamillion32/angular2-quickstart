import {Hero} from './hero.js';
import {HeroDetailComponent} from './hero-detail.component';

  var HEROES = [ new Hero(11 , "Mr. Nice"),
                  new Hero(12 , "Narco"),
                  new Hero(13 , "Bombasto"),
                  new Hero(14 , "Celeritas"),
                  new Hero(15 , "Magneta"),
                  new Hero(16 , "RubberMan"),
                  new Hero(17 , "Dynama"),
                  new Hero(18 , "Dr IQ"),
                  new Hero(19 , "Magma"),
                  new Hero(20 , "Tornado")];

  export var AppComponent = ng.core
    .Component({
      selector: 'my-app',
      template: `<h1>{{title}}</h1>
      <h2>My Heroes</h2>
      <ul class="heroes">
          <li *ngFor="#hero of heroes" [class.selected]="hero === selectedHero" (click)="onSelect(hero)">
            <span class="badge">{{hero.id}}</span> {{hero.name}}
          </li>
      </ul>
      <my-hero-detail [hero]="selectedHero"></my-hero-detail>
      `,
      styles:[`
        .heroes {list-style-type: none; margin-left: 1em; padding: 0; width: 10em;}
      .heroes li { cursor: pointer; position: relative; left: 0; transition: all 0.2s ease; }
      .heroes li:hover {color: #369; background-color: #EEE; left: .2em;}
      .heroes .badge {
        font-size: small;
        color: white;
        padding: 0.1em 0.7em;
        background-color: #369;
        line-height: 1em;
        position: relative;
        left: -1px;
        top: -1px;
      }
      .selected { background-color: #EEE; color: #369; }
    `],
     directives: [HeroDetailComponent]
    })
    .Class({
      constructor: function() {
        this.title = 'Tour of Heroes';
        this.selectedHero = {};
        this.heroes = HEROES;
        this.onSelect = function(hero) {
          this.selectedHero = hero;
        }
      }

    });
