import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RespostaTextoComponent } from './resposta-texto.component';

describe('RespostaTextoComponent', () => {
  let component: RespostaTextoComponent;
  let fixture: ComponentFixture<RespostaTextoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RespostaTextoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RespostaTextoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
