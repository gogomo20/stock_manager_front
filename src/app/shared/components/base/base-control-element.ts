import { FormControl, FormGroup, ValidatorFn, Validators } from "@angular/forms";

export class BaseControlElement<T> {
    label: string;
    name: string;
    validators: ValidatorFn[] = [];

    constructor(label: string, name: string, validators?: ValidatorFn[]){
        this.label = label;
        this.name = name;
        if(validators){
            this.validators = validators;
            this._formControl.setValidators(this.validators);
        }
    }
    private _formControl: FormControl = new FormControl({});
    private _formGroup?: FormGroup;
    private _validatorMap: Map<string, (prop: any) => string> = new Map<string, (prop: any) => string>();
    get value(): T{
        return this._formControl.value;
    }
    set value(value: T){
        this._formControl.setValue(value);
    }
    get control(): FormControl{
      return this._formControl;
    }

    setRequired(message: string): BaseControlElement<T>{
        this.validators.push(Validators.required);
        this._formControl.setValidators(this.validators);
        this._validatorMap.set('required', () => message);
        return this;
    }
    addValidation(validator: ValidatorFn, message: string): BaseControlElement<T>{
      this.validators.push(validator);
      this._formControl.setValidators(this.validators);
      return this;
    }
    addOnForm(): BaseControlElement<T>{
        this._formGroup?.addControl(this.name, this._formControl);
        return this;
    }
    setFormGroup(formGroup: FormGroup): BaseControlElement<T>{
        this._formGroup = formGroup;
        return this;
    }
}
