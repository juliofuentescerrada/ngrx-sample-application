import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material';

@Injectable()
export class ToastService {

  constructor(private snackBar: MatSnackBar) { }

  show(message: string) {
    this.snackBar.open(message, 'OK', { duration: 2000 });
  }

}
