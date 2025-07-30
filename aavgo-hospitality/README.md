# Aavgo Hospitality Website

A modern, responsive Next.js website for the hospitality industry, featuring AI-powered solutions and contactless technology. This website is based on the design and content structure of aavgo.com, recreated with modern web technologies.

## 🚀 Features

- **Modern Design**: Clean, professional design with smooth animations
- **Responsive Layout**: Fully responsive across all device sizes
- **Interactive Elements**: Animated hero carousel, statistics counters, and smooth transitions
- **Contact System**: Functional contact form with validation
- **SEO Optimized**: Proper meta tags and semantic HTML structure
- **Performance Focused**: Optimized images, code splitting, and fast loading times

## 🛠 Technology Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **UI Components**: Custom components with Radix UI primitives

## 📦 Installation

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd aavgo-hospitality
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🏗 Project Structure

```
aavgo-hospitality/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout with metadata
│   │   ├── page.tsx            # Main homepage
│   │   └── globals.css         # Global styles and custom CSS
│   └── components/
│       ├── Navigation.tsx      # Header navigation with mobile menu
│       ├── HeroSection.tsx     # Animated hero carousel
│       ├── ProductsSection.tsx # Products and services showcase
│       ├── StatsSection.tsx    # Statistics and testimonials
│       └── ContactSection.tsx  # Contact form and footer
├── public/                     # Static assets
├── package.json               # Dependencies and scripts
└── README.md                  # Project documentation
```

## 🎨 Components Overview

### Navigation
- Responsive navigation with dropdown menus
- Mobile-friendly hamburger menu
- Contact information bar
- Sticky header with smooth scrolling

### Hero Section
- Auto-rotating carousel with 3 slides
- Smooth transitions and animations
- Call-to-action buttons
- Responsive design with mobile optimization

### Products Section
- Feature grid with icons and descriptions
- Product cards with gradients and animations
- Call-to-action sections
- Detailed feature listings

### Statistics Section
- Animated counters with real-time counting
- Customer testimonials
- Professional endorsements
- Gradient background with floating elements

### Contact Section
- Functional contact form with validation
- Company contact information
- Footer with organized links
- Social media integration

## 🎯 Key Features

### Performance Optimizations
- Next.js App Router for optimal performance
- Code splitting and lazy loading
- Optimized images and assets
- Minimal JavaScript bundle size

### Accessibility
- Semantic HTML structure
- ARIA labels and attributes
- Keyboard navigation support
- Screen reader compatibility

### SEO Features
- Comprehensive meta tags
- Open Graph and Twitter Card support
- Structured data markup
- XML sitemap generation

## 🔧 Customization

### Styling
- Modify `src/app/globals.css` for global styles
- Update Tailwind config in `tailwind.config.js`
- Component-specific styles in individual component files

### Content
- Update content in component files
- Modify navigation items in `Navigation.tsx`
- Change hero slides in `HeroSection.tsx`
- Update company information in `ContactSection.tsx`

### Colors and Branding
- Primary brand colors: Blue (#2563eb) and Purple (#7c3aed)
- Update CSS custom properties in `globals.css`
- Modify Tailwind theme colors as needed

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- Mobile: 320px - 767px
- Tablet: 768px - 1023px
- Desktop: 1024px and above

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your repository to Vercel
2. Deploy automatically with git push
3. Custom domain configuration available

### Other Platforms
- Netlify: Import from Git repository
- Digital Ocean App Platform
- AWS Amplify
- Traditional hosting with `npm run build`

## 📊 Performance Metrics

Target performance scores:
- **Lighthouse Performance**: 95+
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1

## 🔍 SEO Configuration

The website includes:
- Optimized meta descriptions
- Proper heading hierarchy
- Image alt attributes
- Social media meta tags
- JSON-LD structured data

## 🎨 Design System

### Typography
- Primary font: Geist Sans
- Monospace font: Geist Mono
- Heading scales from text-sm to text-6xl

### Colors
- Primary: Blue shades (#1e40af to #dbeafe)
- Secondary: Purple shades (#7c2d12 to #fef3c7)
- Neutral: Gray shades (#111827 to #f9fafb)

### Spacing
- Consistent 8px grid system
- Responsive spacing with Tailwind utilities
- Container max-widths: 7xl (1280px)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License. See the LICENSE file for details.

## 📞 Support

For technical support or questions:
- Email: support@aavgo.com
- Phone: +1 (877) 83-AAVGO
- Address: 1730 S Amphlett Blvd, Suite 125, San Mateo, CA 94402

## 🔄 Updates

- v1.0.0: Initial release with all core features
- Regular updates for performance and security improvements
- New feature releases based on user feedback

---

Built with ❤️ using Next.js and modern web technologies.
