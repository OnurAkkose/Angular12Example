import { Injectable } from '@angular/core';
declare let alertify: any;
@Injectable()
export class AlertifyService {
  constructor() {}
  success(message: string) {
    alertify.success(message);
  }
  invalid_username(message: string){
    alertify.error(message);
  }
  error(message: string) {
    alertify.error(message);
  }
  warning(message: string) {
    alertify.warning(message);
  }
}
