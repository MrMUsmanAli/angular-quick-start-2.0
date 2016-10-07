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

    getList(): Observable<Hero[]>{
        return this.http.get(this.heroesUrl).map(response => response.json().data as Hero[]);
    }

    get(id: number): Observable<Hero>{
        return new Observable(observer => {
            this.getList()
                .subscribe(heroes => {
                    let hero = heroes.find(hero => hero.id === id);
                    observer.next(hero);
                    observer.complete();
                });
        });
    }

    update(hero: Hero) : void{
        const url = `${this.heroesUrl}/${hero.id}`;
        return this.http.put(url, JSON.stringify(hero), {headers: this.headers});
    }

    create(heroName: string) : Observable<Hero>{
        return this.http.post(this.heroesUrl, JSON.stringify({name: heroName}), {headers: this.headers})
            .map(response => response.json().data as Hero);
    }
}