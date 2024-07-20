import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSynonymComponent } from './create-synonym.component';

describe('CreateSynonymComponent', () => {
  let component: CreateSynonymComponent;
  let fixture: ComponentFixture<CreateSynonymComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateSynonymComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateSynonymComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
