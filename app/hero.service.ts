import { Injectable } from '@angular/core'
import { Headers, Http } from '@angular/http'
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Hero } from './hero'


@Injectable()
export class HeroService {
    private heroesUrl = 'app/heroes';

    constructor(
        private http: Http
    ){

    }

    getHeroes(): Observable<Hero[]>{
        return this.http.get(this.heroesUrl).map(response => response.json().data as Hero[]);
    }

    getHero(id: number): Observable<Hero>{
        return new Observable(observer => {
            this.getHeroes()
                .subscribe(heroes => {
                    let hero = heroes.find(hero => hero.id === id);
                    observer.next(hero);
                    observer.complete();
                });
        });
    }
}