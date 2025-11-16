# Angular Report Generator

A simple Angular application that generates and views HTML templates with the ability to export them as PDF documents using jsPDF.

## Features

- 📄 **Multiple Template Types**: Support for Business Reports, Invoices, and Employee Profiles
- 🎨 **Beautiful UI**: Modern, responsive design with gradient backgrounds
- 📊 **Static JSON Data**: Pre-loaded sample data for demonstration
- 🖨️ **PDF Export**: Convert HTML templates to PDF using jsPDF and html2canvas
- 🔄 **Dynamic Template Rendering**: Real-time template generation based on selected data
- 🎯 **Standalone Components**: Built with Angular 17+ standalone components

## Technologies Used

- **Angular 17**: Modern Angular framework with standalone components
- **TypeScript**: Type-safe development
- **jsPDF**: PDF generation library
- **html2canvas**: HTML to canvas conversion for PDF export
- **RxJS**: Reactive programming with observables
- **CSS3**: Modern styling with gradients and animations

## Project Structure

```
angular-report-generator/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── landing-page/          # Main landing page component
│   │   │   └── template-viewer/       # Template viewer and PDF generator
│   │   ├── data/
│   │   │   └── static-data.ts         # Static JSON data
│   │   ├── models/
│   │   │   └── report.model.ts        # TypeScript interfaces
│   │   ├── services/
│   │   │   ├── data.service.ts        # Data management service
│   │   │   └── pdf.service.ts         # PDF generation service
│   │   ├── app.component.ts           # Root component
│   │   └── app.routes.ts              # Application routes
│   ├── index.html                     # Main HTML file
│   ├── main.ts                        # Application bootstrap
│   └── styles.css                     # Global styles
├── angular.json                       # Angular configuration
├── package.json                       # Dependencies
└── tsconfig.json                      # TypeScript configuration
```

## Installation

1. **Clone or download the project**

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Run the development server**:

   ```bash
   npm start
   ```

4. **Open your browser** and navigate to:
   ```
   http://localhost:4200
   ```

## Usage

### Landing Page

1. Select a template type from the dropdown:

   - Business Report
   - Invoice
   - Employee Profile

2. Choose specific data to display from the second dropdown

3. Click "View Template" to see the generated HTML template

### Template Viewer

1. View the rendered HTML template with your selected data

2. Click "Download as PDF" to export the template as a PDF file

3. Click "Back to Home" to return to the landing page and select a different template

## Available Data

### Business Reports (3 samples)

- Q4 2024 Sales Report
- Marketing Campaign Analysis
- IT Infrastructure Report

### Invoices (2 samples)

- INV-2024-001 - Acme Corporation
- INV-2024-002 - Tech Solutions Inc

### Employee Profiles (5 samples)

- John Smith - Sales Manager
- Sarah Johnson - Marketing Director
- Michael Chen - IT Manager
- Emily Davis - Software Engineer
- David Wilson - Sales Representative

## Customization

### Adding New Data

Edit `src/app/data/static-data.ts` to add more sample data:

```typescript
export const REPORTS: Report[] = [
  {
    id: 4,
    title: 'Your New Report',
    date: '2024-12-31',
    author: 'Your Name',
    department: 'Your Department',
    summary: 'Report summary...',
    details: [...]
  }
];
```

### Creating New Templates

1. Add a new template type in the models
2. Update the data service to handle the new type
3. Add template HTML in the template-viewer component
4. Update the landing page dropdown options

## Build for Production

```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available for educational purposes.

## Contributing

Feel free to fork this project and submit pull requests for any improvements.

## Support

For issues or questions, please create an issue in the project repository.
