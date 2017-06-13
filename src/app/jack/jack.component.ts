import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

import { RooService } from '../roo.service';
import { Roo } from '../roo.model';
import { routing } from '../app.routing';

@Component({
  selector: 'app-jack',
  templateUrl: './jack.component.html',
  styleUrls: ['./jack.component.css'],
  providers: [RooService]
})
export class JackComponent implements OnInit {
  roo: Roo = null;
  constructor(private router: Router, private rooService: RooService) { }

  ngOnInit() {
    this.roo = this.rooService.getActiveRoo();
  }

}
