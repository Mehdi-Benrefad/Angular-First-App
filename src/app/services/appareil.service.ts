import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AppareilService {

  constructor(private httpClient: HttpClient) { }

  appareilsSubject = new Subject<any[]>();

  private appareils = [
    {
      id:1,
      name: 'Machine à laver',
      status: 'eteint'
    },
    {
      id:2,
      name: 'Frigo',
      status: 'allume'
    },
    {
      id:3,
      name: 'Ordinateur',
      status: 'eteint'
    }
  ];



  emitAppareilSubject() {
    this.appareilsSubject.next(this.appareils.slice());

  }


  switchOnAll() {
    for(let appareil of this.appareils) {
      appareil.status = 'allume';
    }
     //apres subject
     this.emitAppareilSubject();
  }

switchOffAll() {
    for(let appareil of this.appareils) {
      appareil.status = 'eteint';
    }

     //apres subject
     this.emitAppareilSubject();
}

switchOnOne(i: number) {
  this.appareils[i].status = 'allume';
   //apres subject
   this.emitAppareilSubject();
}

switchOffOne(i: number) {
  this.appareils[i].status = 'eteint';
   //apres subject
   this.emitAppareilSubject();
}

getAppareilById(id: number) {
  const appareil = this.appareils.find(
    (s) => {
      return s.id === id;
    }
  );
  return appareil;
}



addAppareil(name: string, status: string) {
  const appareilObject = {
    id: 0,
    name: '',
    status: ''
  };
  appareilObject.name = name;
  appareilObject.status = status;
  appareilObject.id = this.appareils[(this.appareils.length - 1)].id + 1;
  this.appareils.push(appareilObject);
  this.emitAppareilSubject();
}




//méthode qui va enregistrer l'array  appareils  dans la base de données au endpoint  /appareils  par la méthode POST

saveAppareilsToServer() {
  this.httpClient
    .put('https://http-client-demo-601ae-default-rtdb.firebaseio.com/appareils.json', this.appareils)
    .subscribe(
      () => {
        console.log('Enregistrement terminé !');
      },
      (error) => {
        console.log('Erreur ! : ' + error);
      }
    );
}


getAppareilsFromServer() {
  this.httpClient
    .get<any[]>('https://http-client-demo-601ae-default-rtdb.firebaseio.com/appareils.json')
    .subscribe(
      (response) => {
        this.appareils = response;
        this.emitAppareilSubject();
      },
      (error) => {
        console.log('Erreur ! : ' + error);
      }
    );
}


}
