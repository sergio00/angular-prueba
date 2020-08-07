import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponenteBComponent } from './componente-b/componente-b.component';



@NgModule({
  declarations: [ComponenteBComponent],
  imports: [
    CommonModule
  ],
  exports:[ ComponenteBComponent]
})
export class ModuloBModule { }
