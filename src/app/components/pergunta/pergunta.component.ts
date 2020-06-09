import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { QuestaoModel } from 'src/app/models/questao.model';

@Component({
  selector: 'app-pergunta',
  templateUrl: './pergunta.component.html',
  styleUrls: ['./pergunta.component.css']
})
export class PerguntaComponent implements OnInit {

  @Input()
  indicePergunta: number;

  @Input()
  pergunta: QuestaoModel;

  @Output()
  perguntaRespondida = new EventEmitter();

  dados: string;
  constructor() { }

  ngOnInit() {
    
  }

  setarResposta($event) {
    if(this.pergunta.questaoType == "check") {
      const resp = $event.isChecked ? $event.resposta.id: 0;
      console.log(resp);
      console.log($event.index);
      this.pergunta.respostaSelecionada[$event.index] = resp;
    } else {
      this.pergunta.respostaSelecionada[0] = $event.resposta.id;
      if(this.pergunta.questaoType == "text") {
        this.pergunta.textoResposta = $event.texto;
      }
    }

    this.dados = JSON.stringify(this.pergunta);
    this.perguntaRespondida.emit({indice: this.indicePergunta});
    
  }
}
