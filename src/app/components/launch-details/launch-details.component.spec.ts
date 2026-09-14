import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { provideStore } from '@ngrx/store';

import { LaunchDetailsComponent } from './launch-details.component';

import { launchReducer } from '../../state/launch.reducer';

describe('Launches', () => {
  let component: LaunchDetailsComponent;
  let fixture: ComponentFixture<LaunchDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LaunchDetailsComponent],
      providers: [provideStore({ launch: launchReducer }), provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(LaunchDetailsComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
