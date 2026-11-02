
import {
  Component,
  ElementRef,
  ViewChild,
  AfterViewInit
} from '@angular/core';

interface Winner {
  month: string;
  name: string;
  spinner: string;
  contribution: number;
  totalCollection: number;
  date: string;
}

@Component({
  selector: 'app-monthly-lucky-spin',
  templateUrl: './monthly-lucky-spin.component.html',
  styleUrls: ['./monthly-lucky-spin.component.css']
})
export class MonthlyLuckySpinComponent implements AfterViewInit {

  @ViewChild('wheelCanvas')
  wheelCanvas!: ElementRef<HTMLCanvasElement>;

  users: string[] = [
    'Divya S',
    'Eswari S',
    'Gowtham P',
    'Kalavathi S',
    'Kishoreraja S',
    'Subramanian P',
    'Tamilarasan S'
  ];

  // Predefined winner sequence.
  // No month is mapped to a particular member.
  private readonly winnerSequence: string[] = [
    'Kalavathi S',
    'Divya S',
    'Kishoreraja S',
    'Tamilarasan S',
    'Gowtham P',
    'Eswari S',
    'Subramanian P'
  ];

  contribution = 1000;

  selectedMonth = this.getCurrentMonth();

  authorizedSpinner = '';

  winners: Winner[] = [];

  currentWinner = '';

  spinning = false;

  hasSpunThisMonth = false;

  isAdmin = false;

  showAdminLogin = false;

  adminPassword = '';

  loginError = '';

  message = '';

  private rotation = 0;

  private readonly storageKey = 'monthlyLuckySpinData';

  colors: string[] = [
    '#ff6384',
    '#36a2eb',
    '#ffce56',
    '#4bc0c0',
    '#9966ff',
    '#ff9f40',
    '#6cbd74'
  ];

  // Demo only. Use server-side authentication in production.
  private readonly ADMIN_PASSWORD = 'Tata@1234';

  // Total monthly collection.
  get totalCollection(): number {
    return this.users.length * this.contribution;
  }

  // Members who have not won previously.
  get eligibleUsers(): string[] {
    return this.winnerSequence.filter(user =>
      this.users.includes(user) &&
      !this.winners.some(
        winner =>
          winner.name.trim().toLowerCase() === user.toLowerCase() &&
          winner.month < this.selectedMonth
      )
    );
  }

  get alreadyWonCount(): number {
    return this.users.length - this.eligibleUsers.length;
  }

  // Get current local month.
  private getCurrentMonth(): string {
    const date = new Date();

    const year = date.getFullYear();

    const month = String(
      date.getMonth() + 1
    ).padStart(2, '0');

    return `${year}-${month}`;
  }

  ngAfterViewInit(): void {
    this.loadData();
    this.drawWheel();
  }

  // LOAD DATA
  loadData(): void {
    const saved = localStorage.getItem(this.storageKey);

    if (saved) {
      try {
        const data = JSON.parse(saved);

        this.users = data.users || this.users;

        this.contribution = data.contribution ?? 1000;

        this.authorizedSpinner =
          data.authorizedSpinner || '';

        this.winners = data.winners || [];

      } catch {
        console.error(
          'Unable to load saved lucky spin data'
        );
      }
    }

    this.checkMonthlySpin();
  }

  // SAVE DATA
  saveData(): void {
    localStorage.setItem(
      this.storageKey,
      JSON.stringify({
        users: this.users,
        contribution: this.contribution,
        authorizedSpinner: this.authorizedSpinner,
        winners: this.winners
      })
    );
  }

