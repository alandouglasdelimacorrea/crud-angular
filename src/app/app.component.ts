import { Component } from '@angular/core';

export interface PeriodicElement {
  select: boolean;
  item: string;
  qtd: number;
  valor: number;
  preco: number;
  totalProduto: number;
  totalGeral: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'projeto';
}
