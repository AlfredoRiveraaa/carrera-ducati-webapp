import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TerminosYCondicionesScreenComponent } from './terminos-y-condiciones-screen.component';

describe('TerminosYCondicionesScreenComponent', () => {
  let component: TerminosYCondicionesScreenComponent;
  let fixture: ComponentFixture<TerminosYCondicionesScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TerminosYCondicionesScreenComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TerminosYCondicionesScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
