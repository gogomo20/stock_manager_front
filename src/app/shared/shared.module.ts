import { NgModule } from "@angular/core";
import { STKInputComponent } from "./components/input/input.component";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    STKInputComponent,
  ],
  exports: [
    STKInputComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class SharedModule {}
