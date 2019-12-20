import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public titre: string;

  constructor() {

    this.titre = 'Advent of code';
  }
}
