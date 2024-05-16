import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perfil-de-usuario-screen',
  templateUrl: './perfil-de-usuario-screen.component.html',
  styleUrl: './perfil-de-usuario-screen.component.scss'
})
export class PerfilDeUsuarioScreenComponent implements OnInit{

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
