import { Report, Invoice, Employee } from '../models/report.model';

export const REPORTS: Report[] = [
  {
    id: 1,
    title: 'Q4 2024 Sales Report',
    date: '2024-12-31',
    author: 'John Smith',
    department: 'Sales',
    summary: 'Comprehensive analysis of Q4 2024 sales performance across all regions.',
    details: [
      { category: 'Total Revenue', value: '$1,250,000', description: 'Total sales revenue for Q4' },
      { category: 'Growth Rate', value: '15%', description: 'Year-over-year growth' },
      { category: 'New Customers', value: 245, description: 'New customer acquisitions' },
      { category: 'Customer Retention', value: '92%', description: 'Customer retention rate' }
    ]
  },
  {
    id: 2,
    title: 'Marketing Campaign Analysis',
    date: '2024-12-15',
    author: 'Sarah Johnson',
    department: 'Marketing',
    summary: 'Detailed analysis of recent marketing campaigns and their effectiveness.',
    details: [
      { category: 'Campaign Reach', value: '500,000', description: 'Total audience reached' },
      { category: 'Conversion Rate', value: '3.5%', description: 'Overall conversion rate' },
      { category: 'ROI', value: '250%', description: 'Return on investment' },
      { category: 'Engagement Rate', value: '8.2%', description: 'Average engagement rate' }
    ]
  },
  {
    id: 3,
    title: 'IT Infrastructure Report',
    date: '2024-12-20',
    author: 'Michael Chen',
    department: 'IT',
    summary: 'Current state of IT infrastructure and recommendations for improvements.',
    details: [
      { category: 'System Uptime', value: '99.9%', description: 'Average system uptime' },
      { category: 'Security Incidents', value: 2, description: 'Minor security incidents' },
      { category: 'Server Load', value: '65%', description: 'Average server utilization' },
      { category: 'Response Time', value: '1.2s', description: 'Average response time' }
    ]
  }
];

export const INVOICES: Invoice[] = [
  {
    id: 1,
    invoiceNumber: 'INV-2024-001',
    date: '2024-12-01',
    dueDate: '2024-12-31',
    customerName: 'Acme Corporation',
    customerAddress: '123 Business St, New York, NY 10001',
    items: [
      { description: 'Web Development Services', quantity: 40, unitPrice: 150, total: 6000 },
      { description: 'UI/UX Design', quantity: 20, unitPrice: 120, total: 2400 },
      { description: 'Consulting Hours', quantity: 10, unitPrice: 200, total: 2000 }
    ],
    subtotal: 10400,
    tax: 1040,
    total: 11440
  },
  {
    id: 2,
    invoiceNumber: 'INV-2024-002',
    date: '2024-12-05',
    dueDate: '2025-01-05',
    customerName: 'Tech Solutions Inc',
    customerAddress: '456 Innovation Ave, San Francisco, CA 94102',
    items: [
      { description: 'Software License', quantity: 5, unitPrice: 500, total: 2500 },
      { description: 'Technical Support', quantity: 12, unitPrice: 100, total: 1200 },
      { description: 'Training Sessions', quantity: 3, unitPrice: 800, total: 2400 }
    ],
    subtotal: 6100,
    tax: 610,
    total: 6710
  }
];

export const EMPLOYEES: Employee[] = [
  {
    id: 1,
    name: 'John Smith',
    position: 'Sales Manager',
    department: 'Sales',
    email: 'john.smith@company.com',
    phone: '+1 (555) 123-4567',
    joinDate: '2020-03-15',
    salary: 85000
  },
  {
    id: 2,
    name: 'Sarah Johnson',
    position: 'Marketing Director',
    department: 'Marketing',
    email: 'sarah.johnson@company.com',
    phone: '+1 (555) 234-5678',
    joinDate: '2019-07-22',
    salary: 95000
  },
  {
    id: 3,
    name: 'Michael Chen',
    position: 'IT Manager',
    department: 'IT',
    email: 'michael.chen@company.com',
    phone: '+1 (555) 345-6789',
    joinDate: '2021-01-10',
    salary: 90000
  },
  {
    id: 4,
    name: 'Emily Davis',
    position: 'Software Engineer',
    department: 'IT',
    email: 'emily.davis@company.com',
    phone: '+1 (555) 456-7890',
    joinDate: '2022-05-18',
    salary: 75000
  },
  {
    id: 5,
    name: 'David Wilson',
    position: 'Sales Representative',
    department: 'Sales',
    email: 'david.wilson@company.com',
    phone: '+1 (555) 567-8901',
    joinDate: '2023-02-28',
    salary: 60000
  }
];
