import { Component, OnInit } from '@angular/core';
import { QuestionsService } from './services/questions.service';
import { FormularioModel } from './models/formulario.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app-exemplo';

  dados: FormularioModel;
  constructor (private service: QuestionsService) {}

  ngOnInit() {
    this.service.getFormulario().subscribe(data => {
      this.dados = data;
    })
  }


}
