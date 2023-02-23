import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetaisCharacterComponent } from './detais-character.component';

describe('DetaisCharacterComponent', () => {
  let component: DetaisCharacterComponent;
  let fixture: ComponentFixture<DetaisCharacterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetaisCharacterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetaisCharacterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
