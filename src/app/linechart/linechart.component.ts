import { Component, OnInit } from '@angular/core';
import * as Chart from 'chart.js';
import { DataService } from '../data.service';

@Component({
  selector: 'pb-linechart',
  templateUrl: './linechart.component.html',
  styleUrls: ['./linechart.component.scss']
})
export class LinechartComponent implements OnInit {

  public dataSource = {
    datasets: [{
        label: 'Maximum Budget',
        data: [],
        backgroundColor : [           
        ]
    }],

    labels: [
        
    ]
  }
  public loggedInUserName:any;


  constructor(private _dataService : DataService) { }

  ngOnInit(): void {
    this.loggedInUserName = this._dataService.loggedInUserName;
    this._dataService.getData(this.loggedInUserName)
  .subscribe((res: any) => {
    console.log(res);
    for (let i = 0; i < res.length; i++) {
     this.dataSource.datasets[0].data[i] = res[i].maxbudget;
     this.dataSource.labels[i] = res[i].title;
     this.dataSource.datasets[0].backgroundColor[i] = res[i].color;
     this.createChart();
    }
  });
  }

  createChart(){
    var ctx : any = document.getElementById("maxbudgetpie")
    var myPieChart = new Chart(ctx,{
        type: 'line',
        data : this.dataSource
    })
}

}