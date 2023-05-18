import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-selected-button',
  templateUrl: './selected-button.component.html',
  styleUrls: ['./selected-button.component.css']
})
export class SelectedButtonComponent {

  @Input() title!: string;
}
