import { Component, OnInit, Input } from '@angular/core';
import { AssuntoModel } from 'src/app/models/assunto.model';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css']
})
export class AccordionComponent implements OnInit {

  @Input()
  assunto: AssuntoModel;

  constructor() { }

  ngOnInit() {

  }

  respondeuQuestao($event) {
    if(this.assunto.questoes[$event.indice + 1])
      this.assunto.questoes[$event.indice + 1].visivel = true;
  }
}
