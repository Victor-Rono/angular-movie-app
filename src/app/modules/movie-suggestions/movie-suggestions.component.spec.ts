import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieSuggestionsComponent } from './movie-suggestions.component';

describe('MovieSuggestionsComponent', () => {
  let component: MovieSuggestionsComponent;
  let fixture: ComponentFixture<MovieSuggestionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MovieSuggestionsComponent]
    });
    fixture = TestBed.createComponent(MovieSuggestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
