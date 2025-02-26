# AIDENTIST Style Guide

## Brand Colors

### Primary Colors
- Primary Blue: `#00A6E6` - Main brand color, used for CTAs and key UI elements
- Secondary Dark: `#2A3342` - Used for text and secondary elements
- Accent Blue: `#F0F7FF` - Light blue used for backgrounds and highlights

### Supporting Colors
- Success: `#34D399` - Positive actions and confirmations
- Warning: `#F59E0B` - Alerts and cautions
- Error: `#EF4444` - Error states and critical alerts
- Info: `#8B5CF6` - Informational elements

## Typography

### Font Family
- Primary Font: "Inter", sans-serif
- Weights Used: 400 (regular), 500 (medium), 600 (semibold), 700 (bold)

### Font Sizes
```css
text-xs: 0.75rem (12px)
text-sm: 0.875rem (14px)
text-base: 1rem (16px)
text-lg: 1.125rem (18px)
text-xl: 1.25rem (20px)
text-2xl: 1.5rem (24px)
text-3xl: 1.875rem (30px)
text-4xl: 2.25rem (36px)
text-5xl: 3rem (48px)
text-6xl: 3.75rem (60px)
```

### Line Heights
- Default: 1.5
- Tight: 1.16 (for headlines)
- Relaxed: 1.75 (for body text)

## Spacing System

### Padding & Margins
```css
p-2: 0.5rem (8px)
p-4: 1rem (16px)
p-6: 1.5rem (24px)
p-8: 2rem (32px)
p-12: 3rem (48px)
p-16: 4rem (64px)
```

### Layout Spacing
- Container Max Width: 1400px
- Section Padding: 6rem (96px) vertical
- Component Spacing: 2rem (32px) between major sections

## Border Radius
```css
rounded-sm: 0.25rem (4px)
rounded-md: 0.5rem (8px)
rounded-lg: 0.625rem (10px)
rounded-xl: 0.75rem (12px)
rounded-2xl: 1rem (16px)
rounded-full: 9999px
```

## Shadows
```css
shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05)
shadow: 0 1px 3px rgba(0, 0, 0, 0.1)
shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1)
shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1)
shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1)
```

## Components

### Buttons

#### Primary Button
```css
bg-[#00A6E6]
hover:bg-[#0095D1]
text-white
font-medium
rounded-lg
px-6
py-3
transition-colors
```

#### Secondary Button
```css
border-2
border-white/30
text-white
hover:bg-white/10
rounded-lg
px-6
py-3
transition-colors
```

### Cards
```css
bg-white
rounded-2xl
shadow-lg
p-6 lg:p-8
hover:shadow-xl
transition-all
```

### Navigation
- Fixed position
- Transparent to white gradient background
- Backdrop blur effect on scroll
- Responsive mobile menu

### Icons
- Using Lucide React icons
- Standard sizes: 
  - Small: 16px (w-4 h-4)
  - Medium: 20px (w-5 h-5)
  - Large: 24px (w-6 h-6)

## Animations

### Transitions
```css
transition-all: all 200ms ease
transition-colors: color 200ms ease
transition-transform: transform 200ms ease
```

### Motion Effects
- Page elements fade and slide up on scroll
- Hover effects scale up slightly (1.05)
- Smooth color transitions
- Button hover states include slight elevation

## Responsive Breakpoints
```css
sm: 640px
md: 768px
lg: 1024px
xl: 1280px
2xl: 1536px
```

## Dark Mode

### Background Colors
- Primary: `bg-gray-900`
- Secondary: `bg-gray-800`
- Accent: `bg-gray-700`

### Text Colors
- Primary: `text-white`
- Secondary: `text-gray-300`
- Muted: `text-gray-400`

## Accessibility

### Color Contrast
- All text meets WCAG 2.1 AA standards
- Interactive elements have distinct hover/focus states
- Error states use accessible red colors

### Focus States
```css
focus:outline-none
focus:ring-2
focus:ring-[#00A6E6]
focus:ring-offset-2
```

## Grid System
- 12-column grid
- Responsive column layouts
- Gap spacing: 2rem (32px)
- Container padding: 1rem (16px) on mobile, 2rem (32px) on desktop

## Forms

### Input Fields
```css
bg-white
border
border-gray-300
rounded-md
px-3
py-2
focus:ring-2
focus:ring-[#00A6E6]
focus:border-transparent
```

### Labels
```css
text-sm
font-medium
text-gray-700
mb-2
```

### Error States
```css
border-red-500
text-red-600
bg-red-50
```

## Loading States
- Subtle animations
- Progress indicators
- Skeleton loading states for content
- Spinner animation for actions

## Gradients
```css
bg-gradient-to-br from-[#00A6E6] to-[#0095D1]
bg-gradient-to-br from-slate-900 to-indigo-900
bg-gradient-to-br from-[#00A6E6]/5 to-[#2A3342]/5
```