import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'tekus-subscribers-loading-shade',
  templateUrl: './loading-shade.component.html',
  styleUrls: ['./loading-shade.component.scss']
})
export class LoadingShadeomponent implements OnInit {
  @Input() loading: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }


}
