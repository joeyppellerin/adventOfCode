import { Component, Input, OnInit } from '@angular/core';

import { AdventOfCode } from 'src/app/models/advent-of-code';

@Component({
  selector: 'app-accordion',
  templateUrl: 'accordion.component.html'
})

export class AccordionComponent implements OnInit {
  @Input() adventOfCode: AdventOfCode;
  @Input() index: number;
  public sousTitre: string;

  constructor() { }

  ngOnInit() {
    this.sousTitre = this.setSoutTitre();
  }

  private setSoutTitre(): string {
    let titre = '';
    if (this.listeContientElement()) {
      titre = this.adventOfCode.reponses.length > 1 ? 'Réponses :' : 'Réponse :';
    }

    return titre;
  }

  private listeContientElement(): boolean {
    return this.adventOfCode && this.adventOfCode.reponses && this.adventOfCode.reponses.length > 0;
  }
}
