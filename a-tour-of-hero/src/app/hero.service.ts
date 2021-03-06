import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Hero } from './hero';
import { HEROS } from './mock-heros';
import { MessageService } from './message.service';

// 1. Notice that the new service imports the Angular Injectable symbol and annotates the class with the @Injectable() decorator. 
// This marks the class as one that participates in the dependency injection system. The HeroService class is going to provide
// an injectable service, and it can also have its own injected dependencies.
// 2. You must make the HeroService available to the dependency injection system before Angular 
// can inject it into the HeroesComponent by registering a provider.
// 3. When you provide the service at the root level, Angular creates a single, shared instance of HeroService
// and injects into any class that asks for it.
// 4. Modify the constructor with a parameter that declares a private messageService property. 
// Angular will inject the singleton MessageService into that property when it creates the HeroService.
// This is a typical "service-in-service" scenario: you inject the MessageService into the HeroService which is injected into the HeroesComponent.
@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService) {
    this.messageService = messageService;
  }

  // 1. Add a getHeroes method to return the mock heroes.
  // 2. Synchronious getting will not work in a real app. You're getting away with it now because the service currently returns 
  // mock heroes. But soon the app will fetch heroes from a remote server, which is an inherently asynchronous operation.
  // 3. The HeroService must wait for the server to respond, getHeroes() cannot return immediately with hero data,
  // and the browser will not block while the service waits.
  // of(HEROES) returns an Observable<Hero[]> that emits a single value, the array of mock heroes.
  getHeroes(): Observable<Hero[]> {
    // TODO: send the message _after_ fetching the heroes
    this.messageService.add('HeroService: fetched heros');
    return of(HEROS);
  };
}
