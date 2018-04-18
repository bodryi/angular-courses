import {TestBed, async, ComponentFixture} from '@angular/core/testing';
import { AppComponent } from './app.component';
import {StoreModule} from '@ngrx/store';
import * as fromRoot from './store/reducers/reducers';
import {CounterComponent} from './components/counter/counter.component';
import {ResetComponent} from './components/reset/reset.component';
import {DumbService} from './services/dumb.service';
import {By} from '@angular/platform-browser';
import {DebugElement} from '@angular/core';
describe('Components: AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let titleElement: DebugElement;
  const dumbServiceStub: Partial<DumbService> = {
    generateTitleForApp: () => 'test title'
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [StoreModule.forRoot({
        ...fromRoot.reducers,
      })],
      declarations: [
        AppComponent,
        CounterComponent,
        ResetComponent
      ],
      providers: [ {provide: DumbService, useValue: dumbServiceStub}]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.debugElement.componentInstance;
    titleElement = fixture.debugElement.query(By.css('h1'));
  });

  it('should create the app', async(() => {
    expect(component).toBeTruthy();
  }));

  it('should generate title through the service', async(() => {
    fixture.detectChanges();
    // let dumbService = fixture.debugElement.injector.get(DumbService);
    expect(titleElement.nativeElement.innerHTML).toContain('test title');
  }));
});
