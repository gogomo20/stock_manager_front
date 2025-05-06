import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";
import IAlert from "../components/alert/interfaces/alert.interface";
import { EAlertType } from "../components/alert/enums/alert.enum";

@Injectable({
  providedIn: 'root'
})
export class  AlertService {
  private _alert = new Subject<IAlert>();
  private _defaultType:number = 0;
  private setAlert(params: IAlert){
    this._alert.next(params);
  }
  getAlert():Observable<IAlert>{
    return this._alert.asObservable();
  }

  clearIds() {
    this._defaultType = 0;
  }

  alertError(message:string){
    this.setAlert({id: `alert-${this._defaultType}`, type: EAlertType.ERROR, message, icon: 'error'});
    this._defaultType++;
  }
  alertSuccess(message: string){
    this.setAlert({id: `alert-${this._defaultType}`,type: EAlertType.SUCCESS, message, icon: 'check_circle'});
    this._defaultType++;
  }
  alertWarning(message: string){
    this.setAlert({id: `alert-${this._defaultType}`,type: EAlertType.WARNING, message, icon: 'warning'});
    this._defaultType++;
  }
  alertInfo(message: string){
    this.setAlert({id: `alert-${this._defaultType}`,type: EAlertType.INFO, message, icon: 'info'});
    this._defaultType++;
  }
  alertNotFound(message: string){
    this.setAlert({id: `alert-${this._defaultType}`,type: EAlertType.NOT_FOUND, message, icon: 'help'});
    this._defaultType++;
  }
}

