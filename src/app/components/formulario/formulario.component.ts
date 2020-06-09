import { Component, OnInit, Input } from '@angular/core';
import { FormularioModel } from 'src/app/models/formulario.model';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  @Input()
  formulario: FormularioModel;

  respostas: string;
  constructor() { }

  ngOnInit() {
    
  }

  verResposta() {
    this.respostas = JSON.stringify(this.formulario);
  }

}
