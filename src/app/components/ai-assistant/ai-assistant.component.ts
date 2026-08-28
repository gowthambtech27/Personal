import {
  AfterViewChecked,
  Component,
  ElementRef,
  ViewChild
} from '@angular/core';

interface KbSection {
  label: string;
  keywords: string[];
  reply: string;
}

const PORTFOLIO_KB: Record<string, KbSection> = {
  about: {
    label: 'About',
    keywords: [
      'about',
      'who are you',
      'yourself',
      'background',
      'bio',
      'intro',
      'introduce yourself'
    ],
    reply:
      "I'm Gowtham Palanichamy, a Senior Software Engineer and Angular Developer with 7+ years of experience in building scalable and responsive web applications. I specialize in Angular, TypeScript, JavaScript, RxJS, NgRx, HTML5, CSS3, and REST APIs. I enjoy solving complex frontend problems, developing reusable components, and creating clean and user-friendly web applications."
  },

  skills: {
    label: 'Skills',
    keywords: [
      'skill',
      'skills',
      'tech stack',
      'technologies',
      'tools',
      'languages',
      'expertise',
      'stack',
      'what technologies do you know'
    ],
    reply:
      "My core technical skills include Angular, TypeScript, JavaScript (ES6+), RxJS, NgRx, HTML5, CSS3, REST APIs, Git, and responsive web development. I have strong experience in building scalable Angular applications, reusable components, complex forms, dashboards, data-driven interfaces, API integrations, and performance-optimized web applications."
  },

  projects: {
    label: 'Projects',
    keywords: [
      'project',
      'projects',
      'work',
      'portfolio',
      'built',
      'made',
      'app',
      'applications',
      'case study',
      'what have you built'
    ],
    reply:
      "I have worked on enterprise web applications focused on e-waste, battery, and recycling compliance platforms. My work includes Producer Awareness Targets, Recycler Inward and Outward POE Verification, Purchase, Invoice and GRN management, dashboards, collection management, credit management, warehouse management, team performance, OTP verification, Excel uploads, image and document uploads, and other business workflow modules. These applications were primarily developed using Angular, TypeScript, RxJS, NgRx, HTML5, CSS3, and REST APIs."
  },

  experience: {
    label: 'Experience',
    keywords: [
      'experience',
      'job',
      'work history',
      'career',
      'internship',
      'company',
      'role',
      'years of experience',
      'how much experience do you have'
    ],
    reply:
      "I have 7+ years of professional experience as a Front-End Developer and Angular Developer. I have extensive experience developing scalable enterprise web applications using Angular and TypeScript. My responsibilities include feature development, reusable component development, API integration, complex form development, dashboard development, bug fixing, performance optimization, code maintenance, and delivering end-to-end frontend modules."
  },

  // contact: {
  //   label: 'Contact',
  //   keywords: [
  //     'contact',
  //     'email',
  //     'reach',
  //     'hire',
  //     'connect',
  //     'linkedin',
  //     'github',
  //     'resume',
  //     'cv',
  //     'how can I contact you'
  //   ],
  //   reply:
  //     "You can reach me at gowthampalanichamyy@gmail.com. You can connect with me through LinkedIn and GitHub, and you can find my portfolio and resume through the links available on this website. I'm open to Senior Software Engineer and Angular Developer opportunities."
  // },

  // education: {
  //   label: 'Education',
  //   keywords: [
  //     'education',
  //     'degree',
  //     'study',
  //     'college',
  //     'qualification'
  //   ],
  //   reply:
  //     "I have a background in engineering and software development. My education has provided me with a strong foundation in programming, problem solving, and software engineering."
  // },

  // location: {
  //   label: 'Location',
  //   keywords: [
  //     'location',
  //     'where are you',
  //     'city',
  //     'based',
  //     'bengaluru',
  //     'bangalore'
  //   ],
  //   reply:
  //     "I'm based in Bengaluru, Karnataka, India, and I'm open to suitable opportunities in Bengaluru as well as remote opportunities."
  // },

  // availability: {
  //   label: 'Availability',
  //   keywords: [
  //     'available',
  //     'availability',
  //     'joining',
  //     'notice period',
  //     'job',
  //     'looking for job',
  //     'open to work'
  //   ],
  //   reply:
  //     "I'm currently open to exploring suitable Senior Software Engineer and Angular Developer opportunities. Please use the contact details on my portfolio to get in touch with me."
  // }
};

const FALLBACK_REPLY =
  "I'm not sure about that yet — try asking about my #about, #skills, #projects, #experience, or #contact. You can also tap a tag below.";

const GREETING =
  'Hey! I can answer questions about my portfolio — tap a tag or just type a question.';

interface ChatMessage {
  text: string;
  sender: 'bot' | 'user';
}

@Component({
  selector: 'app-ai-assistant',
  templateUrl: './ai-assistant.component.html',
  styleUrl: './ai-assistant.component.css'
})
export class AiAssistantComponent implements AfterViewChecked {

  @ViewChild('chatBody')
  chatBody!: ElementRef<HTMLDivElement>;

  kb = PORTFOLIO_KB;
  sectionKeys = Object.keys(PORTFOLIO_KB);

  isOpen = false;
  greeted = false;
  draft = '';
  messages: ChatMessage[] = [];

  // Used to prevent unnecessary scrolling
  private shouldScroll = false;

  toggleChat(): void {
    this.isOpen = !this.isOpen;

    if (this.isOpen && !this.greeted) {
      this.messages.push({
        text: GREETING,
        sender: 'bot'
      });

      this.greeted = true;

      this.shouldScroll = true;
    }
  }

  /**
   * Called when user sends a message
   */
  handleSend(text: string): void {
    const trimmed = (text || '').trim();

    if (!trimmed) {
      return;
    }

    // Add user message
    this.messages.push({
      text: trimmed,
      sender: 'user'
    });

    this.draft = '';

    // Scroll to user message immediately
    this.shouldScroll = true;

    // Bot response
    setTimeout(() => {
      const reply = this.findReply(trimmed);

      this.messages.push({
        text: reply,
        sender: 'bot'
      });

      // Scroll again after bot response is added
      this.shouldScroll = true;
    }, 300);
  }

  /**
   * Called when clicking quick action buttons
   *
   * Example:
   * handleQuickAction('About')
   */
  handleQuickAction(sectionKey: string): void {
    const section = this.kb[sectionKey];

    if (!section) {
      return;
    }

    this.handleSend(section.label);
  }

  /**
   * Automatically scroll after Angular updates the DOM
   */
  ngAfterViewChecked(): void {
    if (this.shouldScroll) {
      this.scrollToBottom();
      this.shouldScroll = false;
    }
  }

  /**
   * Scroll chatbot body to latest message
   */
  private scrollToBottom(): void {
    if (!this.chatBody?.nativeElement) {
      return;
    }

    const element = this.chatBody.nativeElement;

    element.scrollTo({
      top: element.scrollHeight,
      behavior: 'smooth'
    });
  }

  /**
   * Find matching portfolio response
   */
  private findReply(query: string): string {
    const q = query.toLowerCase().trim();

    for (const key of this.sectionKeys) {
      const section = this.kb[key];

      if (
        section.keywords.some(keyword =>
          q.includes(keyword.toLowerCase())
        )
      ) {
        return section.reply;
      }
    }

    return FALLBACK_REPLY;
  }
}
