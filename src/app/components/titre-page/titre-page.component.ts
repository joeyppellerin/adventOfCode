import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-titre-page',
  templateUrl: 'titre-page.component.html'
})

export class TitrePageComponent {
  @Input() titrePage: string;

  constructor() { }
}
