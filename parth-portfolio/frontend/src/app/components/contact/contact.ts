import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { LucideAngularModule, Mail, Phone, MapPin, Send, MessageSquare } from 'lucide-angular';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, LucideAngularModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  private http = inject(HttpClient);

  readonly MailIcon = Mail;
  readonly PhoneIcon = Phone;
  readonly MapIcon = MapPin;
  readonly SendIcon = Send;
  readonly MsgIcon = MessageSquare;

  contactInfo = [
    {
      icon: this.MailIcon,
      label: 'Email',
      value: 'parthjoshi910@gmail.com',
      link: 'mailto:parthjoshi910@gmail.com'
    },
    {
      icon: this.PhoneIcon,
      label: 'Phone',
      value: '+91 8200862626',
      link: 'tel:+918200862626'
    },
    {
      icon: this.MapIcon,
      label: 'Location',
      value: 'Porbandar, Gujarat, India',
      link: '#'
    }
  ];

  formData = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  isSubmitting = false;
  submitSuccess = false;
  submitError = '';

  onSubmit() {
    this.isSubmitting = true;
    this.submitError = '';

    this.http.post('http://localhost:5000/api/contact', this.formData)
      .subscribe({
        next: () => {
          this.isSubmitting = false;
          this.submitSuccess = true;
          this.formData = { name: '', email: '', subject: '', message: '' };
          setTimeout(() => this.submitSuccess = false, 5000);
        },
        error: (err) => {
          this.isSubmitting = false;
          this.submitError = err.error?.message || 'Something went wrong. Please try again.';
          setTimeout(() => this.submitError = '', 5000);
        }
      });
  }
}
