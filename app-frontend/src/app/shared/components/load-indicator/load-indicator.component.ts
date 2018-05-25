import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-load-indicator',
  templateUrl: './load-indicator.component.html',
  styleUrls: ['./load-indicator.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoadIndicatorComponent implements OnInit {

  @Input() visible: boolean;

  constructor() { }

  ngOnInit() {
  }

}
