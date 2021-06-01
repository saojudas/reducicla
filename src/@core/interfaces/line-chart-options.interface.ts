import { ApexAxisChartSeries, ApexChart, ApexXAxis, ApexDataLabels, ApexTitleSubtitle, ApexStroke, ApexGrid } from "ng-apexcharts";

export interface LineChartOptions {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  dataLabels: ApexDataLabels;
  grid: ApexGrid;
  stroke: ApexStroke;
  title: ApexTitleSubtitle;
};
