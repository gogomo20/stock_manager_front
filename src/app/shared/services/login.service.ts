import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import ILogin from "../interfaces/login.interface";
import IGenericResponse from "../interfaces/generic-response.interface";
import IAuthResponse from "../interfaces/auth-response.interface";
import { environment } from "../../../environments/environment.development";

@Injectable({
    providedIn: 'root'
})
export class LoginService {
    constructor(
        private readonly httpClient: HttpClient
    ){}
    public logIn(params: ILogin) {
        return this.httpClient.post<IGenericResponse<IAuthResponse>>(`${environment.API_URL}/api/v1/auth/login`, params);
    }
}