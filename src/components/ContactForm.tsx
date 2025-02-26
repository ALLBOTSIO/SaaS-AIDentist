import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { motion } from 'framer-motion';
import { Loader2 } from 'lucide-react';

import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useToast } from '@/components/ui/use-toast';
import { contactFormSchema, type ContactFormData } from '@/lib/validation';
import { useLoadingState } from '@/lib/hooks/useLoadingState';
import { useErrorHandler } from '@/lib/hooks/useErrorHandler';
import { trackFormSubmission } from '@/lib/analytics';
import { CONTACT_FORM_ID } from '@/lib/constants';

const ContactForm = () => {
  const { toast } = useToast();
  const { isLoading, withLoading } = useLoadingState();
  const { handleError } = useErrorHandler();

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      practiceName: '',
      contactPerson: '',
      email: '',
      phone: '',
      locations: 1,
      message: '',
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      await withLoading(
        // Simulate API call
        new Promise((resolve) => setTimeout(resolve, 2000))
      );
      
      trackFormSubmission(CONTACT_FORM_ID, true);
      
      toast({
        title: "Success!",
        description: "Your message has been sent successfully.",
      });
      
      form.reset();
    } catch (error) {
      handleError(error);
      trackFormSubmission(CONTACT_FORM_ID, false);
      
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <section className="py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mx-auto"
        >
          <Card className="relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10" />
            <CardHeader className="relative">
              <CardTitle className="text-3xl font-bold text-center">Contact Us</CardTitle>
              <CardDescription className="text-center">
                Get in touch with us to learn more about our dental practice solutions
              </CardDescription>
            </CardHeader>
            <CardContent className="relative">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="practiceName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Practice Name</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            maxLength={100}
                            placeholder="Enter your practice name"
                            aria-label="Practice name"
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
                        <FormLabel>Contact Person</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            maxLength={50}
                            placeholder="Enter contact person's name"
                            aria-label="Contact person"
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
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              type="email"
                              placeholder="your@email.com"
                              aria-label="Email address"
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
                          <FormLabel>Phone</FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              placeholder="801-674-6229"
                              aria-label="Phone number"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="locations"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Number of Locations</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            type="number"
                            min={1}
                            max={999}
                            onChange={e => field.onChange(parseInt(e.target.value))}
                            aria-label="Number of locations"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                          <Textarea
                            {...field}
                            maxLength={500}
                            rows={4}
                            placeholder="Tell us about your practice and requirements"
                            aria-label="Message"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button
                    type="submit"
                    className="w-full"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      'Send Message'
                    )}
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default React.memo(ContactForm);