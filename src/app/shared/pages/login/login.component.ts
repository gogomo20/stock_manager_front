import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { SharedModule } from "../../shared.module";
import { InputElementFactory } from "../../components/input/structure/input.factory";
import { InputElement } from "../../components/input/structure/input.element";

@Component({
    selector: 'stk-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    imports: [CommonModule,SharedModule]
})
export class STKLoginComponent implements OnInit {
  username: InputElement;
  password: InputElement;
  constructor(){
    this.username = InputElementFactory.create('Usuário', 'username', 'Por favor insira seu usuário').setRequired('Campo obrigatório');
    this.password = InputElementFactory.createPassword('Senha', 'password', 'Por favor insira sua senha').setRequired('Campo obrigatório');
  }

  ngOnInit(): void {

  }
}
