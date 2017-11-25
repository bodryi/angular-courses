import { Component, OnInit } from '@angular/core';
import {
  ActivatedRoute,
  Router
} from "@angular/router";

@Component({
             selector: 'app-auth-page-2',
             template: `
               <h1 style="text-align: center; margin-top: 30px;">Auth 2</h1>
               <h1 style="text-align: center; margin-top: 30px;" *ngIf="reqId">param from url: {{reqId}}</h1>
               <button style="margin: 0 auto" (click)="goToMain()">Go to main page</button>
             `
           })
export class AuthorizedPage2Component implements OnInit {
  reqId: number = null;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.params
        .subscribe((params) => {
          this.reqId = params['id'];
        });
  }

  goToMain() {
    this.router.navigate(['/']);
  }

}
