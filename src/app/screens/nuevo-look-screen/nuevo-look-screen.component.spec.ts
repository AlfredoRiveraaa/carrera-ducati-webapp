import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoLookScreenComponent } from './nuevo-look-screen.component';

describe('NuevoLookScreenComponent', () => {
  let component: NuevoLookScreenComponent;
  let fixture: ComponentFixture<NuevoLookScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NuevoLookScreenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NuevoLookScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
