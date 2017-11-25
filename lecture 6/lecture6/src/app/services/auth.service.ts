import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

    constructor() { }

    isAuth(): boolean {
      return true;
    }

}
