import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';
import { environment } from '../../../environments/environment';
import { CommonModule } from '@angular/common';
import { NotificationService } from '../service/notification.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

  constructor(
    private _fb: FormBuilder,
    private _notification: NotificationService
  ) { }

  contactForm = this._fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    subject: ['', Validators.required],
    message: ['', Validators.required]
  });

  sendEmail() {
    const formValue = this.contactForm.value;
    const email = (formValue.email ?? '').trim();

    if (this.isTemporaryEmail(email)) {
      this._notification.showInfo('Temporary email addresses are not allowed.');
      return;
    }

    const formattedDateTime = this.getFormattedDate();

    const templateParams = {
      Subject: formValue.subject,
      name: formValue.name,
      message: formValue.message,
      email: formValue.email,
      date: formattedDateTime
    };

    emailjs.send(
      environment.emailJS.serviceID,
      environment.emailJS.templateID,
      templateParams,
      environment.emailJS.publicKey,
    ).then((result: EmailJSResponseStatus) => {
      if (result.status === 200) {
        this.contactForm.reset();
        this._notification.showSuccess('Thank you for your message, I will get back to you as soon as possible.');
      }
    }, (error) => {
      this._notification.showError('Message failed to send. Please try again.');
      console.error('FAILED...', error);
    });
  }

  private isTemporaryEmail(email: string): boolean {
    const tempDomains = [
      'mailinator.com', 'tempmail.com', '10minutemail.com',
      'yopmail.com', 'guerrillamail.com', 'trashmail.com'
    ];
    const domain = email?.split('@')[1]?.toLowerCase();
    return domain ? tempDomains.includes(domain) : false;
  }

  private getFormattedDate(): string {
    const date = new Date();
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    let hours = date.getHours();
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12;
    return `${day}-${month}-${year}, ${hours}:${minutes} ${ampm}`;
  }

  isFieldInvalid(field: string): boolean {
    const control = this.contactForm.get(field);
    return (control?.invalid && control?.touched) ?? false;
  }

  get ContactFormVaidate() {
    return this.contactForm.controls;
  }

  private validateAllFields(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach((field) => {
      const control = formGroup.get(field);
      if (control instanceof FormControl) {
        control.markAsTouched({ onlySelf: true });
      } else if (control instanceof FormGroup) {
        this.validateAllFields(control);
      }
    });
  }

}
