import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'transferencia',
  templateUrl: './transferencia.component.html',
  styleUrls: ['./transferencia.component.css']
})
export class transferenciaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log("transferencia creada")
  }

}
