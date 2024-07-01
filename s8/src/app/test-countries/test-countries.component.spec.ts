import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestCountriesComponent } from './test-countries.component';

describe('TestCountriesComponent', () => {
  let component: TestCountriesComponent;
  let fixture: ComponentFixture<TestCountriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TestCountriesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestCountriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
