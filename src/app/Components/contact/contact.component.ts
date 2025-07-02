import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';
import { environment } from '../../../environments/environment';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  formModel = {
    name: '',
    email: '',
    subject: '',
    message: '',
    date: '',
  };

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
