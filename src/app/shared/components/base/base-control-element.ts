import { FormControl, FormGroup, ValidatorFn } from "@angular/forms";

export class BaseControlElement<T> {
    label: string;
    name: string;
    validators: ValidatorFn[] = [];
    constructor(label: string, name: string, validators?: ValidatorFn[]){
        this.label = label;
        this.name = name;
        if(validators){
            this.validators = validators;
        }
    }
    private _formControl: FormControl = new FormControl({});
    private _formGroup?: FormGroup;
    get value(): T{
        return this._formControl.value;
    }
    set value(value: T){
        this._formControl.setValue(value);
    }

    setRequired(message: string): BaseControlElement<T>{
        
        return this;
    }

}