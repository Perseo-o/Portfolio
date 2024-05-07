import { Component,  OnInit } from '@angular/core';

import { Router } from '@angular/router';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements  OnInit {

  constructor(
    protected router: Router,
  ) {}

  ngOnInit(): void {}

  goHome() {
    this.router.navigate(['Portfolio/Home']);
  }

  goToContact(){
    this.router.navigate(['Portfolio/Contact']);
  }

  
}