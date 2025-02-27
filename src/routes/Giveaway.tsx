import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Header } from '@/components/shared/Header';
import { Footer } from '@/components/shared/Footer';
import { Toaster } from '@/components/ui/toaster';
import { Gift, Clock, Users, Star, CheckCircle, ArrowRight, Bot, DollarSign, Calendar, FileText, MessageSquare } from 'lucide-react';
import CountUp from 'react-countup';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { useToast } from '@/components/ui/use-toast';

const giveawayFormSchema = z.object({
  practiceName: z.string().min(1, 'Practice name is required'),
  contactName: z.string().min(1, 'Contact name is required'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(10, 'Phone number must be at least 10 digits'),
  practiceSize: z.string().min(1, 'Practice size is required'),
  practiceAge: z.string().min(1, 'Practice age is required'),
  currentChallenges: z.string().min(1, 'Please describe your current challenges'),
  whyWin: z.string().min(1, 'Please tell us why you should win'),
  referrals: z.array(z.string()).optional(),
  terms: z.boolean().refine((val) => val === true, 'You must accept the terms'),
});

type GiveawayFormData = z.infer<typeof giveawayFormSchema>;

const GiveawayPage = () => {
  const [timeLeft, setTimeLeft] = React.useState({
    days: 30,
    hours: 23,
    minutes: 59,
    seconds: 59
  });

  React.useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const { toast } = useToast();
  const form = useForm<GiveawayFormData>({
    resolver: zodResolver(giveawayFormSchema),
    defaultValues: {
      practiceName: '',
      contactName: '',
      email: '',
      phone: '',
      practiceSize: '',
      practiceAge: '',
      currentChallenges: '',
      whyWin: '',
      referrals: [],
      terms: false,
    },
  });

  const onSubmit = async (data: GiveawayFormData) => {
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      toast({
        title: "Application Submitted!",
        description: "Thank you for entering. We'll contact you shortly.",
      });
      
      form.reset();
    } catch (error) {
      toast({
        title: "Error",
        description: "There was an error submitting your application. Please try again.",
        variant: "destructive",
      });
    }
  };

  const benefits = [
    {
      icon: Gift,
      title: "Complete AI Automation Package",
      description: "Full suite of AI tools valued at $50,000 to transform your practice operations."
    },
    {
      icon: Bot,
      title: "AI Voice Assistant",
      description: "24/7 intelligent voice system for patient communication and scheduling."
    },
    {
      icon: DollarSign,
      title: "Revenue Growth Tools",
      description: "AI-powered systems for patient reactivation and treatment plan acceptance."
    },
    {
      icon: Calendar,
      title: "Smart Scheduling",
      description: "Automated appointment management and optimization system."
    },
    {
      icon: FileText,
      title: "Documentation AI",
      description: "Intelligent system for managing patient records and documentation."
    },
    {
      icon: MessageSquare,
      title: "Patient Communication",
      description: "Automated patient engagement and follow-up system."
    }
  ];

  return (
    <>
      <Helmet>
        <title>$50K AI Automation Giveaway | AIDENTIST</title>
        <meta name="description" content="Enter to win a $50,000 AI automation package for your dental practice. Transform your operations with cutting-edge AI technology." />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-[#1E3A8A] via-[#1E40AF] to-[#1E3A8A]">
        <Header transparent={false} />
        
        <main className="pt-20">
          {/* Hero Section */}
          <section className="relative py-24 overflow-hidden">
            <div className="absolute inset-0 bg-grid-pattern opacity-20" />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center mb-12"
              >
                <span className="inline-block px-4 py-2 rounded-full bg-[#00A6E6]/10 text-[#00A6E6] text-sm font-medium mb-6">
                  Limited Time Opportunity
                </span>
                <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                  Win a $50,000 AI Automation Package
                </h1>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Transform your dental practice with cutting-edge AI technology. Enter our giveaway for a chance to win a complete automation solution.
                </p>
              </motion.div>

              {/* Countdown Timer */}
              <div className="flex justify-center gap-8 mb-12">
                {[
                  { label: 'Days', value: timeLeft.days },
                  { label: 'Hours', value: timeLeft.hours },
                  { label: 'Minutes', value: timeLeft.minutes },
                  { label: 'Seconds', value: timeLeft.seconds }
                ].map((item) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-white/10 backdrop-blur-md rounded-xl p-6 min-w-[120px] text-center"
                  >
                    <div className="text-4xl font-bold text-[#00f3ff] mb-2 filter drop-shadow-[0_0_8px_rgba(0,243,255,0.6)]">
                      {item.value.toString().padStart(2, '0')}
                    </div>
                    <div className="text-gray-300 font-medium">{item.label}</div>
                  </motion.div>
                ))}
              </div>

              {/* Entry Form */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="max-w-2xl mx-auto bg-white/10 backdrop-blur-md rounded-2xl p-8 border-[3px] border-transparent transition-all duration-300 hover:border-[#00f3ff] hover:shadow-[-4px_0_8px_rgba(0,243,255,0.6)]"
              >
                <h2 className="text-2xl font-bold text-white mb-2 text-center">Enter to Win $50,000 in AI Automation</h2>
                <p className="text-gray-300 text-center mb-8">Complete the form below to transform your dental practice with cutting-edge AI technology</p>
                
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="practiceName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-white">Practice Name</FormLabel>
                            <FormControl>
                              <Input
                                {...field}
                                className="bg-white/10 border-white/20 text-white"
                                placeholder="Enter practice name"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="contactName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-white">Contact Name</FormLabel>
                            <FormControl>
                              <Input
                                {...field}
                                className="bg-white/10 border-white/20 text-white"
                                placeholder="Enter your name"
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
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-white">Email</FormLabel>
                            <FormControl>
                              <Input
                                {...field}
                                type="email"
                                className="bg-white/10 border-white/20 text-white"
                                placeholder="you@example.com"
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
                                type="tel"
                                className="bg-white/10 border-white/20 text-white"
                                placeholder="(555) 555-5555"
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
                        name="practiceSize"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-white">Practice Size</FormLabel>
                            <FormControl>
                              <select
                                {...field}
                                className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white"
                              >
                                <option value="">Select size</option>
                                <option value="solo">Solo Practice</option>
                                <option value="small">2-5 Providers</option>
                                <option value="medium">6-10 Providers</option>
                                <option value="large">11+ Providers</option>
                              </select>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="practiceAge"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-white">Years Established</FormLabel>
                            <FormControl>
                              <Input
                                {...field}
                                className="bg-white/10 border-white/20 text-white"
                                placeholder="e.g., 5 years"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="currentChallenges"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white">Current Practice Challenges</FormLabel>
                          <FormControl>
                            <Textarea
                              {...field}
                              className="bg-white/10 border-white/20 text-white min-h-[100px]"
                              placeholder="Describe the challenges you're facing in your practice..."
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="whyWin"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white">Why Should Your Practice Win?</FormLabel>
                          <FormControl>
                            <Textarea
                              {...field}
                              className="bg-white/10 border-white/20 text-white min-h-[100px]"
                              placeholder="Tell us why your practice would benefit most from AI automation..."
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="terms"
                      render={({ field }) => (
                        <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                          <FormControl>
                            <Checkbox
                              checked={field.value}
                              onCheckedChange={field.onChange}
                            />
                          </FormControl>
                          <div className="space-y-1 leading-none">
                            <FormLabel className="text-sm text-gray-300">
                              I agree to the terms and conditions and consent to receive communications
                            </FormLabel>
                            <FormMessage />
                          </div>
                        </FormItem>
                      )}
                    />

                    <button
                      type="submit"
                      className="w-full bg-[#00A6E6] hover:bg-[#0095D1] text-white py-3 rounded-lg font-medium transition-all duration-300 flex items-center justify-center group"
                    >
                      Submit Your Entry
                      <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </form>
                </Form>
              </motion.div>
            </div>
          </section>

          {/* Benefits Section */}
          <section className="py-24 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 className="text-3xl font-bold text-white mb-6">
                  The $50,000 AI Automation Package Includes:
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  A comprehensive suite of AI-powered tools designed to revolutionize your dental practice
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {benefits.map((benefit, index) => {
                  const Icon = benefit.icon;
                  return (
                    <motion.div
                      key={benefit.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border-[3px] border-transparent transition-all duration-300 hover:border-[#00f3ff] hover:shadow-[-4px_0_8px_rgba(0,243,255,0.6)]"
                    >
                      <div className="w-12 h-12 bg-[#00A6E6]/20 rounded-xl flex items-center justify-center mb-6">
                        <Icon className="w-6 h-6 text-[#00f3ff]" />
                      </div>
                      <h3 className="text-xl font-bold text-white mb-4">{benefit.title}</h3>
                      <p className="text-gray-300">{benefit.description}</p>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* Stats Section */}
          <section className="py-16 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                {[
                  { value: 35, suffix: '%', label: 'Increase in Efficiency' },
                  { value: 40, suffix: '%', label: 'Cost Reduction' },
                  { value: 24, suffix: 'hrs', label: 'Time Saved Weekly' },
                  { value: 95, suffix: '%', label: 'Customer Satisfaction' }
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white/10 backdrop-blur-md rounded-xl p-6 text-center border-[3px] border-transparent transition-all duration-300 hover:border-[#00f3ff] hover:shadow-[-4px_0_8px_rgba(0,243,255,0.6)]"
                  >
                    <div className="text-3xl font-bold text-[#00f3ff] mb-2 filter drop-shadow-[0_0_8px_rgba(0,243,255,0.6)]">
                      <CountUp end={stat.value} suffix={stat.suffix} duration={2} />
                    </div>
                    <p className="text-gray-300">{stat.label}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        </main>

        <Footer />
        <Toaster />
      </div>
    </>
  );
};

export default GiveawayPage