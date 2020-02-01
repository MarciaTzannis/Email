import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DadosEmailModel } from 'src/app/models/dados.email';

@Component({
  selector: 'cmail-list-item',
  templateUrl: './cmail-list-item.component.html',
  styleUrls: ['./cmail-list-item.component.css']
})

export class CmailListItemComponent implements OnInit {

  @Input() dadosEmail: DadosEmailModel;
  @Output('eventoVaiRemover') vaiRemover = new EventEmitter();

  constructor() {}

  ngOnInit() {
  }

  removeEmail(click: Event) {
    if(confirm('Tem certeza?')) {
      this.vaiRemover.emit('remove');
    }
  }

}
