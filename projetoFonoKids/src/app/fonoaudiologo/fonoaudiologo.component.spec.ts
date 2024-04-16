import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FonoaudiologoComponent } from './fonoaudiologo.component';

describe('FonoaudiologoComponent', () => {
  let component: FonoaudiologoComponent;
  let fixture: ComponentFixture<FonoaudiologoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FonoaudiologoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FonoaudiologoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
