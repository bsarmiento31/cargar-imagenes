import { Component, OnInit,Input  } from '@angular/core';
import { NavParams,ModalController } from '@ionic/angular';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { ImagePicker,ImagePickerOptions } from '@ionic-native/image-picker/ngx';
import { CargaArchivoService } from '../services/carga-archivo.service';




@Component({
  selector: 'app-subir',
  templateUrl: './subir.page.html',
  styleUrls: ['./subir.page.scss'],
})
export class SubirPage implements OnInit {

  titulo:string = "";
  imagenPreview:string = "";
  imagen64:string;

  constructor(public modalController: ModalController,
              public camera: Camera,
              private imagePicker: ImagePicker,
              public _cap: CargaArchivoService) { }

  ngOnInit() {
  }

  cerrar_modal() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalController.dismiss({
      'dismissed': true
    });
  }

  mostrar_camara(){
    const options: CameraOptions = {
      quality: 50,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }
    
    this.camera.getPicture(options).then((imageData) => {
     // imageData is either a base64 encoded string or a file URI
     // If it's base64 (DATA_URL):
     this.imagenPreview = 'data:image/jpeg;base64,' + imageData;
     this.imagen64 = imageData;
    }, (err) => {
     // Handle error
     console.log("Error en camara", JSON.stringify(err));
    });
  }

  seleccionar_foto(){

    const options: CameraOptions = {
      quality: 70,
      destinationType: this.camera.DestinationType.DATA_URL,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      saveToPhotoAlbum: false,
    }
    this.camera.getPicture(options).then((imageData) => {
 
       this.imagenPreview = 'data:image/jpeg;base64,' + imageData;
       this.imagen64 = imageData;
 
    }, (err) => {
     console.log("error en selector", JSON.stringify(err) );
    });

    // let opciones: ImagePickerOptions = {
    //   quality: 70,
    //   outputType:1,
    //   maximumImagesCount: 1
    // }
    // this.imagePicker.getPictures(opciones).then((results) => {
    //   for (var i = 0; i < results.length; i++) {
    //       // console.log('Image URI: ' + results[i]);

    //       this.imagenPreview = 'data:image/jpeg;base64,' +  results[i];
    //   }
    // }, (err) => { 

    //   console.log("Error en selector",JSON.stringify(err));
    // });
  }

  crear_post(){

      let archivo = {
          
        img:this.imagen64,
        titulo: this.titulo

      }

      this._cap.cargar_imagen_firebase(archivo)
            .then(() => this.cerrar_modal());
    
  }

}
