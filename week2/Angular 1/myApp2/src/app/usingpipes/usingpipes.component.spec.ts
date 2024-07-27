import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsingpipesComponent } from './usingpipes.component';

describe('UsingpipesComponent', () => {
  let component: UsingpipesComponent;
  let fixture: ComponentFixture<UsingpipesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UsingpipesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsingpipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
