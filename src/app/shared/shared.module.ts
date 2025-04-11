import { NgModule } from "@angular/core";
import { STKInputComponent } from "./components/input/input.component";

@NgModule({
  declarations: [
    STKInputComponent,
  ],
  exports: [
    STKInputComponent
  ]
})
export class SharedModule {}
