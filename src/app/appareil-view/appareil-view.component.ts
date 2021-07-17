import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AppareilService } from '../services/appareil.service';

@Component({
  selector: 'app-appareil-view',
  templateUrl: './appareil-view.component.html',
  styleUrls: ['./appareil-view.component.scss']
})
export class AppareilViewComponent implements OnInit {

  //apres subscription
  appareilSubscription: Subscription = new Subscription();

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

  appareils: any[]=[];
  /*(la declaration est deplacee vers le service "appareil.service.ts")
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
  */

  //appareilOne = 'Machine à laver';
  //appareilTwo = 'Frigo';
  //appareilThree = 'Ordinateur';

  constructor(private appareilService: AppareilService) {
    setTimeout(
      () => {
        this.isAuth = true;
      }, 4000
    );
  }

  /*
  ngOnInit() {
    this.appareils = this.appareilService.appareils;
  }
  */

  //apres subjects
    ngOnInit() {
      this.appareilSubscription = this.appareilService.appareilsSubject.subscribe(
        (appareils: any[]) => {
          this.appareils = appareils;
        }
      );
      this.appareilService.emitAppareilSubject();
    }

  toutAllumer(){
    console.log('on allume tout')
  }

  onAllumer() {
    this.appareilService.switchOnAll();
  }

  onEteindre() {
    if(confirm('Etes-vous sûr de vouloir éteindre tous vos appareils ?')) {
      this.appareilService.switchOffAll();
    } else {
    }
}


//fonction qui nous pernettera d.enregistrer dans firebase
onSave() {
  this.appareilService.saveAppareilsToServer();
}


//fonction de recuperation de firebase
onFetch() {
  this.appareilService.getAppareilsFromServer();
}

}
