import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Report, Invoice, Employee } from '../models/report.model';
import { REPORTS, INVOICES, EMPLOYEES } from '../data/static-data';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  getReports(): Observable<Report[]> {
    return of(REPORTS);
  }

  getReportById(id: number): Observable<Report | undefined> {
    return of(REPORTS.find(report => report.id === id));
  }

  getInvoices(): Observable<Invoice[]> {
    return of(INVOICES);
  }

  getInvoiceById(id: number): Observable<Invoice | undefined> {
    return of(INVOICES.find(invoice => invoice.id === id));
  }

  getEmployees(): Observable<Employee[]> {
    return of(EMPLOYEES);
  }

  getEmployeeById(id: number): Observable<Employee | undefined> {
    return of(EMPLOYEES.find(employee => employee.id === id));
  }
}
