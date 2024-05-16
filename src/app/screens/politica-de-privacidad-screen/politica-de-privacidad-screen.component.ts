import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-politica-de-privacidad-screen',
  templateUrl: './politica-de-privacidad-screen.component.html',
  styleUrl: './politica-de-privacidad-screen.component.scss'
})
export class PoliticaDePrivacidadScreenComponent implements OnInit{

  constructor(){}

  ngOnInit(): void {

  }

  public isMobile(){
    if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|mobile|CriOS/i.test(navigator.userAgent)){
      return "interior-mobile";
    }else{
      return "interior-normal";
    }
  }
}
