import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { SharedModule } from "../../shared.module";
import { InputElementFactory } from "../../components/input/structure/input.factory";
import { InputElement } from "../../components/input/structure/input.element";
import { FormGroup } from "@angular/forms";

@Component({
    selector: 'stk-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    imports: [CommonModule,SharedModule]
})
export class STKLoginComponent implements OnInit {
  username:InputElement = InputElementFactory.create('Usuário', 'username', 'Por favor insira seu usuário').setRequired('Campo obrigatório');
  password:InputElement = InputElementFactory.createPassword('Senha', 'password', 'Por favor insira sua senha').setRequired('Campo obrigatório');
  
  form = new FormGroup({});
  constructor(){
  }

  ngOnInit(): void {

  }
}
