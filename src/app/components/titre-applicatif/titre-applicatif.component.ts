import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-titre-applicatif',
  templateUrl: 'titre-applicatif.component.html',
  styleUrls: ['titre-applicatif.component.scss']
})

export class TitreApplicatifComponent {
  @Input() titreApplicatif: string;

  constructor() { }
}
