import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { NotificationInterface } from '../../interfaces/notification.interface';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(
    private toastrService: ToastrService,
  ) {
    this.toastrService.toastrConfig.timeOut = 1300;
   }

  showSuccess(notification: NotificationInterface) {
    if (!notification.title) notification.title = 'Success'
    this.toastrService.success(notification.message, notification.title,);
  }

  showError(notification: NotificationInterface) {
    if (!notification.title) notification.title = 'Error'
    this.toastrService.error(notification.message, notification.title);
  }

  showWarning(notification: NotificationInterface) {
    if (!notification.title) notification.title = 'Warning'

    this.toastrService.warning(notification.message, notification.title);
  }

  showInfo(notification: NotificationInterface) {
    if (!notification.title) notification.title = 'Alert'

    this.toastrService.info(notification.message, notification.title);
  }
}
