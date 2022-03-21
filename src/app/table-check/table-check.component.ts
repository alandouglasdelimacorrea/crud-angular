import { Component, OnInit } from '@angular/core';
import { TableService } from '../shared/table.service';
import { PeriodicElement } from '../app.component';

@Component({
  selector: 'app-table-check',
  templateUrl: './table-check.component.html',
  styleUrls: ['./table-check.component.css'],
  preserveWhitespaces: true
})
export class TableCheckComponent implements OnInit {

  quantidade!: any;
  totalGeral!: number;
  elemento!: any;
  marcados!: boolean;
  totalMarcados!: number;

  clickedRows = new Set<PeriodicElement>();

  displayedColumns: string[] = ['select', 'item', 'qtd', 'valor', 'total']

  constructor(public dataTable: TableService) { }

  dataSource = this.dataTable.ELEMENT_DATA

  calcularTotal() {
    this.totalGeral = 0;
    for (let index = 0; index < this.dataSource.length; index++) {
      this.elemento = this.dataSource[index];
      this.elemento.totalProduto = this.elemento.qtd * this.elemento.preco || 0;
      this.totalGeral += this.elemento.totalProduto;
    }
    return this.totalGeral;
  }

  checkbox() {
    let marcados = 0;
    this.totalMarcados = 0;

    for (let i = 0; i < this.dataSource.length; i++) {
      this.elemento = this.dataSource[i]
      if (this.elemento.select) {
        this.totalMarcados += (this.elemento.qtd * this.elemento.preco);
        marcados++;
      }
    }
    return marcados;
  }

  ngOnInit(): void {
  }

}
