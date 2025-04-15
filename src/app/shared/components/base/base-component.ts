import { Directive, EventEmitter, Injectable, Input, OnInit, Output } from "@angular/core";
import { BaseControlElement } from "./base-control-element";
import { FormGroup } from "@angular/forms";

@Directive()
export class BaseControlComponent<T extends BaseControlElement<any>> implements OnInit{
  @Input() element?: T
  @Output() onChange: EventEmitter<any> = new EventEmitter<any>();
  @Input() formGroup?: FormGroup;
  ngOnInit(): void {
    if(!!this.element && !!this.formGroup){
      this.element.setFormGroup(this.formGroup);
      this.element.control.valueChanges.subscribe(value => {
        this.onChange.emit(value)
      });
    }
  }
}
