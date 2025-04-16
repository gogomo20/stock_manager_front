import { EAlertType } from "../enums/alert.enum";

export default interface IAlert {
  icon?: string;
  message: string;
  type: EAlertType;
}
