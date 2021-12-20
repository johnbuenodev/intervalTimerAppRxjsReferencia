import { Component, OnInit } from '@angular/core';
import { interval, timer } from 'rxjs';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'intervalTimerAppRxjs';

  coletadoDados : string = "";
  contadorInfinito: string = "";
  quantidadeColeta : number = 15;

  constructor() {}

  public ngOnInit(): void {

     
    //intervalo de segundos o interval contador
    const segundos = interval(1000);

    //interval aceita numero / informa segundos 1000 = 1 segundo
    const contador = interval(1000);
     
    //Vai contar até  15 segundos / inicia no 0 a contagem
    //Take diz para o interval constante SEGUNDOS que vai pegar 15 numeros /Declarado variavel da contagem
    const pegarDadosPorXSegundosProgramados = segundos.pipe(take(this.quantidadeColeta));

    //Escrito para pegar os dados
    console.log("Iniciando coleta de dados...");
    //Subscribe vai coletar dados somente até o take que foi informado!!
    pegarDadosPorXSegundosProgramados.subscribe( (pegarDados) => {

      this.coletadoDados = `Coletando dados ${pegarDados + 1}/${this.quantidadeColeta} segundos!`;

       console.log("Coletado dados em " + (pegarDados + 1) + " segundos!") 

    });

    console.log("Finalizado!");

    console.log("Contador Eterno");
    
    contador.subscribe((variavel) => {

      this.contadorInfinito = `Contador Infinito: ${variavel} segundos`;
      
      console.log(`Cada ${variavel} segundos`);
    
    });



  }
}
