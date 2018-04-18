import {Injectable} from '@angular/core';

@Injectable()
export class DumbService {
  generateTitleForApp(): string {
    return 'Ngrx/store demo';
  }
}
