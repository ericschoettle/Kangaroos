import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

import { RooService } from '../roo.service';
import { Roo } from '../roo.model';
import { routing } from '../app.routing';

@Component({
  selector: 'app-jill',
  templateUrl: './jill.component.html',
  styleUrls: ['./jill.component.css'],
  providers: [RooService]
})
export class JillComponent implements OnInit {
  roo: Roo = null;
  constructor(private router: Router, private rooService: RooService) { }

  ngOnInit() {
    this.roo = this.rooService.getActiveRoo();
  }

}
