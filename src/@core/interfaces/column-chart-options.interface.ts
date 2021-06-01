import { ApexAxisChartSeries, ApexChart, ApexDataLabels, ApexPlotOptions, ApexYAxis, ApexTitleSubtitle, ApexFill, ApexStroke, ApexGrid} from "ng-apexcharts";

export interface ColumnChartOptions {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  yaxis: ApexYAxis;
  xaxis: any; //ApexXAxis;
  fill: ApexFill;
  stroke: ApexStroke;
  grid: ApexGrid;
  title: ApexTitleSubtitle;
};
