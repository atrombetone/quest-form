import { Component, OnInit, Input } from '@angular/core';
import { RespostaModel } from 'src/app/models/resposta.model';

@Component({
  selector: 'app-resposta',
  templateUrl: './resposta.component.html',
  styleUrls: ['./resposta.component.css']
})
export class RespostaComponent implements OnInit {

  @Input()
  tipo: string;

  @Input()
  resposta: RespostaModel;

  dados: string;
  
  constructor() { }

  ngOnInit() {
    this.dados = this.tipo + " - " + JSON.stringify(this.resposta);
  }

  isRadio() {
    return this.tipo === "radio";
  }

  isCheck() {
    return this.tipo === "check";
  }

  isText() {
    return this.tipo === "text";
  }

}
