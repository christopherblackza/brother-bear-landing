import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { InputTextModule } from 'primeng/inputtext';
import { TextareaModule } from 'primeng/textarea';
import { SelectModule } from 'primeng/select';
import { ButtonModule } from 'primeng/button';
import { FloatLabelModule } from 'primeng/floatlabel';
import { MessageModule } from 'primeng/message';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    ReactiveFormsModule, 
    CommonModule,
    InputTextModule,
    TextareaModule,
    SelectModule,
    ButtonModule,
    FloatLabelModule,
    MessageModule
  ],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  contactForm!: FormGroup;
  isSubmitting = false;
  
  budgetOptions = [
    { label: 'Select Budget', value: null },
    { label: 'Under $5,000', value: 'under-5k' },
    { label: '$5,000 - $10,000', value: '5k-10k' },
    { label: '$10,000 - $25,000', value: '10k-25k' },
    { label: '$25,000 - $50,000', value: '25k-50k' },
    { label: '$50,000+', value: '50k-plus' }
  ];

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.initializeForm();
  }

  private initializeForm(): void {
    this.contactForm = this.fb.group({
      visitor_name: ['', [Validators.required, Validators.minLength(2)]],
      visitor_email: ['', [Validators.required, Validators.email]],
      subject: ['', [Validators.required, Validators.minLength(5)]],
      message: ['', [Validators.required, Validators.minLength(10)]],
      phonenumber: ['', [Validators.pattern(/^[+]?[0-9\s\-\(\)]{10,}$/)]],
      budget: [null]
    });
  }

  onSubmit(): void {
    if (this.contactForm.valid) {
      this.isSubmitting = true;
      
      const formData = {
        visitor_name: this.contactForm.value.visitor_name,
        visitor_email: this.contactForm.value.visitor_email,
        message: this.contactForm.value.message,
        subject: this.contactForm.value.subject,
        phonenumber: this.contactForm.value.phonenumber,
        budget: this.contactForm.value.budget
      };

      // Here you would typically send the data to a service
      console.log('Contact Form Data:', formData);
      
      // Simulate API call
      setTimeout(() => {
        this.isSubmitting = false;
        // Reset form or show success message
        this.contactForm.reset();
      }, 2000);
    } else {
      this.markFormGroupTouched();
    }
  }

  private markFormGroupTouched(): void {
    Object.keys(this.contactForm.controls).forEach(key => {
      this.contactForm.get(key)?.markAsTouched();
    });
  }

  getFieldError(fieldName: string): string {
    const control = this.contactForm.get(fieldName);
    if (control?.errors && control.touched) {
      if (control.errors['required']) {
        return `${this.getFieldLabel(fieldName)} is required`;
      }
      if (control.errors['email']) {
        return 'Please enter a valid email address';
      }
      if (control.errors['minlength']) {
        return `${this.getFieldLabel(fieldName)} must be at least ${control.errors['minlength'].requiredLength} characters`;
      }
      if (control.errors['pattern']) {
        return 'Please enter a valid phone number';
      }
    }
    return '';
  }

  private getFieldLabel(fieldName: string): string {
    const labels: { [key: string]: string } = {
      visitor_name: 'Name',
      visitor_email: 'Email',
      subject: 'Subject',
      message: 'Message',
      phonenumber: 'Phone number'
    };
    return labels[fieldName] || fieldName;
  }

  isFieldInvalid(fieldName: string): boolean {
    const control = this.contactForm.get(fieldName);
    return !!(control?.invalid && control?.touched);
  }
}