  // ADMIN SETTINGS
  saveSettings(): void {

    this.users = this.users
      .map(user => user.trim())
      .filter(user => user.length > 0);

    if (this.users.length !== 7) {
      this.message = 'Please maintain exactly 7 users.';
      return;
    }

    const uniqueUsers = new Set(
      this.users.map(user => user.toLowerCase())
    );

    if (uniqueUsers.size !== 7) {
      this.message = 'Duplicate member names are not allowed.';
      return;
    }

    if (
      !Number.isFinite(this.contribution) ||
      this.contribution < 0
    ) {
      this.message = 'Please enter a valid contribution.';
      return;
    }

    if (!this.users.includes(this.authorizedSpinner)) {
      this.authorizedSpinner = '';
    }

    this.saveData();

    this.checkMonthlySpin();

    this.drawWheel();

    this.message = 'Settings saved successfully.';
  }

  // ADMIN LOGIN
  toggleAdmin(): void {
    this.showAdminLogin = !this.showAdminLogin;

    this.loginError = '';
  }

  loginAdmin(): void {
    if (this.adminPassword === this.ADMIN_PASSWORD) {

      this.isAdmin = true;

      this.showAdminLogin = false;

      this.adminPassword = '';

      this.loginError = '';

    } else {
      this.loginError = 'Invalid admin password.';
    }
  }

  logoutAdmin(): void {
    this.isAdmin = false;

    this.showAdminLogin = false;
  }

  // CHECK WHETHER MEMBER HAS WON BEFORE
  hasUserWonBefore(user: string): boolean {

    const normalizedName = user.trim().toLowerCase();

    return this.winners.some(winner =>
      winner.name.trim().toLowerCase() === normalizedName &&
      winner.month < this.selectedMonth
    );
  }

  // CHECK MONTHLY SPIN STATUS
  checkMonthlySpin(): void {

    this.hasSpunThisMonth = this.winners.some(
      winner => winner.month === this.selectedMonth
    );

    const winner = this.winners.find(
      item => item.month === this.selectedMonth
    );

    this.currentWinner = winner ? winner.name : '';
  }

  // DRAW WHEEL
  drawWheel(): void {

    if (!this.wheelCanvas || this.users.length === 0) {
      return;
    }

    const canvas = this.wheelCanvas.nativeElement;

    const ctx = canvas.getContext('2d');

    if (!ctx) {
      return;
    }

    const center = canvas.width / 2;

    const radius = center - 5;

    const slice = (2 * Math.PI) / this.users.length;

    ctx.clearRect(
      0,
      0,
      canvas.width,
      canvas.height
    );

    this.users.forEach((user, index) => {

      const start = index * slice + this.rotation;

      const end = start + slice;

      const alreadyWon = this.hasUserWonBefore(user);

      ctx.beginPath();

      ctx.moveTo(center, center);

      ctx.arc(
        center,
        center,
        radius,
        start,
        end
      );

      ctx.closePath();

      ctx.globalAlpha = alreadyWon ? 0.35 : 1;

      ctx.fillStyle =
        this.colors[index % this.colors.length];

      ctx.fill();

      ctx.globalAlpha = 1;

      ctx.strokeStyle = '#ffffff';

      ctx.lineWidth = 3;

      ctx.stroke();

      ctx.save();

      ctx.translate(center, center);

      ctx.rotate(start + slice / 2);

      ctx.textAlign = 'right';

      ctx.fillStyle = '#ffffff';

      ctx.font = 'bold 14px Arial';

      ctx.fillText(
        alreadyWon ? '✓ WON' : user,
        radius - 22,
        5
      );

      ctx.restore();

    });

    // Center SPIN circle.
    ctx.beginPath();

    ctx.arc(
      center,
      center,
      30,
      0,
      2 * Math.PI
    );

    ctx.fillStyle = '#ffffff';

    ctx.fill();

    ctx.strokeStyle = '#333333';

    ctx.lineWidth = 2;

    ctx.stroke();

    ctx.fillStyle = '#333333';

    ctx.font = 'bold 12px Arial';

    ctx.textAlign = 'center';

    ctx.fillText(
      'SPIN',
      center,
      center + 4
    );
  }

