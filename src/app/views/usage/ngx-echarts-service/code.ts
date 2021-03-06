export const CODE_HTML = `\
<div class="row">
  <div class="col-md-6">
    <div id="chart1" echarts [options]="options" theme="macarons" class="demo-chart"></div>
  </div>
  <div class="col-md-6">
    <div id="chart2" echarts [options]="options" theme="macarons" class="demo-chart"></div>
  </div>
</div>`;

export const CODE_TS = `\
import { Component, AfterViewInit } from '@angular/core';
import { NgxEchartsService } from 'ngx-echarts';

@Component({
  selector: 'app-ngx-echarts-service',
  templateUrl: './ngx-echarts-service.component.html',
  styleUrls: ['./ngx-echarts-service.component.scss']
})
export class NgxEchartsServiceComponent implements AfterViewInit {
  options = CHART_OPTIONS;

  constructor(private nes: NgxEchartsService) { }

  ngAfterViewInit() {
    setTimeout(() => {
      // Method 1: Use global echarts object:
      const echarts = this.nes.echarts;
      const chartElement1 = document.getElementById('chart1');
      const chartElement2 = document.getElementById('chart2');
      const chart1 = echarts.getInstanceByDom(chartElement1);
      const chart2 = echarts.getInstanceByDom(chartElement2);
      echarts.connect([chart1, chart2]);

      // Method 2: Use service wrapper directly:
      // const chartElement1 = document.getElementById('chart1');
      // const chartElement2 = document.getElementById('chart2');
      // const chart1 = this.nes.getInstanceByDom(chartElement1);
      // const chart2 = this.nes.getInstanceByDom(chartElement2);
      // this.nes.connect([chart1, chart2]);
    });
  }

}

const CHART_OPTIONS = {
  color: ['#3398DB'],
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow'
    }
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  xAxis: [
    {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      axisTick: {
        alignWithLabel: true
      }
    }
  ],
  yAxis: [{
    type: 'value'
  }],
  series: [{
    name: 'Counters',
    type: 'bar',
    barWidth: '60%',
    data: [10, 52, 200, 334, 390, 330, 220]
  }]
};`;
