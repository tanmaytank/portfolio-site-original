import { AbstractControl, ValidationErrors } from '@angular/forms';

const blockedDomains = [
  'mailinator.com', 'tempmail.com', '10minutemail.com',
  'yopmail.com', 'guerrillamail.com', 'trashmail.com'
];

export function forbiddenEmailDomainValidator(control: AbstractControl): ValidationErrors | null {
  const email = control.value;
  if (!email) return null;

  const domain = email.split('@')[1]?.toLowerCase();
  if (domain && blockedDomains.includes(domain)) {
    return { forbiddenDomain: true };
  }

  return null;
}
