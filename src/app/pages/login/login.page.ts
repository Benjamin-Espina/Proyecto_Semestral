import { Component, OnInit } from '@angular/core';
import { NavigationExtras,Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  usuario={
    username:'',
    password:'',
  };
  constructor(
    private router: Router,
    private alertController: AlertController,
    ){}
  ngOnInit() {
  }
  onSubmit(){
      console.log(this.usuario);
      if(this.usuario.username=='happy' && this.usuario.password=='123'){
        console.log("usuario valido");
        let navigationExtras: NavigationExtras = {
          state: {
            usr: this.usuario
          }
        }
        this.router.navigate(['/home'],navigationExtras);
      }
      else{
        console.log("usuario invalido");
        this.presentAlert();
      }
  }
  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Alert',
      message: 'Usuario no encontrado',
      buttons: ['OK'],
      mode: 'ios',
      backdropDismiss: false,
    });
    await alert.present();
  }
  goToRegistrar(){
    this.router.navigate(['registro']);
  }
}
