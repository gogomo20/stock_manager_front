import { NgModule } from "@angular/core";
import { STKInputComponent } from "./components/input/input.component";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { STKButtonComponent } from "./components/button/button.component";

@NgModule({
  declarations: [
    STKInputComponent,
    STKButtonComponent
  ],
  exports: [
    STKInputComponent,
    STKButtonComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class SharedModule {}
