import React from 'react';
import { Link } from 'react-scroll';

interface NavigationProps {
  isMobile?: boolean;
}

export default function Navigation({ isMobile }: NavigationProps) {
  const navItems = [
    { href: "education", label: "Why AI?" },
    { href: "features", label: "Features" },
    { href: "pricing", label: "Pricing" },
    { href: "success", label: "Success Stories" },
    { href: "calculator", label: "ROI Calculator" }
  ];

  const baseStyles = isMobile
    ? "flex flex-col space-y-4"
    : "flex space-x-8";

  const linkStyles = isMobile
    ? "text-white hover:text-blue-100 block py-2 cursor-pointer transition-colors duration-200"
    : "text-white hover:text-blue-100 cursor-pointer transition-colors duration-200";

  return (
    <div className={baseStyles}>
      {navItems.map((item) => (
        <Link
          key={item.href}
          to={item.href}
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className={linkStyles}
        >
          {item.label}
        </Link>
      ))}
    </div>
  );
}