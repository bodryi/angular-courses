import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {DebugElement} from '@angular/core';
import {Store, StoreModule} from '@ngrx/store';
import * as fromRoot from '../../store/reducers/reducers';
import {By} from '@angular/platform-browser';
import {ResetComponent} from './reset.component';
import {DecreaseValue, IncreaseValue} from '../../store/actions/counter';

describe('Components: ResetComponent', () => {
  let component: ResetComponent;
  let fixture: ComponentFixture<ResetComponent>;
  let store: Store<fromRoot.State>;
  let minElement: DebugElement;
  let maxElement: DebugElement;
  let resetButtonElement: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [StoreModule.forRoot({
        ...fromRoot.reducers,
      })],
      declarations: [ResetComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResetComponent);
    component = fixture.componentInstance;

    store = TestBed.get(Store);
    minElement = fixture.debugElement.query(By.css('.min'));
    maxElement = fixture.debugElement.query(By.css('.max'));
    resetButtonElement = fixture.debugElement.query(By.css('.reset-button'));

    spyOn(store, 'dispatch').and.callThrough();
  });

  it('should create the component', async(() => {
    expect(component).toBeTruthy();
  }));

  it('store to be defined', async(() => {
    expect(store).toBeDefined();
  }));

  it('min$ to be defiend', async(() => {
    component.ngOnInit();
    fixture.detectChanges();
    expect(component.min$).toBeDefined();
    component.min$.subscribe(value => expect(value).toBeDefined());
  }));

  it('max$ to be defiend', async(() => {
    component.ngOnInit();
    fixture.detectChanges();
    expect(component.max$).toBeDefined();
    component.max$.subscribe(value => expect(value).toBeDefined());
  }));

  it('min$ to be rendered in template', async(() => {
    component.ngOnInit();
    let minValue: number;
    component.min$.subscribe(value => minValue = value);
    fixture.detectChanges();
    expect(minElement.nativeElement.innerHTML).toContain(minValue);
  }));

  it('max$ to be rendered in template', async(() => {
    component.ngOnInit();
    let maxValue: number;
    component.max$.subscribe(value => maxValue = value);
    fixture.detectChanges();
    expect(maxElement.nativeElement.innerHTML).toContain(maxValue);
  }));

  it('should reset counter value', async(() => {
    component.ngOnInit();
    let counterValue: number;
    store.select(fromRoot.getValue).subscribe(value => counterValue = value);
    expect(counterValue).toBe(0);
    store.dispatch(new IncreaseValue());
    expect(counterValue).toBe(1);
    fixture.detectChanges();
    component.reset();
    expect(counterValue).toBe(0);
  }));

  it('should reset counter value with button click', async(() => {
    component.ngOnInit();
    let counterValue: number;
    store.select(fromRoot.getValue).subscribe(value => counterValue = value);
    expect(counterValue).toBe(0);
    store.dispatch(new IncreaseValue());
    expect(counterValue).toBe(1);
    fixture.detectChanges();
    resetButtonElement.triggerEventHandler('click', null);
    expect(counterValue).toBe(0);
  }));

  it('should remember max after reset', async(() => {
    component.ngOnInit();
    let maxValue: number;
    component.max$.subscribe(value => maxValue = value);
    let counterValue: number;
    store.select(fromRoot.getValue).subscribe(value => counterValue = value);
    expect(counterValue).toBe(0);
    store.dispatch(new IncreaseValue());
    store.dispatch(new IncreaseValue());
    expect(counterValue).toBe(2);
    fixture.detectChanges();
    component.reset();
    expect(counterValue).toBe(0);
    expect(maxValue).toBe(2);
    expect(maxElement.nativeElement.innerHTML).toContain(maxValue);
  }));

  it('should remember min after reset', async(() => {
    component.ngOnInit();
    let minValue: number;
    component.min$.subscribe(value => minValue = value);
    let counterValue: number;
    store.select(fromRoot.getValue).subscribe(value => counterValue = value);
    expect(counterValue).toBe(0);
    store.dispatch(new DecreaseValue());
    store.dispatch(new DecreaseValue());
    expect(counterValue).toBe(-2);
    fixture.detectChanges();
    component.reset();
    expect(counterValue).toBe(0);
    expect(minValue).toBe(-2);
    expect(minElement.nativeElement.innerHTML).toContain(minValue);
  }));
});
