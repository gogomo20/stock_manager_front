import { ValidatorFn } from "@angular/forms";
import { InputElement } from "./input.element";

export class InputElementFactory {
  static create(label: string, name: string, placeholder: string, validators?: ValidatorFn[]): InputElement {
    return new InputElement(label, name, placeholder, validators);
  }
  static createPassword(label: string, name: string, placeholder: string, validators?: ValidatorFn[]): InputElement {
    const element = new InputElement(label, name, placeholder, validators);
    element.type = 'password';
    return element;
  }
}
