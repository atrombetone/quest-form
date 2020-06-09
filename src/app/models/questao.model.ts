import { RespostaModel } from './resposta.model';

export interface QuestaoModel {
    questao: string;
    questaoType: string;
    respostas: RespostaModel[];
    respostaSelecionada: number[];
    textoResposta: string;
    visivel: boolean;
}