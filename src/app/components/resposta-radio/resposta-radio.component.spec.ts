import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RespostaRadioComponent } from './resposta-radio.component';

describe('RespostaRadioComponent', () => {
  let component: RespostaRadioComponent;
  let fixture: ComponentFixture<RespostaRadioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RespostaRadioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RespostaRadioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
