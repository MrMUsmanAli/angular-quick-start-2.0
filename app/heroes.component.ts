import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Hero } from './hero';
import { HeroService } from './hero.service'

@Component({
    selector: 'my-heroes',
    styleUrls: [ 'heroes.component.css' ],
    moduleId: module.id,
    template: `<h2>My heroes</h2>
               <div>
               <label>Hero name:</label><input #heroName />
               <button (click)="add(heroName.value); heroName.value = '';">Add</button>
               </div>
               <ul class="heroes">
                <li *ngFor="let hero of heroes" (click)="onSelect(hero)" [class.selected]="hero === selectedHero">
                   <span class="badge">{{hero.id}}</span>
                   <span>{{hero.name}}</span>
                   <button class="delete" (click)="delete(hero); $event.stopPropagation()">x</button>
                </li>
               </ul>
               <div *ngIf="selectedHero">
                <h2>
                    {{selectedHero.name | uppercase}} is my hero
                </h2>
                <button (click)="gotoDetail()">View Details</button>
               </div>
               `
})

export class HeroesComponent implements OnInit {
    ngOnInit(): void {
        this.getHeroes();
    }
    constructor(
        private heroService: HeroService,
        private router: Router
    ){

    }
    onSelect(hero: Hero): void { this.selectedHero = hero; }
    selectedHero : Hero;
    heroes: Hero[];
    getHeroes() : void {
        this.heroService.getList().subscribe(heroes => this.heroes = heroes);
    }
    gotoDetail() : void {
        this.router.navigate(['/detail', this.selectedHero.id]);
    }
    add(heroName: string) : void {
        this.heroService.create(heroName)
            .subscribe((hero) => this.heroes.push(hero));
    }
    delete(hero: Hero): void {
        this.heroService.delete(hero.id)
            .subscribe(() => {
               this.heroes = this.heroes.filter((h)=> h != hero);
               if (this.selectedHero === hero)
                    this.selectedHero = null;
            });
    }
}