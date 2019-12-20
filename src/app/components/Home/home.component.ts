import { Component, OnInit } from '@angular/core';

import { EtapeUnService } from './../../../services/2019/etapeUn.service';

@Component({
  selector: 'app-home-component',
  templateUrl: 'home.component.html'
})

export class HomeComponent implements OnInit {
  public reponses: string [];

  constructor(private readonly etapeUnService: EtapeUnService) {
    this.reponses = [];
  }

  ngOnInit() { }
}
