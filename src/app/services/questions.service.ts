import { Injectable } from '@angular/core';
import { FormularioModel } from '../models/formulario.model';
import { AssuntoModel } from '../models/assunto.model';
import { QuestaoModel } from '../models/questao.model';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {

  constructor() { }

  getFormulario() {
    const form = {} as FormularioModel;
    form.dados = [];

    form.dados.push({} as AssuntoModel);
    form.dados[0].titulo = "Saude Financeira";
    form.dados[0].questoes = [];
    form.dados[0].questoes.push(
      {
        questao: "Você gosta de Televisão?", 
        questaoType: "radio", 
        respostas: [
          {id: 1, textoResposta: "Sim"},
          {id: 2, textoResposta: "Não"},
        ]
      },
      {
        questao: "Você gosta de cinema?", 
        questaoType: "radio", 
        respostas: [
          {id: 1, textoResposta: "Sim"},
          {id: 2, textoResposta: "Não"},
        ]
      },
      {
        questao: "Selecione os seriados de sua preferencia?", 
        questaoType: "check", 
        respostas: [
          {id: 3, textoResposta: "The Walking Dead"},
          {id: 4, textoResposta: "Heartland"},
          {id: 5, textoResposta: "Friends"},
          {id: 6, textoResposta: "Chaves"},
        ]
      },
      {
        questao: "Com qual personagem você se identifica?", 
        questaoType: "text", 
        respostas: [
          {id: 7, textoResposta: "Digite sua resposta"}
        ]
      }
    );
    form.dados.push({} as AssuntoModel);
    form.dados[1].titulo = "Patrimonio";
    form.dados[1].questoes = [];
    form.dados[1].questoes.push(
      {
        questao: "Você pratica algum Esporte?", 
        questaoType: "radio", 
        respostas: [
          {id: 1, textoResposta: "Sim"},
          {id: 2, textoResposta: "Não"},
        ]
      },
      {
        questao: "Qual destes esporte você tem mais afinidade?", 
        questaoType: "check", 
        respostas: [
          {id: 3, textoResposta: "Hipismo"},
          {id: 4, textoResposta: "Mountain Bike"},
          {id: 5, textoResposta: "Motocross"},
          {id: 6, textoResposta: "Corrida de Rua"},
        ]
      },
      {
        questao: "Qual outro esporte você tem vontade de praticar", 
        questaoType: "text", 
        respostas: [
          {id: 7, textoResposta: "Digite sua resposta"}
        ]
      }
    );

    return of(form);
  }
}
