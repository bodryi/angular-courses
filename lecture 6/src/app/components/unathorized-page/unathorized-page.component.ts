import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-unauth-page',
    template: `
     <h1 style="text-align: center; margin-top: 30px;">Unauthorized</h1>
    `
})
export class UnauthorizedPageComponent implements OnInit {
    constructor() { }

    ngOnInit() { }

}
