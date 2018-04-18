import { ResetComponent } from './components/reset/reset.component';
import { CounterComponent } from './components/counter/counter.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { reducers } from './store/reducers/reducers';
import {DumbService} from './services/dumb.service';


@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    ResetComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot(reducers),
  ],
  providers: [DumbService],
  bootstrap: [AppComponent]
})
export class AppModule { }
