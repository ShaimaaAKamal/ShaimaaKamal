import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-action-button',
  standalone: false,

  templateUrl: './action-button.component.html',
  styleUrl: './action-button.component.scss'
})
export class ActionButtonComponent {
@Input() actionName='';
@Input() btnType='main';
// @Input() icon='';

}