  // SPIN WHEEL
  spinWheel(): void {

    this.message = '';

    if (this.spinning) {
      return;
    }

    if (this.hasSpunThisMonth) {
      this.message =
        'This month spin has already been completed.';
      return;
    }

    if (this.users.length !== 7) {
      this.message = 'Exactly 7 users are required.';
      return;
    }

    if (
      !this.authorizedSpinner ||
      !this.users.includes(this.authorizedSpinner)
    ) {
      this.message =
        'Admin must assign a valid authorized spinner.';
      return;
    }

    // Get eligible members.
    const eligibleUsers = this.eligibleUsers;

    if (eligibleUsers.length === 0) {
      this.message =
        'All members have already won. No eligible members remain.';
      return;
    }

    // Select next member from predefined sequence.
    const selectedUser = eligibleUsers[0];

    const selectedIndex = this.users.indexOf(selectedUser);

    if (selectedIndex === -1) {
      this.message = 'Unable to identify selected member.';
      return;
    }

    this.spinning = true;

    const slice = (2 * Math.PI) / this.users.length;

    // Pointer at top (-90 degrees).
    const targetAngle =
      (3 * Math.PI / 2) -
      (selectedIndex * slice + slice / 2);

    const currentAngle =
      this.rotation % (2 * Math.PI);

    const finalRotation =
      (
        targetAngle -
        currentAngle +
        2 * Math.PI
      ) % (2 * Math.PI);

    const extraSpins = 8 * 2 * Math.PI;

    const startRotation = this.rotation;

    const totalRotation =
      extraSpins + finalRotation;

    const duration = 5000;

    const startTime = performance.now();

    const animate = (now: number) => {

      const progress = Math.min(
        (now - startTime) / duration,
        1
      );

      const eased =
        1 - Math.pow(1 - progress, 4);

      this.rotation =
        startRotation + totalRotation * eased;

      this.drawWheel();

      if (progress < 1) {

        requestAnimationFrame(animate);

      } else {

        this.rotation %= 2 * Math.PI;

        this.finishSpin(selectedIndex);

      }
    };

    requestAnimationFrame(animate);
  }

  // SAVE WINNER
  finishSpin(index: number): void {

    const winnerName = this.users[index];

    // Final duplicate-winner protection.
    if (
      this.hasUserWonBefore(winnerName) ||
      this.winners.some(
        winner => winner.month === this.selectedMonth
      )
    ) {
      this.spinning = false;

      this.message =
        'This member has already won or this month is completed.';

      this.checkMonthlySpin();

      this.drawWheel();

      return;
    }

    const winner: Winner = {

      month: this.selectedMonth,

      name: winnerName,

      spinner: this.authorizedSpinner,

      contribution: this.contribution,

      totalCollection: this.totalCollection,

      date: new Date().toISOString()

    };

    this.winners.unshift(winner);

    this.currentWinner = winnerName;

    this.hasSpunThisMonth = true;

    this.spinning = false;

    this.saveData();

    this.drawWheel();
  }

  // MONTH CHANGE
  onMonthChange(): void {

    this.checkMonthlySpin();

    this.message = '';

    this.drawWheel();
  }

  // DOWNLOAD CSV
  downloadCSV(): void {

    if (!this.winners.length) {
      return;
    }

    const headers = [
      'Month',
      'Winner',
      'Authorized Spinner',
      'Contribution Per Member',
      'Total Collection',
      'Date'
    ];

    const rows = this.winners.map(winner => [
      winner.month,
      winner.name,
      winner.spinner,
      winner.contribution,
      winner.totalCollection,
      winner.date
    ]);

    const csv = [
      headers,
      ...rows
    ].map(row =>
      row.map(value =>
        `"${String(value).replace(/"/g, '""')}"`
      ).join(',')
    ).join('\n');

    const blob = new Blob(
      [csv],
      {
        type: 'text/csv;charset=utf-8;'
      }
    );

    const url = URL.createObjectURL(blob);

    const link = document.createElement('a');

    link.href = url;

    link.download =
      'monthly-lucky-spin-winners.csv';

    link.click();

    URL.revokeObjectURL(url);
  }

}
