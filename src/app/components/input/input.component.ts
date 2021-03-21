import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  //tentativas de cálculo

  public patientAge: number 
  public patientWeight: number
  public patientImc: number
  
  constructor() { }

  ngOnInit(): void {
  }

  //tentativa de função para cálculo

  imcCalculator(): void {
    this.patientImc = this.patientAge / (this.patientAge * this.patientAge)
    console.log(this.patientImc)
  }

}
