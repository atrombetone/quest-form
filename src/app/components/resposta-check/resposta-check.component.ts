import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { RespostaModel } from 'src/app/models/resposta.model';

@Component({
  selector: 'app-resposta-check',
  templateUrl: './resposta-check.component.html',
  styleUrls: ['./resposta-check.component.css']
})
export class RespostaCheckComponent implements OnInit {

  @Input()
  indiceResposta: number;

  @Input()
  resposta: RespostaModel;

  @Output()
  setarResposta = new EventEmitter();
  
  valor = false;

  constructor() { }

  ngOnInit() {
  }

  devolverResposta() {
    console.log(this.valor);
    this.setarResposta.emit({index: this.indiceResposta, resposta: this.resposta, isChecked: !this.valor});
  }

}
