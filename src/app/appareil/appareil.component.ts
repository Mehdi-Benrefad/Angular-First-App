import { Component, Input , OnInit } from '@angular/core';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.scss']
})
export class AppareilComponent implements OnInit {

  constructor() { }

  //appareilName = "Machine a Laver";
  @Input() appareilName: string = "";
  //appareilStatus: string = 'éteint';
  @Input() appareilStatus: string = "";

  ngOnInit(): void {
  }

  getStatus() {
    return this.appareilStatus;
  }

  getColor() {
    if(this.appareilStatus === 'allume') {
      return 'green';
    } else if(this.appareilStatus === 'eteint') {
      return 'red';
    }
    return 'black'
}

}
