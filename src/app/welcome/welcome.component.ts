import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

import { RooService } from '../roo.service';
import { Roo } from '../roo.model';
import { routing } from '../app.routing';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
  providers: [RooService]
})

export class WelcomeComponent implements OnInit {
  @Output() rooSelector = new EventEmitter();

  title = "Kanga and Roo"
  roos: Roo[];

  chooseRoo(roo) {
    this.rooService.setRoo(roo);
    this.router.navigate([roo.name]);
  }

  constructor(private router: Router, private rooService: RooService) { }

  ngOnInit() {
    this.roos = this.rooService.getRoos();
  }
}
