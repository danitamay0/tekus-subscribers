import { Component, EventEmitter, Input, Output } from '@angular/core';
import { fadeIn, fadeOut } from './animations';

@Component({
  selector: 'tekus-subscribers-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss'],
  animations: [fadeIn, fadeOut]
})
export class SideMenuComponent {
  @Input('isOpen') isOpen: boolean = false;
  @Output('isChanged') isChanged = new EventEmitter<boolean>()
  constructor() { }

  ngOnInit(): void {
    console.log('here', this.isOpen);
  }

  open() {
    this.isOpen = true
  }
  close() {
    this.isOpen = false
    this.isChanged.emit(this.isOpen)
  }

}
