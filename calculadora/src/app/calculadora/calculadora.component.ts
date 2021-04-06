import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';



@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {
  title = 'Calculadora';

  constructor() { }

  ngOnInit(): void {
  }

  public num1 = 0;
  public num2 = 0;
  public result = 0;
  conta: any;

  sum() {
    this.result = Number(this.num1) + Number(this.num2);
  }

  sub() {
    this.result = Number(this.num1) - Number(this.num2);
  }

  mult() {
    this.result = Number(this.num1) * Number(this.num2);
  }

  div() {
    if (Number(this.num1) != 0) {
      if (Number(this.num2) != 0){
        this.result = Number(this.num1) / Number(this.num2);
      }else{
        alert('Não é possivel efetuar divisão por 0');
      }
    }
    else{
      alert('Não é possivel efetuar divisão por 0');
    }
  }
  perc() {
    if (Number(this.num1) != 0) {
      if (Number(this.num2) != 0){
        this.result = Number(this.num1) * (Number(this.num2) / 100);
      }else{
        alert('Não é possivel verificar o percentual de 0');
      }
    }
    else{
      alert('Não é possivel verificar o percentual de 0');
    }
  }

}
