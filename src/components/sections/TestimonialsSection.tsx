import React from 'react';

const testimonials = [
  {
    name: "Dr. Sarah Chen",
    role: "Orthodontist",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80",
    quote: "AIDentist has transformed how we handle patient scheduling. Our staff now focuses on more important tasks while the AI handles routine calls perfectly.",
    metrics: "40% reduction in scheduling time"
  },
  {
    name: "Dr. Michael Rodriguez",
    role: "General Dentist",
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80",
    quote: "The ROI was immediate. Our patients love the 24/7 availability, and we've seen a significant increase in appointment bookings.",
    metrics: "30% increase in appointments"
  },
  {
    name: "Dr. Emily Thompson",
    role: "Pediatric Dentist",
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80",
    quote: "The AI's ability to handle parent inquiries and schedule children's appointments has been incredible. It's like having an extra team member.",
    metrics: "50% reduction in phone wait times"
  }
];

export default function TestimonialsSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-16">
          Trusted by Leading Dental Practices
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-center space-x-4 mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-semibold text-gray-800">{testimonial.name}</h3>
                  <p className="text-gray-600">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-600 mb-4">"{testimonial.quote}"</p>
              <div className="bg-blue-50 p-3 rounded-lg">
                <p className="text-blue-700 font-semibold">{testimonial.metrics}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}