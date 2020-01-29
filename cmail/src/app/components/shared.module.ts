import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FormFieldDirective } from './form-group/form-field.directive';
import { FormGroupComponent } from './form-group/form-group.component';
import { RouterModule } from '@angular/router';
import { CmailListItemComponent } from './cmail-list-item/cmail-list-item.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FormFieldDirective,
    FormGroupComponent,
    CmailListItemComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    FormFieldDirective,
    FormGroupComponent,
    CmailListItemComponent
  ]
})
export class SharedModule { }
