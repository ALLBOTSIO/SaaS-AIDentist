import React from 'react';
import { motion } from 'framer-motion';
import { Building2, TrendingUp, Users, MapPin, Stethoscope, LineChart, Lock } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const valuationFormSchema = z.object({
  practiceName: z.string().min(1, 'Practice name is required'),
  ownerName: z.string().min(1, 'Owner name is required'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(10, 'Phone number must be at least 10 digits'),
  annualRevenue: z.string().min(1, 'Annual revenue is required'),
  locations: z.string().min(1, 'Number of locations is required'),
  state: z.string().min(1, 'State is required'),
  message: z.string().optional(),
});

const factors = [
  {
    icon: TrendingUp,
    title: 'Revenue & Profitability',
    description: 'Analysis of historical financial performance and growth trends'
  },
  {
    icon: Users,
    title: 'Patient Base',
    description: 'Evaluation of patient demographics, retention rates, and growth potential'
  },
  {
    icon: MapPin,
    title: 'Location Value',
    description: 'Assessment of market dynamics and geographic positioning'
  },
  {
    icon: Stethoscope,
    title: 'Equipment & Technology',
    description: 'Inventory of modern equipment and digital infrastructure'
  },
  {
    icon: Building2,
    title: 'Operational Efficiency',
    description: 'Review of systems, processes, and staff structure'
  },
  {
    icon: LineChart,
    title: 'Growth Potential',
    description: 'Evaluation of expansion opportunities and market trends'
  }
];

export const DSOValuation = () => {
  const { toast } = useToast();
  const form = useForm({
    resolver: zodResolver(valuationFormSchema),
    defaultValues: {
      practiceName: '',
      ownerName: '',
      email: '',
      phone: '',
      annualRevenue: '',
      locations: '',
      state: '',
      message: '',
    },
  });

  const onSubmit = async (data: z.infer<typeof valuationFormSchema>) => {
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      toast({
        title: "Valuation Request Received",
        description: "Our team will contact you within 24 hours to discuss your practice valuation.",
      });
      
      form.reset();
    } catch (error) {
      toast({
        title: "Error",
        description: "There was an error submitting your request. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <section className="relative py-16 sm:py-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Discover Your Dental Practice's True Value
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Get a confidential, no-obligation assessment of your practice's market value from industry experts who understand the unique factors that drive DSO acquisitions.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Valuation Factors */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
              Our Comprehensive Valuation Considers:
            </h3>
            
            <div className="grid sm:grid-cols-2 gap-6">
              {factors.map((factor, index) => {
                const Icon = factor.icon;
                return (
                  <motion.div
                    key={factor.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex gap-4 p-4 bg-white dark:bg-gray-800 rounded-xl shadow-sm"
                  >
                    <div className="flex-shrink-0">
                      <div className="p-2 bg-[#00A6E6]/10 rounded-lg">
                        <Icon className="w-5 h-5 text-[#00A6E6]" />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 dark:text-white">
                        {factor.title}
                      </h4>
                      <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                        {factor.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Valuation Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8"
          >
            <div className="flex items-center gap-2 mb-6">
              <Lock className="w-5 h-5 text-[#00A6E6]" />
              <span className="text-sm text-gray-600 dark:text-gray-400">
                Your information is secure and confidential
              </span>
            </div>

            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="practiceName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Practice Name</FormLabel>
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="ownerName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Owner Name</FormLabel>
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input type="email" {...field} />
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
                          <Input type="tel" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid sm:grid-cols-3 gap-4">
                  <FormField
                    control={form.control}
                    name="annualRevenue"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Annual Revenue</FormLabel>
                        <FormControl>
                          <Input {...field} placeholder="$" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="locations"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Locations</FormLabel>
                        <FormControl>
                          <Input type="number" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="state"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>State</FormLabel>
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Additional Information (Optional)</FormLabel>
                      <FormControl>
                        <Textarea
                          {...field}
                          placeholder="Share any additional details about your practice..."
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  className="w-full bg-[#00A6E6] hover:bg-[#0095D1] text-white"
                  size="lg"
                >
                  Get Your Free Valuation
                </Button>

                <p className="text-center text-sm text-gray-500 dark:text-gray-400">
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