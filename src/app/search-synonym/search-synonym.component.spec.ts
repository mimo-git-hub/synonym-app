import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchSynonymComponent } from './search-synonym.component';

describe('SearchSynonymComponent', () => {
  let component: SearchSynonymComponent;
  let fixture: ComponentFixture<SearchSynonymComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchSynonymComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchSynonymComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
