import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmallCardCharacterComponent } from './small-card-character.component';

describe('SmallCardCharacterComponent', () => {
  let component: SmallCardCharacterComponent;
  let fixture: ComponentFixture<SmallCardCharacterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmallCardCharacterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SmallCardCharacterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
