import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../../services/data.service';
import { Report, Invoice, Employee } from '../../models/report.model';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {
  reports: Report[] = [];
  invoices: Invoice[] = [];
  employees: Employee[] = [];
  selectedTemplateType: string = 'report';
  selectedItemId: number = 1;

  constructor(
    private dataService: DataService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadData();
  }

  loadData(): void {
    this.dataService.getReports().subscribe(data => {
      this.reports = data;
    });

    this.dataService.getInvoices().subscribe(data => {
      this.invoices = data;
    });

    this.dataService.getEmployees().subscribe(data => {
      this.employees = data;
    });
  }

  onTemplateTypeChange(event: Event): void {
    const target = event.target as HTMLSelectElement;
    this.selectedTemplateType = target.value;
    this.selectedItemId = 1;
  }

  onItemChange(event: Event): void {
    const target = event.target as HTMLSelectElement;
    this.selectedItemId = parseInt(target.value);
  }

  viewTemplate(): void {
    this.router.navigate(['/viewer'], {
      queryParams: {
        type: this.selectedTemplateType,
        id: this.selectedItemId
      }
    });
  }

  getItemsForSelectedType(): any[] {
    switch (this.selectedTemplateType) {
      case 'report':
        return this.reports;
      case 'invoice':
        return this.invoices;
      case 'employee':
        return this.employees;
      default:
        return [];
    }
  }

  getItemLabel(item: any): string {
    if (this.selectedTemplateType === 'report') {
      return item.title;
    } else if (this.selectedTemplateType === 'invoice') {
      return `${item.invoiceNumber} - ${item.customerName}`;
    } else if (this.selectedTemplateType === 'employee') {
      return `${item.name} - ${item.position}`;
    }
    return '';
  }
}
