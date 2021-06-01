import { ChartService } from './../../../@core/services/chart.service';
import { ColumnChartOptions } from './../../../@core/interfaces/column-chart-options.interface';
import { LineChartOptions } from './../../../@core/interfaces/line-chart-options.interface';
import { PontoColetaService } from 'src/@core/services/ponto-coleta.service';
import { Subscription } from 'rxjs';
import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { UsuarioService } from 'src/@core/services/usuario.service';
import { Role } from 'src/@core/enumerateds/role.enum';
import { ChartComponent } from 'ng-apexcharts';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, OnDestroy {

  subscription: Subscription = new Subscription();

  totalColaboradores: number = 0;
  totalColetores: number = 0;
  totalPontosColeta: number = 0;
  totalColetas: number = 0;

  @ViewChild("lineChart") lineChart: ChartComponent;
  public lineChartOptions: Partial<LineChartOptions>;
  lineChartYearSearch: number = new Date().getFullYear();

  @ViewChild("columnChart") columnChart: ChartComponent;
  public columnChartOptions: Partial<ColumnChartOptions>;
  actuallyYear = new Date().getFullYear();
  columnDateSearch: {inicio: Date, fim: Date} = {inicio: new Date((new Date()).getFullYear(), 0, 1), fim: new Date((new Date()).getFullYear(), 11, 31)};

  constructor(private usuarioService: UsuarioService, private pontoColetaService: PontoColetaService, private coletaService: PontoColetaService, private chartService: ChartService) { }

  ngOnInit() {
    this.countColaboradores();
    this.countColetores();
    this.countPontosColeta();
    this.countColetas();
    this.buildTimeLineChart();
    this.buildColumnChart();
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

  countColaboradores(){
    this.subscription.add(this.usuarioService.count(Role.COLABORADOR).subscribe({
      next: totalColaboradores => this.totalColaboradores = totalColaboradores
    }))
  }

  countColetores(){
    this.subscription.add(this.usuarioService.count(Role.COLETOR).subscribe({
      next: totalColetores => this.totalColetores = totalColetores
    }))
  }

  countPontosColeta(){
    this.subscription.add(this.pontoColetaService.count().subscribe({
      next: totalPontosColeta => this.totalPontosColeta = totalPontosColeta
    }))
  }

  countColetas(){
    this.subscription.add(this.coletaService.count().subscribe({
      next: totalColetas => this.totalColetas = totalColetas
    }))
  }

  buildTimeLineChart(){
    this.lineChartOptions = {
      series: [
        {
          name: "Coletas",
          data: [0]
        }
      ],
      chart: {
        height: 350,
        type: "line",
        zoom: {
          enabled: false
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: "straight"
      },
      title: {
        text: "Coletas x Tempo",
        align: "left"
      },
      grid: {
        row: {
          colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
          opacity: 0.5
        }
      },
      xaxis: {
        categories: ['Carregando ...']
      }
    };
    this.subscription.add(this.chartService.buildTimeLineChart(this.lineChartYearSearch).subscribe({
      next: chartResponse => {
        const labels = chartResponse.map(chartResponse => chartResponse.label);
        const values = chartResponse.map(chartResponse => chartResponse.value);
        this.lineChartOptions = {
          series: [
            {
              name: "Coletas",
              data: values
            }
          ],
          chart: {
            height: 350,
            type: "line",
            zoom: {
              enabled: false
            }
          },
          dataLabels: {
            enabled: false
          },
          stroke: {
            curve: "straight"
          },
          title: {
            text: "Coletas x Tempo",
            align: "left"
          },
          grid: {
            row: {
              colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
              opacity: 0.5
            }
          },
          xaxis: {
            categories: labels
          }
        };
      }
    }));
  }

  buildColumnChart(){
    this.columnChartOptions = {
      series: [
        {
          name: "Quantidade (KG)",
          data: [0]
        }
      ],
      chart: {
        height: 350,
        type: "bar"
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        width: 2
      },
      grid: {
        row: {
          colors: ["#fff", "#f2f2f2"]
        }
      },
      title: {
        text: "Material Coletado (KG)",
        align: "left"
      },
      xaxis: {
        labels: {
          rotate: -45
        },
        categories: [
          "Carregando ..."
        ],
        tickPlacement: "on"
      },
      fill: {
        type: "gradient",
        gradient: {
          shade: "light",
          type: "horizontal",
          shadeIntensity: 0.25,
          gradientToColors: undefined,
          inverseColors: true,
          opacityFrom: 0.85,
          opacityTo: 0.85,
          stops: [50, 0, 100]
        }
      }
    };
    this.subscription.add(this.chartService.buildColumnChart(this.columnDateSearch.inicio, this.columnDateSearch.fim).subscribe({
      next: chartResponse => {
        const labels = chartResponse.map(chartResponse => chartResponse.label);
        const values = chartResponse.map(chartResponse => chartResponse.value);
        this.columnChartOptions = {
          series: [
            {
              name: "Quantidade (KG)",
              data: values
            }
          ],
          chart: {
            height: 350,
            type: "bar"
          },
          dataLabels: {
            enabled: false
          },
          stroke: {
            width: 2
          },
          grid: {
            row: {
              colors: ["#fff", "#f2f2f2"]
            }
          },
          title: {
            text: "Material Coletado (KG)",
            align: "left"
          },
          xaxis: {
            labels: {
              rotate: -45
            },
            categories: labels,
            tickPlacement: "on"
          },
          fill: {
            type: "gradient",
            gradient: {
              shade: "light",
              type: "horizontal",
              shadeIntensity: 0.25,
              gradientToColors: undefined,
              inverseColors: true,
              opacityFrom: 0.85,
              opacityTo: 0.85,
              stops: [50, 0, 100]
            }
          }
        };
      }
    }));
  }

  updateYearDateSearch(event){
    this.lineChartYearSearch = event;
  }

  updateRangeDateSearch(event, type: 'column', periodo: 'inicio' | 'fim'){
    if(type === 'column'){
      if(periodo === 'inicio') this.columnDateSearch.inicio = new Date(event);
      if(periodo === 'fim') this.columnDateSearch.fim = new Date(event);
    }
  }

}
