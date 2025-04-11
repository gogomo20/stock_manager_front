import { Component } from "@angular/core";
import { BaseControlComponent } from '../base/base-component';
import { InputElement } from './structure/input.element';

@Component({
  standalone:false,
    selector: 'stk-input',
    templateUrl: './input.component.html',
    styleUrls: ['./input.component.html']
})
export class STKInputComponent extends BaseControlComponent<InputElement> {
}
