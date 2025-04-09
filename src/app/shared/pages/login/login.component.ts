import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";

@Component({
    selector: 'stk-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    imports: [CommonModule]
})
export class STKLoginComponent {
    title: string = 'ola mundo'
}