import { Component, Input } from "@angular/core";
import { ButtonElement } from "./structure/button.element";

@Component({
    selector: 'stk-button',
    templateUrl: './button.component.html',
    styleUrls: ['./button.component.scss'],
    standalone: false
})
export class STKButtonComponent {
    @Input() button: ButtonElement = new ButtonElement('Button', 'success', () => {});
}