import { Component,ViewChild  } from '@angular/core';
import { ModalController,IonInfiniteScroll  } from '@ionic/angular';
import { SubirPage } from '../subir/subir.page';
import { CargaArchivoService } from '../services/carga-archivo.service'; 
import { SocialSharing } from '@ionic-native/social-sharing/ngx';


// import { AngularFireDatabase } from '@angular/fire/database';
// import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  hayMas:boolean = true;

  @ViewChild(IonInfiniteScroll,{ static: false }) infiniteScroll: IonInfiniteScroll;


  // posts: Observable<any[]>;
 
  constructor(public modalController: ModalController,
              private _cap:CargaArchivoService,
              private socialSharing: SocialSharing) {

                // this.posts = afDB.list('post').valueChanges();
              }
  
              loadData(event) { 
                this._cap.cargar_imagenes().then(
                  ( hayMas:boolean ) => {
                     
                    console.log(hayMas);
                    this.hayMas = hayMas;
                    this.infiniteScroll.complete()
                  }
                )
              }
            
              toggleInfiniteScroll() {
                this.infiniteScroll.disabled = !this.infiniteScroll.disabled;
              }

  mostrar_modal(){
      
    this.crearModal();

  }

  async crearModal() {
    const modal = await this.modalController.create({
      component: SubirPage
    });
    return await modal.present();
  }

  compartir( post:any ){
    this.socialSharing.shareViaFacebook(post.titulo, post.img, post.img)
      .then( ()=>{
//Se pudo compartir
      })
      .catch( ()=>{
        //Si se genera algun error
      } )
  }

}
