import { Component } from '@angular/core';
import { ExcelService } from '../excel.service';

@Component({
  selector: 'app-excel-example',
  templateUrl: './excel-example.component.html',
  styleUrl: './excel-example.component.css'
})
export class ExcelExampleComponent {
  data = [
    { Name: 'John Doe', Age: 30, City: 'New York' },
    { Name: 'Jane Smith', Age: 25, City: 'San Francisco' },
    // Add more data as needed
  ];
  constructor(private excelService: ExcelService) {
    this.exportToExcel()
  }
  exportToExcel(): void {
    this.excelService.generateExcel(this.data, 'user_data');
  }
}
