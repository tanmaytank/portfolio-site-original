import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, NgForm, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';
import { environment } from '../../../environments/environment';
import { CommonModule } from '@angular/common';
import { forbiddenEmailDomainValidator } from '../Model/Validator';

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
    private _snackBar: MatSnackBar
  ) { }

  contactForm = this._fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    subject: ['', Validators.required],
    message: ['', Validators.required]
  });

  isFieldInvalid(field: string): boolean {
    const control = this.contactForm.get(field);
    return (control?.invalid && control?.touched) ?? false;
  }

  sendEmail() {
    const formValue = this.contactForm.value;
    const email = (formValue.email ?? '').trim();

    if (this.isTemporaryEmail(email)) {
      this.showSnackBar('Temporary email addresses are not allowed.', 'warn');
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
      this.showSnackBar('Message sent successfully!', 'success');
      this.contactForm.reset();
    }, (error) => {
      this.showSnackBar('Message failed to send. Please try again.', 'error');
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

  private showSnackBar(message: string, type: 'warn' | 'success' | 'error'): void {
    const panelClassMap = {
      warn: 'mat-warn',
      success: 'mat-success',
      error: 'mat-error'
    };

    this._snackBar.open(message, 'Close', {
      duration: 4000,
      panelClass: [panelClassMap[type]]
    });
  }

}
