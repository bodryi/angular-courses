// import { NgModule } from '@angular/core';
//
// import { Component } from './.component';
//
// @NgModule({
//     imports: [],
//     exports: [],
//     declarations: [Component],
//     providers: [],
// })
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";

@NgModule({
	imports: [BrowserModule],
	exports: [AppComponent],
	declarations: [AppComponent],
	providers: [],
	bootstrap: [AppComponent]
          })
export class AppModule { }
