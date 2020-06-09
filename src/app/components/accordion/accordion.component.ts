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

}
