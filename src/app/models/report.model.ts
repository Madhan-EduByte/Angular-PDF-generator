export interface Report {
  id: number;
  title: string;
  date: string;
  author: string;
  department: string;
  summary: string;
  details: ReportDetail[];
}

export interface ReportDetail {
  category: string;
  value: string | number;
  description: string;
}

export interface Invoice {
  id: number;
  invoiceNumber: string;
  date: string;
  dueDate: string;
  customerName: string;
  customerAddress: string;
  items: InvoiceItem[];
  subtotal: number;
  tax: number;
  total: number;
}

export interface InvoiceItem {
  description: string;
  quantity: number;
  unitPrice: number;
  total: number;
}

export interface Employee {
  id: number;
  name: string;
  position: string;
  department: string;
  email: string;
  phone: string;
  joinDate: string;
  salary: number;
}
