import { LoginService } from './../../services/login.service';
import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { SharedModule } from "../../shared.module";
import { InputElementFactory } from "../../components/input/structure/input.factory";
import { InputElement } from "../../components/input/structure/input.element";
import { FormGroup } from "@angular/forms";
import { ButtonElement } from "../../components/button/structure/button.element";
import { ButtonFactory } from "../../components/button/structure/button.factory";
import ILogin from '../../interfaces/login.interface';
import { AlertService } from '../../services/alert.service';
import { EAlertType } from '../../components/alert/enums/alert.enum';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
    selector: 'stk-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    imports: [CommonModule,SharedModule]
})
export class STKLoginComponent implements OnInit {
  username:InputElement = InputElementFactory.create('Usuário', 'username', 'Por favor insira seu usuário').setRequired('Campo obrigatório');
  password:InputElement = InputElementFactory.createPassword('Senha', 'password', 'Por favor insira sua senha').setRequired('Campo obrigatório');
  buttonSend: ButtonElement = ButtonFactory.createButtonSuccess('Entrar', this.onClickSend.bind(this));
  form = new FormGroup({});
  constructor(
    private readonly loginService: LoginService,
    private readonly alertService: AlertService,
  ){
  }
  ngOnInit(): void {

    this.form.valueChanges.subscribe(value => {
      if(this.form.invalid || this.form.disabled || !this.form.touched){
        this.buttonSend.disable();
        return
      }
      this.buttonSend.enable();
    })
  }

  onClickSend(){
    this.loginService.logIn(this.form.getRawValue()).subscribe(response => {
      if(response.success){
        this.alertService.alertSuccess(response.message);
        return;
      }
      response.errors.forEach((message: string) => {
        this.alertService.alertError(message);
      })
    }, (error:HttpErrorResponse) => {
      error.error.errors.forEach((message: string) => {
        this.alertService.alertError(message);
      })
    });
  }
}
