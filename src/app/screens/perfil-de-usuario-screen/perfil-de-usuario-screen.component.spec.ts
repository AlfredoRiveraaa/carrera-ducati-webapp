import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilDeUsuarioScreenComponent } from './perfil-de-usuario-screen.component';

describe('PerfilDeUsuarioScreenComponent', () => {
  let component: PerfilDeUsuarioScreenComponent;
  let fixture: ComponentFixture<PerfilDeUsuarioScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PerfilDeUsuarioScreenComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PerfilDeUsuarioScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
