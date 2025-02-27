import React from 'react';
import { ChevronRight, Home } from 'lucide-react';
import { cn } from '@/lib/utils';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items, className }) => {
  return (
    <nav aria-label="Breadcrumb" className={cn("flex items-center space-x-2 text-sm", className)}>
      <a 
        href="/"
        className="flex items-center text-white/60 hover:text-[#00f3ff] transition-all duration-300 hover:filter hover:drop-shadow-[0_0_8px_rgba(0,243,255,0.6)]"
      >
        <Home className="w-4 h-4" />
        <span className="sr-only">Home</span>
      </a>
      {items.map((item, index) => (
        <React.Fragment key={item.label}>
          <ChevronRight className="w-4 h-4 text-white/40" />
          {index === items.length - 1 ? (
            <span className="text-white font-medium">{item.label}</span>
          ) : (
            <a
              href={item.href}
              className="text-white/60 hover:text-[#00f3ff] transition-all duration-300 hover:filter hover:drop-shadow-[0_0_8px_rgba(0,243,255,0.6)]"
            >
              {item.label}
            </a>
          )}
        </React.Fragment>
      ))}
    </nav>
  );
};