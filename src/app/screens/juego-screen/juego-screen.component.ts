import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-juego-screen',
  templateUrl: './juego-screen.component.html',
  styleUrl: './juego-screen.component.scss'
})
export class JuegoScreenComponent implements OnInit{

  public isLoading: boolean = false;

  constructor(
    private router: Router
  ){}

  ngOnInit(): void {

  }

  public verPuntaje(){
    this.router.navigate(["juego-terminado"]);
  }
}
