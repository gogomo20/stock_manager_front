import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";
import IAlert from "../components/alert/interfaces/alert.interface";
import { EAlertType } from "../components/alert/enums/alert.enum";

@Injectable({
  providedIn: 'root'
})
export class  AlertService {
  private _alert = new Subject<IAlert>();
  private setAlert(params: IAlert){
    this._alert.next(params);
  }
  getAlert():Observable<IAlert>{
    return this._alert.asObservable();
  }

  alertError(message:string){
    this.setAlert({type: EAlertType.ERROR, message, icon: 'error'});
  }
  alertSuccess(message: string){
    this.setAlert({type: EAlertType.SUCCESS, message, icon: 'check_circle'});
  }
  alertWarning(message: string){
    this.setAlert({type: EAlertType.WARNING, message, icon: 'warning'});
  }
  alertInfo(message: string){
    this.setAlert({type: EAlertType.INFO, message, icon: 'info'});
  }
  alertNotFound(message: string){
    this.setAlert({type: EAlertType.NOT_FOUND, message, icon: 'help'});
  }
}

