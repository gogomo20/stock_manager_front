import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { SharedModule } from "../../shared.module";
import { InputElementFactory } from "../../components/input/structure/input.factory";
import { InputElement } from "../../components/input/structure/input.element";
import { FormGroup } from "@angular/forms";
import { ButtonElement } from "../../components/button/structure/button.element";
import { ButtonFactory } from "../../components/button/structure/button.factory";

@Component({
    selector: 'stk-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    imports: [CommonModule,SharedModule]
})
export class STKLoginComponent implements OnInit {
  username:InputElement = InputElementFactory.create('Usuário', 'username', 'Por favor insira seu usuário').setRequired('Campo obrigatório');
  password:InputElement = InputElementFactory.createPassword('Senha', 'password', 'Por favor insira sua senha').setRequired('Campo obrigatório');
  buttonSend: ButtonElement = ButtonFactory.createButtonSuccess('Entrar', () => {});
  form = new FormGroup({});
  constructor(){
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
}
