import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[cmailFormField]'
})
export class FormFieldDirective implements OnInit{

  constructor(
    private campo: ElementRef
  ) { }

  ngOnInit() {
    const campo = this.campo.nativeElement;

    campo.id = campo.name;
    campo.setAttribute('placeholder', ' ');
    campo.classList.add('mdl-textfield__input')
  }

}
