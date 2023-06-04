import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let appComp: AppComponent;
  beforeEach(() => {
    appComp = new AppComponent();
  });

  fit('should create the app', () => {
    expect(appComp).toBeDefined();
  });
});
