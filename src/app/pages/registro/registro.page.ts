import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {
  usuario={
    username:'',
    password:'',
    pass: '',
  };
  constructor(private router: Router, private toastCtrl: ToastController, private alertCtrl: AlertController) { }

  ngOnInit() {
  }

  async onSubmit(){
    if(this.usuario.password === this.usuario.pass){
      localStorage.setItem('usr', JSON.stringify(this.usuario));
      const toast = await this.toastCtrl.create({
        message: 'Bienvenido '+this.usuario.username+'!',
        duration: 3000,
        position: 'bottom',
      });
      await toast.present();
      this.router.navigate(['/home']);
    }else if(this.usuario.password !== this.usuario.pass){
      const alerta  = await this.alertCtrl.create({
        header: 'Alerta',
        message: 'Ambas contraseñas deben coincidir',
      });await alerta.present();
    }
  }

}
