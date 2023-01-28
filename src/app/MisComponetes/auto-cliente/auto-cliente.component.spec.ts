import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoClienteComponent } from './auto-cliente.component';

describe('AutoClienteComponent', () => {
  let component: AutoClienteComponent;
  let fixture: ComponentFixture<AutoClienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AutoClienteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AutoClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
