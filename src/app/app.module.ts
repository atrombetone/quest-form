import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { AccordionComponent } from './components/accordion/accordion.component';
import { PerguntaComponent } from './components/pergunta/pergunta.component';
import { RespostaCheckComponent } from './components/resposta-check/resposta-check.component';
import { RespostaRadioComponent } from './components/resposta-radio/resposta-radio.component';
import { RespostaTextoComponent } from './components/resposta-texto/resposta-texto.component';
import { RespostaComponent } from './components/resposta/resposta.component';

@NgModule({
  declarations: [
    AppComponent,
    FormularioComponent,
    AccordionComponent,
    PerguntaComponent,
    RespostaCheckComponent,
    RespostaRadioComponent,
    RespostaTextoComponent,
    RespostaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
