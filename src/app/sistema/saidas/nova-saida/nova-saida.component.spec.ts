import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NovaSaidaComponent } from './nova-saida.component';

describe('NovaSaidaComponent', () => {
  let component: NovaSaidaComponent;
  let fixture: ComponentFixture<NovaSaidaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NovaSaidaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NovaSaidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
