import { Component, OnInit } from "@angular/core";
import IAlert from "./interfaces/alert.interface";
import { AlertService } from "../../services/alert.service";

@Component({
  selector: 'stk-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss'],
  standalone: false
})
export class STKAlertComponent implements OnInit {
  alerts: IAlert[] = [];
  constructor(
    private readonly alertService: AlertService
  ) {}
  ngOnInit(): void {
    this.alertService.getAlert().subscribe((params: IAlert) => {
      this.alerts.push(params);
      setTimeout(() => {
        this.alerts = this.alerts.filter(alert => alert !== params);
        if(this.alerts.length === 0){
          this.alertService.clearIds();
        }
      }, 3000);
    });
  }

}
