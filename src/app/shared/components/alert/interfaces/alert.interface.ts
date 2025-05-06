import { EAlertType } from "../enums/alert.enum";

export default interface IAlert {
  id: string
  icon?: string;
  message: string;
  type: EAlertType;
}
