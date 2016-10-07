import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

import { Hero } from './hero';

@Component({
    selector: 'my-app',
    template: `<h1>{{title}}</h1>
               <my-heroes></my-heroes>
               `
})


export class AppComponent implements OnInit {

}