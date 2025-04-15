import { Component } from "@angular/core";
import { BaseControlComponent } from '../base/base-component';
import { InputElement } from './structure/input.element';
import { FormControl } from "@angular/forms";

@Component({
    standalone:false,
    selector: 'stk-input',
    templateUrl: './input.component.html',
    styleUrls: ['./input.component.scss']
})
export class STKInputComponent extends BaseControlComponent<InputElement> {
  getControl(){
    if(this.element){
      return this.element.control;
    }
    return new FormControl('');
  }
}
