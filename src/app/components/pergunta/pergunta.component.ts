import { Component, OnInit, Input } from '@angular/core';
import { QuestaoModel } from 'src/app/models/questao.model';

@Component({
  selector: 'app-pergunta',
  templateUrl: './pergunta.component.html',
  styleUrls: ['./pergunta.component.css']
})
export class PerguntaComponent implements OnInit {

  @Input()
  pergunta: QuestaoModel;

  dados: string;
  constructor() { }

  ngOnInit() {
    this.dados = JSON.stringify(this.pergunta);
  }

}
