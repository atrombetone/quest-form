import { QuestaoModel } from './questao.model';

export interface AssuntoModel {
    titulo: string;
    questoes: QuestaoModel[];
}