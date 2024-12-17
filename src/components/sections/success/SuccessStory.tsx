import React from 'react';

interface SuccessStoryProps {
  image: string;
  name: string;
  role: string;
  quote: string;
  results: string;
}

export default function SuccessStory({ image, name, role, quote, results }: SuccessStoryProps) {
  return (
    <div className="bg-white rounded-xl p-8 shadow-lg card-hover">
      <div className="flex items-center mb-6">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full opacity-75 blur-sm"></div>
          <img 
            src={image} 
            alt={name}
            className="w-16 h-16 rounded-full object-cover relative"
          />
        </div>
        <div className="ml-4">
          <h4 className="font-semibold text-lg gradient-text">{name}</h4>
          <p className="text-gray-600">{role}</p>
        </div>
      </div>
      <blockquote className="text-gray-600 italic mb-6 relative">
        <span className="text-5xl text-blue-200 absolute -top-4 -left-2">"</span>
        <p className="pl-6">{quote}</p>
      </blockquote>
      <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-4 rounded-lg">
        <p className="font-semibold gradient-text">Results:</p>
        <p className="text-gray-800 font-bold text-lg">{results}</p>
      </div>
    </div>
  );
}