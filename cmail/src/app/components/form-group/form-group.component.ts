import { Component, OnInit, ElementRef, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'cmail-form-group',
  templateUrl: './form-group.component.html',
  styles: []
})
export class FormGroupComponent implements OnInit {

  textoDaLabel = '';
  idCampo = '';
  @Input() campo = new FormControl();

  constructor(
    private elemento: ElementRef
  ) { }

  ngOnInit() {
    // console.log(this.campo);
    // console.log(this.campo.invalid);

    const input = this.elemento.nativeElement.querySelector('input');
    this.textoDaLabel = input.name.replace(input.name[0], input.name[0].toUpperCase());
    this.idCampo = input.name;
    console.log(input);
  }

}
