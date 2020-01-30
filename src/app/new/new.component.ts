
import { BigService } from '../services/big.service';
import { Big } from '../models/big.model';

import { Component, OnInit } from '@angular/core';
import { MomentDateAdapter, MAT_MOMENT_DATE_ADAPTER_OPTIONS } from '@angular/material-moment-adapter';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';

import * as _moment from 'moment';
import { preserveWhitespacesDefault } from '@angular/compiler';
import { FormControl, FormGroup } from '@angular/forms';
import { format } from 'url';
import { MatTableModule } from '@angular/material';



export const MY_FORMATS = {
  parse: {
    dateInput: 'YYYY-MM-DD',
  },
  display: {
    dateInput: 'YYYY-MM-DD',
    monthYearLabel: 'MMM YYYY',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css'],
  providers: [
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS]
    },

    {provide: MAT_DATE_FORMATS, useValue: MY_FORMATS},
    BigService
  ]
})


export class NewComponent implements OnInit {
  public bigForm: FormGroup;
   dataSource: any;
   isDisabled = true;
  now = Date.now();
  types: string [] = ['Vehicle', 'Accessory', 'Fuel'];
  displayedColumns = ['Date', 'Type', 'Store', 'Amount', 'Odometer', 'L', 'Description'];
 // dataSource = ELEMENT_DATA;
  constructor(private bigService: BigService) { }

  ngOnInit() {

    this.resetBigForm();
    this.getBigList();

  }

  getBigList() {
    this.bigService.getBigList().subscribe((res) => {
      this.bigService.bigs = res as Big[];
      this.dataSource = res;
    });
  }

  onSubmit(bigForm) {
    if (bigForm._id != null) {
      // edit
      bigForm.date = _moment(bigForm.date).format('YYYY-MM-DD');
      bigForm.ODM = bigForm.ODM;
      bigForm.literperprice = bigForm.literperprice;
      this.bigService.putBig(bigForm).subscribe((res) => {
        this.refreshBigList();
        console.log('successfully edit');
      });
    } else {
      // new save
      console.log(bigForm);
      bigForm.date = _moment(bigForm.date).format('YYYY-MM-DD');
      bigForm.ODM = bigForm.ODM;
      bigForm.literperprice = bigForm.literperprice;
      this.bigService.postBig(bigForm).subscribe((res) => {
        this.refreshBigList();
        console.log('successfully insert');
      });
    }
    this.isDisabled = true;
    this.resetBigForm(bigForm);
  }

  refreshBigList() {
    this.bigService.getBigList().subscribe((res) => {
      this.bigService.bigs = res as Big[];
      this.dataSource = res;
    });
    this.isDisabled = true;
  }

  resetBigForm(bigForm?) {
    this.bigForm = new FormGroup({
      _id: new FormControl(),
      date: new FormControl(new Date()),
      type: new FormControl('Fuel'),
      store: new FormControl(),
      amount: new FormControl(),
      ODM: new FormControl(),
      literperprice: new FormControl(),
      description: new FormControl(),
      totalliter: new FormControl()
    });
    this.isDisabled = true;
  }

  onSelect(bigForm: Big) {
    this.bigForm = new FormGroup({
      _id: new FormControl(bigForm._id),
      date: new FormControl(bigForm.date),
      type: new FormControl(bigForm.type),
      store: new FormControl(bigForm.store),
      amount: new FormControl(bigForm.amount),
      ODM: new FormControl(bigForm.ODM),
      literperprice: new FormControl(bigForm.literperprice),
      description: new FormControl(bigForm.description),
      totalliter: new FormControl(bigForm.totalliter)
    });
    // this.bigService.selectedBig = bigForm;
    this.isDisabled = false;
  }

  onDelete(bigForm) {
    if (bigForm._id !=  null) {
      this.bigService.deleteBig(bigForm._id).subscribe((res) => {
        this.refreshBigList();
        console.log('successfully delete');
      });
    }
    this.resetBigForm();
  }

  onCancel() {
    this.resetBigForm();
  }
}
