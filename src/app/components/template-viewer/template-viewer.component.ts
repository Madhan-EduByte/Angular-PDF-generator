import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../../services/data.service';
import { PdfService } from '../../services/pdf.service';
import { Report, Invoice, Employee } from '../../models/report.model';

@Component({
  selector: 'app-template-viewer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './template-viewer.component.html',
  styleUrls: ['./template-viewer.component.css']
})
export class TemplateViewerComponent implements OnInit {
  templateType: string = '';
  itemId: number = 0;
  data: Report | Invoice | Employee | null = null;
  loading: boolean = true;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private dataService: DataService,
    private pdfService: PdfService
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.templateType = params['type'] || 'report';
      this.itemId = parseInt(params['id']) || 1;
      this.loadData();
    });
  }

  loadData(): void {
    this.loading = true;
    
    switch (this.templateType) {
      case 'report':
        this.dataService.getReportById(this.itemId).subscribe(data => {
          this.data = data || null;
          this.loading = false;
        });
        break;
      case 'invoice':
        this.dataService.getInvoiceById(this.itemId).subscribe(data => {
          this.data = data || null;
          this.loading = false;
        });
        break;
      case 'employee':
        this.dataService.getEmployeeById(this.itemId).subscribe(data => {
          this.data = data || null;
          this.loading = false;
        });
        break;
      default:
        this.loading = false;
    }
  }

  async generatePDF(): Promise<void> {
    try {
      const filename = `${this.templateType}-${this.itemId}-${Date.now()}.pdf`;
      await this.pdfService.generatePDF('template-content', filename);
      alert('PDF generated successfully!');
    } catch (error) {
      console.error('Error generating PDF:', error);
      alert('Error generating PDF. Please try again.');
    }
  }

  goBack(): void {
    this.router.navigate(['/']);
  }

  isReport(data: any): data is Report {
    return this.templateType === 'report';
  }

  isInvoice(data: any): data is Invoice {
    return this.templateType === 'invoice';
  }

  isEmployee(data: any): data is Employee {
    return this.templateType === 'employee';
  }

  getReport(): Report | null {
    return this.isReport(this.data) ? this.data : null;
  }

  getInvoice(): Invoice | null {
    return this.isInvoice(this.data) ? this.data : null;
  }

  getEmployee(): Employee | null {
    return this.isEmployee(this.data) ? this.data : null;
  }

  getCurrentDate(): string {
    return new Date().toLocaleDateString();
  }
}
