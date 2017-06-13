import { Component } from '@angular/core';

import { RooService } from './roo.service';
import { Roo } from './roo.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [RooService]
})

export class AppComponent {
  constructor(private rooService: RooService) { }
  get roo() {
    return this.rooService.getActiveRoo();
  }

  // roo: Roo = null;
  // this.roo = RooService.getActiveRoo();


  // ngOnInit() {
  //   // this.roo = this.rooService.getActiveRoo();
  //   // this.roo = this.rooService.activeRoo;
  // }
}
