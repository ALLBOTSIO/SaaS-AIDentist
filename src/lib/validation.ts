import { z } from 'zod';

export const seoScanFormSchema = z.object({
  businessName: z.string().min(1, 'Business name is required'),
  website: z.string().url('Please enter a valid website URL'),
  phone: z.string().regex(/^\d{3}-\d{3}-\d{4}$/, 'Phone must be in format: XXX-XXX-XXXX'),
  email: z.string().email('Invalid email address'),
});

export const contactFormSchema = z.object({
  practiceName: z.string()
    .min(1, 'Practice name is required')
    .max(100, 'Practice name must be less than 100 characters'),
  contactPerson: z.string()
    .min(1, 'Contact person is required')
    .max(50, 'Contact person must be less than 50 characters'),
  email: z.string()
    .min(1, 'Email is required')
    .email('Invalid email address'),
  phone: z.string()
    .min(1, 'Phone number is required')
    .regex(/^\d{3}-\d{3}-\d{4}$/, 'Phone must be in format: XXX-XXX-XXXX'),
  locations: z.number()
    .min(1, 'Must have at least 1 location')
    .max(999, 'Cannot exceed 999 locations'),
  message: z.string()
    .min(1, 'Message is required')
    .max(500, 'Message must be less than 500 characters'),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;