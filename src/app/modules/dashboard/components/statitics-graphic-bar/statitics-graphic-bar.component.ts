import { Component } from '@angular/core';
import { ChartConfiguration } from 'chart.js';

@Component({
  selector: 'ui-statitics-graphic-bar',
  templateUrl: './statitics-graphic-bar.component.html',
  styleUrl: './statitics-graphic-bar.component.css'
})
export class StatiticsGraphicBarComponent {
  title = 'ng2-charts-demo';

  public barChartLegend = true;
  public barChartPlugins = [];

  public barChartData: ChartConfiguration<'bar'>['data'] = {
    labels: [ 'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Agosto' ],
    datasets: [
      { data: [ 1, 22, 22, 1, 56, 55, 40 ], label: 'Cantidad de Usuarios registrados' },
    ]
  };

  public barChartOptions: ChartConfiguration<'bar'>['options'] = {
    responsive: false,
  };

  constructor() {
  }
}
