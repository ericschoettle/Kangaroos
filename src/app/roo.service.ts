import { Injectable } from '@angular/core';

import { Roo } from './roo.model';
import { KANGAROOS } from './roo-characters';

@Injectable()
export class RooService {

  constructor() { }

  getRoos() {
    return KANGAROOS
  }

  getActiveRoo(){
    for (var i = 0; i <= KANGAROOS.length -1; i++) {
      if (KANGAROOS[i].activeCharacter === true) {
        return KANGAROOS[i];
      }
    }
  }

  setRoo(roo) {
    roo.activeCharacter = true;
  }
}
