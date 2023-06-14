import { AppComponent } from './app.component';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { NavBarComponent } from './common/nav-bar/nav-bar.component';

describe('AppComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent],
      imports: [RouterTestingModule, NavBarComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeDefined();
  });

  it('should match the snapshot', () => {
    const fixture = TestBed.createComponent(AppComponent);
    expect(fixture).toMatchSnapshot();
  });
});
