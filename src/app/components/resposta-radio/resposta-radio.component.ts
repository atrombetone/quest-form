import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { RespostaModel } from 'src/app/models/resposta.model';

@Component({
  selector: 'app-resposta-radio',
  templateUrl: './resposta-radio.component.html',
  styleUrls: ['./resposta-radio.component.css']
})
export class RespostaRadioComponent implements OnInit {

  @Input()
  indiceResposta: number;

  @Input()
  resposta: RespostaModel;

  @Output()
  setarResposta = new EventEmitter();
  
  constructor() { }

  ngOnInit() {
  }

  devolverResposta() {
    this.setarResposta.emit({index: this.indiceResposta, resposta: this.resposta});
  }
}
