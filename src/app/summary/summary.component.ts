import { BigService } from './../services/big.service';
import { Component, OnInit } from '@angular/core';
import { MatTableModule, SELECT_PANEL_INDENT_PADDING_X } from '@angular/material';
import * as GaugeChart from 'gauge-chart';
import { Observable, of, Subscriber } from 'rxjs';
import { pipe } from 'rxjs';
import { mergeMap, switchMap, retry,
  map, catchError, filter, scan } from 'rxjs/operators';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css'],
  providers: [BigService]
})
export class SummaryComponent implements OnInit {
  public dataSource: any;
  public message: any;
  displayedColumns = ['Type', 'TotalAmount', 'TotalLiter', 'Count'];
  private gaugeChart: any;
  public canvasWidth: number;
  public needleValue: number;
  public centralLabel: string;
  public options;
  //public name = 'title goes here';
  // public nameFont = 30
  public bottomLabel;

  constructor(private bigService: BigService) { }
  public liter: number;

  result: any;

  ngOnInit() {
    this.getBigList();
  }

  getBigList() {
    this.bigService.getSum().subscribe((res) => {
      this.dataSource = res;
    });
    this.setGauge();
  }

  setGauge() {
    this.bigService.getSum().subscribe((res) => { this.message = res;
    let yourlitter = parseFloat(((this.message[0].totalLiter/ this.message[0].maxODM)*100).toFixed(3));
    this.canvasWidth = 500;
    this.needleValue = (yourlitter * 5.48);
    this.bottomLabel = yourlitter;
    this.options = {
      hasNeedle: true,
      outerNeedle: false,
      needleColor: 'gray',
      needleStartValue: 12.193,
      needleUpdateSpeed: 1,
      // arc options
      arcColors: ['blue', 'green', 'red'],
      arcDelimiters: [20, 70],
      arcPadding: 6,
      arcPaddingColor: 'white',
      arcLabels: ['9.6', '13'],
      }
    });

  };
}
