import React from 'react';
import SuccessStory from './SuccessStory';

const testimonials = [
  {
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80",
    name: "Dr. Sarah Johnson",
    role: "Dental Practice Owner",
    quote: "AIDentist has transformed how we handle patient communications. Our scheduling efficiency has improved by 40%.",
    results: "40% more appointments scheduled"
  },
  {
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80",
    name: "Dr. Michael Chen",
    role: "Orthodontist",
    quote: "The AI voice agents have revolutionized our patient scheduling system. We've seen a significant reduction in no-shows.",
    results: "60% reduction in no-shows"
  },
  {
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80",
    name: "Dr. Emily Rodriguez",
    role: "Pediatric Dentist",
    quote: "Our patients love the 24/7 availability. The AI handles after-hours calls perfectly, leading to more bookings.",
    results: "35% increase in new patients"
  }
];

export default function SuccessSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">
          Success Stories
        </h2>
        <p className="text-xl text-center text-gray-600 mb-12">
          See how dental practices are achieving remarkable results
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <SuccessStory key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}