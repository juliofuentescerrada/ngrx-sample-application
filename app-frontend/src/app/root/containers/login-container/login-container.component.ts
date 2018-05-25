import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ProductsClient } from '@core/api/swagger';

@Component({
  selector: 'app-login-container',
  templateUrl: './login-container.component.html',
  styleUrls: ['./login-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginContainerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
}
