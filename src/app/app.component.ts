import { Component, OnDestroy, OnInit } from '@angular/core';
import { AppareilService } from './services/appareil.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/interval';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit , OnDestroy{
  constructor(){}

  //on cree la variable qui va etre affichee a l'utilisateur
  secondes: number = 0;
  counterSubscription: Subscription = new Subscription();


  ngOnInit() {
    //on cree un counter qui va nous retourner une valeur par seconde.
    const counter = Observable.interval(1000);
    //on applique au counter la fonction subscribe qui va nous permettre d'actualiser la valeur de la varibles secondes a partir du counter.
    /*counter.subscribe(
      (value) => {
        this.secondes = value;
      },
      (error) => {
        console.log('Uh-oh, an error occurred! : ' + error);
      },
      () => {
        console.log('Observable complete!');
      }
    );*/

    this.counterSubscription = counter.subscribe(
      (value) => {
        this.secondes = value;
      },
      (error) => {
        console.log('Uh-oh, an error occurred! : ' + error);
      },
      () => {
        console.log('Observable complete!');
      }
    );

}


  ngOnDestroy() {
    this.counterSubscription.unsubscribe();
  }

}
