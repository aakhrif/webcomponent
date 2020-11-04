import { Component, Input, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-calculator-popup',
  templateUrl: './calculator-popup.component.html',
  styleUrls: ['./calculator-popup.component.scss']
})
export class CalculatorPopupComponent implements OnInit {

  @Input() numberA: number;
  @Input() numberB: number;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    console.log('calculator popup initialized');
    console.log(this.numberA);
    console.log(this.numberB);
    this.dataService.getSomeData().subscribe( data => {
      console.log(data);
    });


    // to do proxy and call api via service via rxjs 
    // url to call http://localhost:5000/api/recipes
  }
}
