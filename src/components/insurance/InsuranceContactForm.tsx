import React from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Loader2, CheckCircle2 } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useToast } from '@/components/ui/use-toast';
import { trackFormSubmission } from '@/lib/analytics';

const painPoints = [
  {
    id: 'insurance-verification',
    label: 'Insurance Verification Time'
  },
  {
    id: 'staff-turnover',
    label: 'Staff Turnover'
  },
  {
    id: 'write-offs',
    label: 'Write-offs'
  },
  {
    id: 'patient-wait',
    label: 'Patient Wait Times'
  },
  {
    id: 'admin-burden',
    label: 'Administrative Burden'
  }
] as const;

const formSchema = z.object({
  practiceName: z.string().min(1, 'Practice name is required'),
  contactPerson: z.string().min(1, 'Contact person is required'),
  email: z.string().email('Invalid email address'),
  phone: z.string().regex(/^\d{3}-\d{3}-\d{4}$/, 'Phone must be in format: XXX-XXX-XXXX'),
  locations: z.string().min(1, 'Number of locations is required'),
  currentSoftware: z.string().min(1, 'Current software is required'),
  preferredTime: z.string().min(1, 'Preferred contact time is required'),
  painPoints: z.array(z.string()).min(1, 'Select at least one pain point')
});

type FormData = z.infer<typeof formSchema>;

const contactTimes = [
  { value: 'morning', label: 'Morning (9AM - 12PM)' },
  { value: 'afternoon', label: 'Afternoon (12PM - 4PM)' },
  { value: 'evening', label: 'Evening (4PM - 6PM)' }
];

const locationOptions = [
  { value: '1', label: '1 Location' },
  { value: '2-5', label: '2-5 Locations' },
  { value: '6-10', label: '6-10 Locations' },
  { value: '11+', label: '11+ Locations' }
];

export const InsuranceContactForm = () => {
  const { toast } = useToast();
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      practiceName: '',
      contactPerson: '',
      email: '',
      phone: '',
      locations: '',
      currentSoftware: '',
      preferredTime: '',
      painPoints: []
    }
  });

  const onSubmit = async (data: FormData) => {
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      trackFormSubmission('insurance_contact_form', true);
      
      toast({
        title: "Success!",
        description: "Thank you for your interest. We'll contact you shortly.",
      });
      
      form.reset();
    } catch (error) {
      trackFormSubmission('insurance_contact_form', false);
      
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1E3A8A] via-[#1E40AF] to-[#1E3A8A]" />
      <div className="absolute inset-0 bg-grid-pattern opacity-20" />
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.15, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#60A5FA]/20 rounded-full blur-3xl transform translate-x-1/3 -translate-y-1/3"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.1, scale: 1 }}
        transition={{ duration: 1.5, delay: 0.2, ease: "easeOut" }}
        className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#93C5FD]/20 rounded-full blur-3xl transform -translate-x-1/3 translate-y-1/3"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-xl p-8 lg:p-12 transform hover:scale-[1.01] transition-all duration-300"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-[#00A6E6]/10 text-[#00A6E6] text-sm font-medium mb-6">
            Get Started
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Transform Your Insurance Verification Process
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Fill out the form below and one of our specialists will contact you to discuss how we can help streamline your practice.
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-xl p-8"
          >
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="practiceName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white">Practice Name</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          placeholder="Enter your practice name"
                          className="w-full bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="contactPerson"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white">Contact Person</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          placeholder="Full name"
                          className="w-full bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white">Email</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            type="email"
                            placeholder="your@email.com"
                            className="w-full bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white">Phone</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            placeholder="XXX-XXX-XXXX"
                            className="w-full bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="locations"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Number of Locations</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select locations" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {locationOptions.map(option => (
                              <SelectItem key={option.value} value={option.value}>
                                {option.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="currentSoftware"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Current Software Used</FormLabel>
                        <FormControl>
                          <Input {...field} placeholder="e.g., Dentrix, Open Dental" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="preferredTime"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Preferred Contact Time</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select preferred time" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {contactTimes.map(time => (
                            <SelectItem key={time.value} value={time.value}>
                              {time.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="painPoints"
                  render={() => (
                    <FormItem>
                      <FormLabel>Primary Pain Points</FormLabel>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                        {painPoints.map((point) => (
                          <FormField
                            key={point.id}
                            control={form.control}
                            name="painPoints"
                            render={({ field }) => {
                              return (
                                <FormItem
                                  key={point.id}
                                  className="flex flex-row items-start space-x-3 space-y-0"
                                >
                                  <FormControl>
                                    <Checkbox
                                      checked={field.value?.includes(point.id)}
                                      onCheckedChange={(checked) => {
                                        return checked
                                          ? field.onChange([...field.value, point.id])
                                          : field.onChange(
                                              field.value?.filter(
                                                (value) => value !== point.id
                                              )
                                            )
                                      }}
                                    />
                                  </FormControl>
                                  <FormLabel className="font-normal">
                                    {point.label}
                                  </FormLabel>
                                </FormItem>
                              )
                            }}
                          />
                        ))}
                      </div>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  className="w-full bg-[#00A6E6] hover:bg-[#0095D1] text-white transform hover:-translate-y-0.5 transition-all duration-200 shadow-lg hover:shadow-xl"
                  disabled={form.formState.isSubmitting}
                >
                  {form.formState.isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    'Get Started'
                  )}
                </Button>

                <p className="text-center text-sm text-gray-500 mt-4">
                  By submitting this form, you agree to our{' '}
                  <a href="/privacy" className="text-[#00A6E6] hover:underline">
                    privacy policy
                  </a>
                </p>
              </form>
            </Form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};