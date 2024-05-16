import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-juego-terminado-screen',
  templateUrl: './juego-terminado-screen.component.html',
  styleUrl: './juego-terminado-screen.component.scss'
})
export class JuegoTerminadoScreenComponent implements OnInit{

  public isLoading: boolean = false;

  constructor(
    private router: Router
  ){}

  ngOnInit(): void {

  }

  goInicio(){
    this.router.navigate(["home"]);
  }

  public isMobile(){
    if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|mobile|CriOS/i.test(navigator.userAgent)){
      return "interior-mobile";
    }else{
      return "interior-normal";
    }
  }
}
