import { Injectable } from '@angular/core';
import Swal, { SweetAlertIcon, SweetAlertOptions } from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class SwalService {

  constructor() { }


  show({ title = '', text = '', icon, showCancel = true }: { showCancel: boolean, icon: SweetAlertIcon, title: string, text: string }) {

    let swal: SweetAlertOptions = {
      title,
      text,
      icon,
      allowOutsideClick: false,
      allowEscapeKey: false,
      showCancelButton: showCancel,
      confirmButtonText: showCancel ? '¡Si, Confirmar!' : 'Ok',
      cancelButtonColor: '#d33',
      cancelButtonText: 'Cancelar',

    };
    return Swal.fire(swal)
  }
}

