import { ValidatorFn } from "@angular/forms";
import { BaseControlElement } from "../../base/base-control-element";

export class InputElement extends BaseControlElement<string>{
  placeHolder: string = "placeholder";
  type: 'text' | 'password' = 'text';
  constructor(label: string, name: string, placeholder: string,validators?: ValidatorFn[]){
    super(label, name, validators)
    this.placeHolder = placeholder;
  }

}

