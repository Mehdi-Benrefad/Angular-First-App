import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'MEHDI BENREFAD';
  isAuth = false;
  //on cree une date
  lastUpdate1 = new Date();

  //last update async
  lastUpdate: Promise<Date> = new Promise((resolve, reject) => {
    const date = new Date();
    setTimeout(
      () => {
        resolve(date);
      }, 2000
    );
  });

  appareils = [
    {
      name: 'Machine à laver',
      status: 'eteint'
    },
    {
      name: 'Frigo',
      status: 'allume'
    },
    {
      name: 'Ordinateur',
      status: 'eteint'
    }
  ];

  //appareilOne = 'Machine à laver';
  //appareilTwo = 'Frigo';
  //appareilThree = 'Ordinateur';

  constructor() {
    setTimeout(
      () => {
        this.isAuth = true;
      }, 4000
    );
  }

  toutAllumer(){
    console.log('on allume tout')
  }

}
