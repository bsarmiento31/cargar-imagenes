import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { SubirPageModule } from '../app/subir/subir.module';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';  

//Firebase

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule, AngularFireDatabase } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
// import { PlaceHolderPipe } from './pipes/place-holder.pipe';
//plugins
import { Camera } from '@ionic-native/camera/ngx';
import { ImagePicker } from '@ionic-native/image-picker/ngx';
import { CargaArchivoService } from '../app/services/carga-archivo.service';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';





export const firebaseConfig = {
  apiKey: "AIzaSyDpOPY8GZCElFW1ZkC2TVYMEmS-2UWCZ3k",
  authDomain: "appgag-be4c2.firebaseapp.com", 
  databaseURL: "https://appgag-be4c2.firebaseio.com",
  projectId: "appgag-be4c2",
  storageBucket: "appgag-be4c2.appspot.com",
  messagingSenderId: "1051260297835",
  appId: "1:1051260297835:web:c1652ff6b2b44bf2f3c72e"
};

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule,
    SubirPageModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    ImagePicker,
    AngularFireDatabase,
    CargaArchivoService,
    SocialSharing,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
