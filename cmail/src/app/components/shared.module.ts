import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FormFieldDirective } from './form-group/form-field.directive';
import { FormGroupComponent } from './form-group/form-group.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    HeaderComponent,
    FormFieldDirective,
    FormGroupComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    FormFieldDirective,
    FormGroupComponent
  ]
})
export class SharedModule { }
