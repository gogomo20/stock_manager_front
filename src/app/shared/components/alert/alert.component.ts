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
  params?: IAlert;
  timer?: number;
  constructor(
    private readonly alertService: AlertService
  ) {}
  ngOnInit(): void {
    this.alertService.getAlert().subscribe((params: IAlert) => {
      this.params = params;
      this.resetTimer();
    });
  }

  resetTimer() {
    if(!!this.timer)
      window.clearTimeout(this.timer);
    this.timer = window.setTimeout(() => this.params = undefined, 3000);
  }
}
