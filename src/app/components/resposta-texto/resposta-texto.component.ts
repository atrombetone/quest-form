import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { RespostaModel } from 'src/app/models/resposta.model';

@Component({
  selector: 'app-resposta-texto',
  templateUrl: './resposta-texto.component.html',
  styleUrls: ['./resposta-texto.component.css']
})
export class RespostaTextoComponent implements OnInit {

  @Input()
  indiceResposta: number;

  @Input()
  resposta: RespostaModel;

  @Output()
  setarResposta = new EventEmitter();

  textoResposta: string;
  
  constructor() { }

  ngOnInit() {
  }

  devolverResposta() {
    this.setarResposta.emit({index: this.indiceResposta, resposta: this.resposta, texto: this.textoResposta});
  }

}
