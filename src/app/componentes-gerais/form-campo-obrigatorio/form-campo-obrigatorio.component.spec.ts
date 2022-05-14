import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCampoObrigatorioComponent } from './form-campo-obrigatorio.component';

describe('FormCampoObrigatorioComponent', () => {
  let component: FormCampoObrigatorioComponent;
  let fixture: ComponentFixture<FormCampoObrigatorioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormCampoObrigatorioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormCampoObrigatorioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
