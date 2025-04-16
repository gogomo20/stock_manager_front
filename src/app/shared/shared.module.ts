import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { STKButtonComponent } from "./components/button/button.component";
import { STKInputComponent } from "./components/input/input.component";
import { STKAlertComponent } from "./components/alert/alert.component";

@NgModule({
  declarations: [
    STKInputComponent,
    STKButtonComponent,
    STKAlertComponent,
  ],
  exports: [
    STKInputComponent,
    STKButtonComponent,
    STKAlertComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
})
export class SharedModule {}
