import { Component, Input , OnInit } from '@angular/core';
import { AppareilService } from '../services/appareil.service';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.scss']
})
export class AppareilComponent implements OnInit {

  constructor(private appareilService: AppareilService) { }

  //appareilName = "Machine a Laver";
  @Input() appareilName: string = "";
  //appareilStatus: string = 'éteint';
  @Input() appareilStatus: string = "";
  @Input() index: number = 0;
  @Input() id: number = 0;

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

  onSwitch() {
    if(this.appareilStatus === 'allume') {
      this.appareilService.switchOffOne(this.index);
    } else if(this.appareilStatus === 'eteint') {
      this.appareilService.switchOnOne(this.index);
    }
  }

}
