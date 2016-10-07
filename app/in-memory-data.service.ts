import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
    createDb(){
        let heroes = [
            { id: 1, name: 'Ant Man' },
            { id: 2, name: 'Atom' },
            { id: 3, name: 'Black Canary' },
            { id: 4, name: 'Martian' },
            { id: 5, name: 'Huntress' },
            { id: 6, name: 'Dare Devil' },
            { id: 7, name: 'Jessica Jones' },
            { id: 8, name: 'Flash' },
            { id: 9, name: 'Cyborg' },
            { id: 10, name: 'Robin' }
        ];
        return {heroes};
    }
}