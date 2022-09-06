import { Component, Input, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.scss'],
})
export class EncabezadoComponent implements OnInit {

  @Input() titulo= '';
  constructor(private menu: MenuController, private router: Router) { }

  ngOnInit() {}
  abrirmenu(){
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }
  goToPerfil(){
    this.router.navigate(['/perfil']);
  }
}
