import { MovieProvider } from './../../providers/movie/movie';
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
  templateUrl: 'feed.html'
  
})

export class FeedPage {
  public feed = {
    nome_usuario: "Renato Saldanha",
    proffisao: "Desenvolvedor",
    endereco: "Rua Romanos",
    numero: 14,
    casa: 4,
    qtd_likes: 10,
    comentario: "I'm Developer",
    hora_postagem: "a 11 Horas.."
  }

  public listaFilmes = new Array<any>();
  public urlImagem: String = "https://image.tmdb.org/t/p/w500/";

  public nomeUsuario: String = "Renato Saldanha";

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private movieProvider: MovieProvider) {

  }

  public somaNumeros(n1, n2: number): void {
    alert(n1 + n2);

  }

  ionViewDidLoad() {
    this.movieProvider.getUltimoFilme().subscribe(
      data => {
        const response = (data as any);
        const retorno = JSON.parse(response._body);
        this.listaFilmes = retorno.results;
        console.log(retorno);
      }, error => {
        console.log(error);
      }
    )
  }



}
