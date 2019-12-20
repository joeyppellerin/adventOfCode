import { Component, OnInit } from '@angular/core';

import { AdventOfCode } from './../../models/advent-of-code';
import { GestionAdventOfCodeService } from './../../services/gestion-advent-of-code/gestionAdventOfCode.service';

@Component({
  selector: 'app-home-component',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.scss']
})

export class HomeComponent implements OnInit {
  public estListeAdventOfCodeAffiche: boolean;
  public listeAdventOfCode: AdventOfCode[];
  public messageInfo: string;

  constructor(private readonly gestionAdventOfCodeService: GestionAdventOfCodeService) {
    this.listeAdventOfCode = [];
    this.messageInfo = `Aucune solution de l'Advent of code n'a encore été soumise.`;
  }

  ngOnInit() {
    this.listeAdventOfCode = this.gestionAdventOfCodeService.getListeAdventOfCode();
    this.estListeAdventOfCodeAffiche = this.afficherListeAdventOfCode();
  }

  private afficherListeAdventOfCode(): boolean {
    return this.listeAdventOfCode && this.listeAdventOfCode[0].reponses && this.listeAdventOfCode[0].reponses.length > 0;
  }
}
