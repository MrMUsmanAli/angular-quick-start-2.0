import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
    selector: 'dashboard',
    moduleId: module.id,
    templateUrl: 'dashboard.component.html',
    styleUrls: [ 'dashboard.component.css' ]
})

export class DashboardComponent implements OnInit {
    constructor(
        private heroService: HeroService,
        private router: Router
    ){

    }
    ngOnInit(): void {
        this.getHeroes();
    }
    heroes: Hero[] = [];
    getHeroes(): void {
        this.heroService.getList().subscribe(heroes => this.heroes = heroes.slice(1,5));
    }
    gotoDetail(hero: Hero) : void {
        let link = ['/detail', hero.id];
        this.router.navigate(link);
    }
}