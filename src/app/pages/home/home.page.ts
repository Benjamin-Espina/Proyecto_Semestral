import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private menu:MenuController) { }

  ngOnInit() {
  }
  abrirmenu(){
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }
}
