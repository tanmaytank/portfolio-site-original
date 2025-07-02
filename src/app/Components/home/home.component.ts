import { Component, OnInit } from '@angular/core';
import Typed from 'typed.js';
import * as AOS from 'aos';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';
import { environment } from '../../../environments/environment';
import { AboutComponent } from "../about/about.component";
import { SkillsComponent } from "../skills/skills.component";
import { ResumeComponent } from "../resume/resume.component";
import { PortfolioComponent } from "../portfolio/portfolio.component";
import { ContactComponent } from "../contact/contact.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule, AboutComponent, SkillsComponent, ResumeComponent, PortfolioComponent, ContactComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

  formModel = {
    name: '',
    email: '',
    subject: '',
    message: '',
    date: '',
  };

  ngOnInit(): void {
    AOS.init();
    const options = {
      strings: ['Architecture Designer', 'Frontend Developer', 'Backend Developer', 'SQL Expert'],
      typeSpeed: 100,
      backSpeed: 50,
      loop: true
    };
    const typed = new Typed('.typed', options);

  }

  leftSkills = [
    { name: 'C#', level: 95 },
    { name: 'JavaScript', level: 90 },
    { name: 'TypeScript', level: 85 },
    { name: 'SQL', level: 90 },
    { name: 'PostgreSQL', level: 80 }
  ];

  rightSkills = [
    { name: '.NET Core / ASP.NET MVC', level: 95 },
    { name: 'Entity Framework Core / LINQ', level: 90 },
    { name: 'Dapper', level: 80 },
    { name: 'Angular / Angular Material', level: 85 },
    { name: 'Microservices Architecture', level: 80 }
  ];

  sendEmail() {
    const now = new Date();

    const formatDate = (date: Date) => {
      const day = String(date.getDate()).padStart(2, '0');
      const month = String(date.getMonth() + 1).padStart(2, '0');
      const year = date.getFullYear();

      let hours = date.getHours();
      const minutes = String(date.getMinutes()).padStart(2, '0');
      const ampm = hours >= 12 ? 'PM' : 'AM';
      hours = hours % 12 || 12;

      return `${day}-${month}-${year}, ${hours}:${minutes} ${ampm}`;
    };

    const formattedDateTime = formatDate(now);

    const templateParams = {
      Subject: this.formModel.subject,
      name: this.formModel.name,
      message: this.formModel.message,
      email: this.formModel.email,
      date: formattedDateTime
    };

    emailjs.send(
      environment.emailJS.serviceID,
      environment.emailJS.templateID,
      templateParams,
      environment.emailJS.publicKey,
    ).then((result: EmailJSResponseStatus) => {
      console.log('SUCCESS!', result.status, result.text, result);
      this.formModel = {
        name: '',
        email: '',
        subject: '',
        message: '',
        date: '',
      };
    }, (error) => {
      console.error('FAILED...', error);
    });
  }

}
