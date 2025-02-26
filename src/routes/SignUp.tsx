import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Loader2, Bot, ArrowRight } from 'lucide-react';
import { Header } from '@/components/shared/Header';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { trackEvent } from '@/lib/analytics';

const signUpSchema = z.object({
  email: z.string()
    .min(1, 'Email is required')
    .email('Invalid email address'),
  username: z.string()
    .min(3, 'Username must be at least 3 characters')
    .max(20, 'Username must be less than 20 characters')
    .regex(/^[a-zA-Z0-9_-]+$/, 'Username can only contain letters, numbers, underscores, and hyphens'),
  password: z.string()
    .min(8, 'Password must be at least 8 characters')
    .regex(/[A-Z]/, 'Password must contain at least one uppercase letter')
    .regex(/[0-9]/, 'Password must contain at least one number')
    .regex(/[^a-zA-Z0-9]/, 'Password must contain at least one special character'),
  confirmPassword: z.string()
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
});

type SignUpFormData = z.infer<typeof signUpSchema>;

const SignUp = () => {
  const { toast } = useToast();
  const form = useForm<SignUpFormData>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      email: '',
      username: '',
      password: '',
      confirmPassword: ''
    }
  });

  const onSubmit = async (data: SignUpFormData) => {
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Redirect to lead form setup
      window.location.href = '/setup';

      trackEvent('signup_success', {
        hasUsername: true,
        hasValidPassword: true
      });

      form.reset();
    } catch (error) {
      trackEvent('signup_error', {
        error: (error as Error).message
      });

      toast({
        title: 'Error',
        description: 'Something went wrong. Please try again.',
        variant: 'destructive',
      });
    }
  };

  return (
    <>
      <Helmet>
        <title>Sign Up | AIDENTIST</title>
        <meta name="description" content="Create your AIDENTIST account to access AI-powered dental practice management tools." />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-[#1E3A8A] via-[#1E40AF] to-[#1E3A8A]">
        <Header transparent={false} showDemoButton={false} />
        
        <div className="pt-32 pb-12">
          <div className="max-w-md mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-8"
            >
              <div className="flex justify-center mb-6">
                <div className="relative w-16 h-16">
                  <div className="absolute inset-0 rounded-2xl bg-[#00A6E6] shadow-lg flex items-center justify-center">
                    <Bot className="w-8 h-8 text-white" />
                  </div>
                  <div className="absolute inset-0 rounded-2xl animate-pulse bg-white/20" />
                </div>
              </div>
              <h1 className="text-3xl font-bold text-white mb-3">Create Your Account</h1>
              <p className="text-gray-300">Join AIDENTIST to transform your dental practice</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 shadow-xl p-8"
            >
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
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
                            placeholder="you@example.com"
                            className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="username"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white">Username</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            placeholder="johndoe"
                            className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white">Password</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            type="password"
                            placeholder="••••••••"
                            className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="confirmPassword"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white">Confirm Password</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            type="password"
                            placeholder="••••••••"
                            className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button
                    type="submit"
                    className="w-full bg-[#00A6E6] hover:bg-[#0095D1] text-white"
                    disabled={form.formState.isSubmitting}
                  >
                    {form.formState.isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Creating Account...
                      </>
                    ) : (
                      <>
                        Create Account
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </>
                    )}
                  </Button>
                </form>
              </Form>

              <div className="mt-6 text-center">
                <p className="text-sm text-gray-300">
                  Already have an account?{' '}
                  <a href="/login" className="text-[#00A6E6] hover:underline">
                    Sign in
                  </a>
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="mt-6 text-center text-sm text-gray-400"
            >
              By signing up, you agree to our{' '}
              <a href="/terms" className="text-[#00A6E6] hover:underline">
                Terms of Service
              </a>{' '}
              and{' '}
              <a href="/privacy" className="text-[#00A6E6] hover:underline">
                Privacy Policy
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;