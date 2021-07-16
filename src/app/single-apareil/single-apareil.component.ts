import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppareilService } from '../services/appareil.service';


@Component({
  selector: 'app-single-apareil',
  templateUrl: './single-apareil.component.html',
  styleUrls: ['./single-apareil.component.scss']
})
export class SingleApareilComponent implements OnInit {

  name: string = 'Appareil';
  status: string = 'Statut';

  constructor(private appareilService:AppareilService, private route: ActivatedRoute , private router: Router) { }

  ngOnInit(): void {
    //this.name = this.route.snapshot.params['id'];

    // First
    const id = this.route.snapshot.params['id'];
    this.name = this?.appareilService?.getAppareilById(+id)?.name ?? "";
    this.status = this?.appareilService?.getAppareilById(+id)?.status ?? "";
  }

  backToAppareils(){
    this.router.navigate(['appareils']);
  }



}
