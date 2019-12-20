import { Component, Input } from '@angular/core';

import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-alert-info',
  templateUrl: './alert-info.component.html'
})
export class AlertInfoComponent {
  @Input() message: string;
  public faInfoCircle = faInfoCircle;

  constructor() { }
}
