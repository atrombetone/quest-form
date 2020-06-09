import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RespostaCheckComponent } from './resposta-check.component';

describe('RespostaCheckComponent', () => {
  let component: RespostaCheckComponent;
  let fixture: ComponentFixture<RespostaCheckComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RespostaCheckComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RespostaCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
