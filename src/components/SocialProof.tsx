import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
  {
    quote: "The AI system has revolutionized how we handle patient communications. We've seen a 45% reduction in no-shows.",
    author: "Dr. Sarah Chen",
    role: "Practice Owner",
    practice: "Bright Smile Dental",
    rating: 5
  },
  {
    quote: "Implementation was smooth, and the ROI was evident within the first month. Our staff can now focus on patient care.",
    author: "Dr. Michael Rodriguez",
    role: "Clinical Director",
    practice: "Advanced Dental Care",
    rating: 5
  },
  {
    quote: "The voice AI handles after-hours calls perfectly. Our patient satisfaction scores have never been higher.",
    author: "Dr. Emily Thompson",
    role: "Managing Partner",
    practice: "Family First Dental",
    rating: 5
  }
];

const logos = [
  { name: 'Dental Today', url: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9' },
  { name: 'Dentistry Weekly', url: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9' },
  { name: 'Dental Practice News', url: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9' }
];

export const SocialProof = () => {
  return (
    <section className="py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Trusted by Leading Dental Practices
          </h2>
          <p className="mt-4 text-lg text-gray-300">
            Join hundreds of dental practices that have transformed their operations with our AI solution
          </p>
        </motion.div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative rounded-2xl bg-gradient-to-br from-white/[0.15] to-white/[0.05] backdrop-blur-[12px] border border-white/[0.15] p-8 shadow-[0_8px_32px_rgba(0,0,0,0.12)] group transition-all duration-500 hover:shadow-[0_8px_32px_rgba(0,243,255,0.12)] hover:border-[#00f3ff]/20"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/[0.08] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current filter drop-shadow-[0_0_8px_rgba(250,204,21,0.3)]" />
                ))}
              </div>
              <blockquote className="mt-4">
                <p className="text-lg text-white/95 leading-relaxed font-light">"{testimonial.quote}"</p>
              </blockquote>
              <div className="mt-6">
                <p className="font-semibold text-white group-hover:text-[#00f3ff] transition-colors duration-500">{testimonial.author}</p>
                <p className="text-sm text-white/80 font-medium">{testimonial.role}</p>
                <p className="text-sm text-white/60">{testimonial.practice}</p>
              </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-8"
        >
          <p className="text-gray-300 mb-6">
            Ready to transform your practice with AI?
          </p>
          <a 
            href="https://calendly.com/ai-consultant/ai-project-kickoff"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 text-lg font-semibold text-white bg-[#00A6E6] rounded-xl hover:bg-[#0095D1] transition-colors duration-200"
          >
            Schedule a Demo
          </a>
        </motion.div>
      </div>
    </section>
  );
};