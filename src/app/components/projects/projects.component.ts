import { AfterViewInit, Component } from '@angular/core';
import { Chart, BarController, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements AfterViewInit {

  projects = [
    {
      title: 'E-Waste Recycling Platform',
      description: 'A comprehensive system for managing electronic waste from collection to recycling. GPS tracking, real-time monitoring, Material Recovery optimization, Regulatory compliance',
      technologies: ['Angular', 'TypeScript', 'REST API', 'Material Design'],
      icon: 'fa-solid fa-recycle',
      color: '#FF5733',
      chartLabels: ['2018', '2019', '2020', '2021', '2022', '2023', '2024', '2025'],
      chartData: [3, 12, 3, 1, 0, 0, 0, 0]
    },
    {
      title: 'Plastic Waste Management System',
      description: 'Platform for tracking and managing plastic waste. Includes automated categorization, collection scheduling, awareness campaigns, and analytics dashboard for recycling trends.',
      technologies: ['Angular', 'Node.js', 'HighCharts', 'Chart.js'],
      icon: 'fa-solid fa-trash-can',
      color: '#33C3FF',
      chartLabels: ['2018', '2019', '2020', '2021', '2022', '2023', '2024', '2025'],
      chartData: [0, 0, 9, 5, 0, 0, 0, 0]
    },
    {
      title: 'Glass Waste Collection Tracker',
      description: 'Smart system for monitoring glass waste collection and processing. Features mobile responsiveness, GPS-enabled collection tracking, and automated notifications for stakeholders.',
      technologies: ['Angular', 'TypeScript', 'REST API', 'Material Design'],
      icon: 'fa-solid fa-wine-bottle',
      color: '#28A745',
      chartLabels: ['2018', '2019', '2020', '2021', '2022', '2023', '2024', '2025'],
      chartData: [0, 0, 0, 6, 12, 3, 0, 0]
    },
    {
      title: 'Battery Waste Disposal & Awareness',
      description: 'User-friendly platform for safe battery disposal and recycling. Provides collection point locator, educational resources on environmental impact, and reporting tools for compliance.',
      technologies: ['Angular', 'TypeScript', 'Leaflet Maps', 'Chart.js'],
      icon: 'fa-solid fa-battery-full',
      color: '#FFC300',
      chartLabels: ['2018', '2019', '2020', '2021', '2022', '2023', '2024', '2025'],
      chartData: [0, 0, 0, 0, 0, 9, 12, 6]
    },
    {
      title: 'Circularity Solutions',
      description: 'A versatile platform promoting safe disposal and recycling of various products. Locate collection points, access educational resources on sustainability, and streamline compliance reporting for businesses and individuals.',
      technologies: ['Sass', 'Html', 'Css', 'JavaScript'],
      icon: 'fa-solid fa-recycle',
      color: '#a76c28ff',
      chartLabels: ['2018', '2019', '2020', '2021', '2022', '2023', '2024', '2025'],
      chartData: [0, 0, 0, 0, 0, 0, 0, 2]
    }

  ];

  ngAfterViewInit(): void {
  Chart.register(
    BarController,
    BarElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend
  );

  setTimeout(() => {
    const ctx = document.getElementById('all-projects-chart') as HTMLCanvasElement;
    if (!ctx) return;

    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: this.projects[0].chartLabels, // same labels for all (years/months)
        datasets: this.projects.map(project => ({
          label: project.title,
          data: project.chartData,
          backgroundColor: project.color
        }))
      },
      options: {
        responsive: true,
        plugins: {
          legend: { display: true },
          tooltip: { enabled: true }
        },
        scales: {
          y: {
            beginAtZero: true,
            title: {
              display: true,
              text: 'Months'
            }
          },
          x: {
            title: {
              display: true,
              text: 'Year'
            }
          }
        }
      }
    });
  }, 0);
}

}
