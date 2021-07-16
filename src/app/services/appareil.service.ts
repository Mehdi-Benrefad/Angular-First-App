export class AppareilService {
  appareils = [
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


  switchOnAll() {
    for(let appareil of this.appareils) {
      appareil.status = 'allume';
    }
}

switchOffAll() {
    for(let appareil of this.appareils) {
      appareil.status = 'eteint';
    }

}

switchOnOne(i: number) {
  this.appareils[i].status = 'allume';
}

switchOffOne(i: number) {
  this.appareils[i].status = 'eteint';
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
