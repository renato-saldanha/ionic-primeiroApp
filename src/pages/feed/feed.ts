import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FeedPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
})
export class FeedPage {
  public nomeUsuario : String = "Renato Saldanha";

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  public somaNumeros(n1,n2: number): void {
    alert(n1+n2);
    
  }

  ionViewDidLoad() {
    //this.somaNumeros(15,17);
  }

  

}
