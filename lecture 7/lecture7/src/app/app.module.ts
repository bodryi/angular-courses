import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormatSizePipe } from "./pipes/format-size.pipe";
import { HighlightDirective } from "./directives/highlight.directive";

@NgModule({
  declarations: [
    AppComponent,
    FormatSizePipe,
    HighlightDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
