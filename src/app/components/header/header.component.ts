import { AfterViewInit, Component, HostListener, OnInit } from '@angular/core';

interface Section {
  id: string;
  name: string;
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, AfterViewInit {
  isScrolled = false;
  isMenuOpen = false;
  isDarkTheme = true;
  vCard = `
FN:Gowtham Palanichamy
ORG:Software Engineer
TITLE:Angular Developer
TEL:+91 8660464527
EMAIL:gowthampalanichamyy@gmail.com
URL:https://gowthambtech27.github.io/Personal/`;

  // Dynamic sections (can replace with Firebase later)
  sections: Section[] = [
    { id: 'home', name: 'Home' },
    { id: 'about', name: 'About' },
    { id: 'experience', name: 'Experience' },
    { id: 'skills', name: 'Skills' },
    { id: 'projects', name: 'Projects' },
    { id: 'contact', name: 'Contact' },
  ];

  ngOnInit(): void {

  }
  ngAfterViewInit() {
    this.initParticles();
  }
  // Detect scroll to add scrolled class
  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 50;
  }

  // Toggle mobile menu
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  // Smooth scroll to section
  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      this.isMenuOpen = false; // Close mobile menu after click
    }
  }
  toggleTheme() {
    this.isDarkTheme = !this.isDarkTheme;

    document.body.classList.toggle('light-theme', !this.isDarkTheme);
  }
  openResume(event: Event) {
    event.preventDefault();
    const resumeWindow = window.open(
      'assets/Gowtham_P.pdf',
      '_blank'
    );

    // Close after 7 seconds
    setTimeout(() => {
      resumeWindow?.close();
    }, 7000);
  }
  private initParticles() {
    const canvas: any = document.getElementById('heroCanvas');
    const ctx = canvas.getContext('2d');

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: any[] = [];

    for (let i = 0; i < 100; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 2 + 1,
        dx: (Math.random() - 0.5) * 0.5,
        dy: (Math.random() - 0.5) * 0.5
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let p of particles) {
        p.x += p.dx;
        p.y += p.dy;

        if (p.x < 0 || p.x > canvas.width) p.dx = -p.dx;
        if (p.y < 0 || p.y > canvas.height) p.dy = -p.dy;

        ctx.beginPath();
        this.drawStar(ctx, p.x, p.y, 5, p.radius * 3, p.radius * 1.2);

        ctx.shadowBlur = 18;
        ctx.fillStyle = '#FFCDA5';
        ctx.fill();

      }

      requestAnimationFrame(animate);
    };

    animate();

    window.addEventListener('resize', () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    });
  }
  private drawStar(
    ctx: CanvasRenderingContext2D,
    x: number,
    y: number,
    points: number,
    outerRadius: number,
    innerRadius: number
  ) {
    const step = Math.PI / points;
    let rotation = Math.PI / 2 * 3;

    ctx.moveTo(x, y - outerRadius);

    for (let i = 0; i < points; i++) {
      ctx.lineTo(
        x + Math.cos(rotation) * outerRadius,
        y + Math.sin(rotation) * outerRadius
      );
      rotation += step;

      ctx.lineTo(
        x + Math.cos(rotation) * innerRadius,
        y + Math.sin(rotation) * innerRadius
      );
      rotation += step;
    }

    ctx.lineTo(x, y - outerRadius);
    ctx.closePath();
  }


}
