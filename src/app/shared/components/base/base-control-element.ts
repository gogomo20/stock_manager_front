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
            this.value = null;
        }
    }
    private _formControl: FormControl = new FormControl();
    private _formGroup?: FormGroup;
    private _validatorMap: Map<string, () => string> = new Map<string, () => string>();
    get value(): T{
        return this._formControl.value;
    }
    set value(value: T | null){
        this._formControl.setValue(value);
    }
    get control(): FormControl{
      return this._formControl;
    }

    setRequired(message: string) {
        this.validators.push(Validators.required);
        this._formControl.setValidators(this.validators);
        this._validatorMap.set('required', () => message);
        return this;
    }
    isRequired(): boolean {
        return this.validators.some(x => x.name === 'required');
    }
    addValidation(validator: ValidatorFn, message: string) {
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
        this._formGroup.addControl(this.name, this._formControl);
        return this;
    }
    showError(): boolean {
        return !!this.control.errors && this.control.touched;
    }
    getErrorMessage(): string {
        if(!this.control.errors){
            return '';
        }
        var error = Object.keys(this.control.errors)[0];
        const message = this._validatorMap.get(error);
        return !!message ? message() : error;
    }
}
