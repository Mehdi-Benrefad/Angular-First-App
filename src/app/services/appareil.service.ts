import { Subject } from "rxjs";

export class AppareilService {

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

}
