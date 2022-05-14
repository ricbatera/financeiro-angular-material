import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalhesSaidasComponent } from './detalhes-saidas.component';

describe('DetalhesSaidasComponent', () => {
  let component: DetalhesSaidasComponent;
  let fixture: ComponentFixture<DetalhesSaidasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalhesSaidasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalhesSaidasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
