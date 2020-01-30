import { BigService } from './../services/big.service';
import { Component, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material';
@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css'],
  providers: [BigService]
})
export class SummaryComponent implements OnInit {
  dataSource: any;
  displayedColumns = ['Type', 'TotalAmount', 'TotalLiter', 'Count'];

  constructor(private bigService: BigService) { }

  ngOnInit() {
    this.getBigList();
  }

  getBigList() {
    this.bigService.getSum().subscribe((res) => {
      this.dataSource = res;
      console.log(res);
    });
  }
}
