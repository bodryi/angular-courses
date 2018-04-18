import {CounterComponent} from './counter.component';
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {Store, StoreModule} from '@ngrx/store';
import * as fromRoot from '../../store/reducers/reducers';
import {By} from '@angular/platform-browser';
import {DebugElement} from '@angular/core';

describe('Components: CounterComponent', () => {
  let component: CounterComponent;
  let fixture: ComponentFixture<CounterComponent>;
  let store: Store<fromRoot.State>;
  let counterValueElement: DebugElement;
  let plusElement: DebugElement;
  let minusElement: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [StoreModule.forRoot({
        ...fromRoot.reducers,
      })],
      declarations: [CounterComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterComponent);
    component = fixture.componentInstance;

    store = TestBed.get(Store);
    counterValueElement = fixture.debugElement.query(By.css('.current-counter-value'));
    plusElement = fixture.debugElement.query(By.css('.plus'));
    minusElement = fixture.debugElement.query(By.css('.minus'));

    spyOn(store, 'dispatch').and.callThrough();
  });

  it('should create the component', async(() => {
    expect(component).toBeTruthy();
  }));

  it('store to be defined', async(() => {
    expect(store).toBeDefined();
  }));

  it('counterValue$ to be defiend', async(() => {
    fixture.detectChanges();
    expect(component.counterValue$).toBeDefined();
    component.counterValue$.subscribe(value => expect(value).toBeDefined());
  }));

  it('counterValue$ to be rendered in template', async(() => {
    fixture.detectChanges();
    let counterValue: number;
    component.counterValue$.subscribe(value => counterValue = value);
    fixture.detectChanges();
    expect(counterValueElement.nativeElement.innerHTML).toContain(counterValue);
  }));

  it('counterValue$ to be increased by 1', async(() => {
    fixture.detectChanges();
    let counterValue: number;
    component.counterValue$.subscribe(value => counterValue = value);
    expect(counterValue).toBe(0);
    component.increase();
    fixture.detectChanges();
    expect(counterValue).toBe(1);
    expect(counterValueElement.nativeElement.innerHTML).toContain(counterValue);
  }));

  it('counterValue$ to be increased by 1 with button click', async(() => {
    fixture.detectChanges();
    let counterValue: number;
    component.counterValue$.subscribe(value => counterValue = value);
    expect(counterValue).toBe(0);
    plusElement.triggerEventHandler('click', null);
    fixture.detectChanges();
    expect(counterValue).toBe(1);
    expect(counterValueElement.nativeElement.innerHTML).toContain(counterValue);
  }));

  it('counterValue$ to be decreased by 1', async(() => {
    fixture.detectChanges();
    let counterValue: number;
    component.counterValue$.subscribe(value => counterValue = value);
    expect(counterValue).toBe(0);
    component.decrease();
    fixture.detectChanges();
    expect(counterValue).toBe(-1);
    expect(counterValueElement.nativeElement.innerHTML).toContain(counterValue);
  }));

  it('counterValue$ to be decreased by 1 with button click', async(() => {
    fixture.detectChanges();
    let counterValue: number;
    component.counterValue$.subscribe(value => counterValue = value);
    expect(counterValue).toBe(0);
    minusElement.triggerEventHandler('click', null);
    fixture.detectChanges();
    expect(counterValue).toBe(-1);
    expect(counterValueElement.nativeElement.innerHTML).toContain(counterValue);
  }));
});
