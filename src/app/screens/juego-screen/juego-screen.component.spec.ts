import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JuegoScreenComponent } from './juego-screen.component';

describe('JuegoScreenComponent', () => {
  let component: JuegoScreenComponent;
  let fixture: ComponentFixture<JuegoScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [JuegoScreenComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JuegoScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
