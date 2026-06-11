# Venky Yadav Catering - Luxury Hospitality Website

An award-winning, premium, conversion-optimized catering website for **Venky Yadav Catering**. Styled with curated luxury colors (Gold, Maroon, Charcoal, Ivory, Cream), built with high-performance modern static architecture (HTML5 + Tailwind CSS + GSAP), and optimized for instant load times and perfect SEO.

## ✨ Tech Stack & Features
- **Tailwind CSS**: Modern utility styling matching custom premium branding colors.
- **GSAP (GreenSock)**: Butter-smooth fade-ins, card hover-lifts, staggered scroll reveals, and count-up metrics.
- **Responsive / Mobile-First**: Tested across various screen widths (desktop, tablet, mobile).
- **SEO Optimized**: Semantic HTML5 tags (`<header>`, `<nav>`, `<section>`, `<footer>`, `<address>`), canonical links, and search keywords.
- **WhatsApp Conversion**: Integrated floating CTA and dynamic proposal form that formats input fields into a pre-filled WhatsApp message.

---

## 📁 Directory Structure
All local image paths align with your preferred architecture. All files contain actual high-quality royalty-free images downloaded directly to your project so the site renders beautiful visuals locally:

```
catering/
├── index.html                   # Main page structure with all 15 sections
├── style.css                    # Custom fonts, gradients, glassmorphism, scrollbars
├── app.js                       # Mobile menu toggle, tabs, carousel, GSAP triggers
├── pictures/                    # Image folders right next to catering files
│   ├── logo/
│   │   └── logo.png             # Logo image
│   ├── hero/
│   │   └── hero-banner.jpg      # Fullscreen hero banner image
│   ├── events/
│   │   ├── wedding-event.jpg
│   │   ├── reception-event.jpg
│   │   ├── corporate-event.jpg
│   │   ├── birthday-event.jpg
│   │   └── buffet-setup.jpg
│   ├── dishes/
│   │   ├── veg-special.jpg
│   │   ├── nonveg-special.jpg
│   │   ├── biryani.jpg
│   │   ├── dessert.jpg
│   │   ├── starter.jpg
│   │   └── live-counter.jpg
│   ├── gallery/
│   │   ├── gallery-1.jpg to gallery-6.jpg
│   │   └── ...
│   ├── testimonials/
│   │   ├── customer-1.jpg to customer-3.jpg
│   │   └── ...
│   └── founder/
│       └── founder.jpg          # Founder chef photo
└── README.md                    # Project documentation
```

### How to Replace Local Images
1. Save your custom image under the matching subfolder (e.g., save your custom biryani image as `pictures/dishes/biryani.jpg`).
2. Ensure the filename matches exactly so that the HTML loads it without editing code.

---

## ⚙️ Configuration
### WhatsApp Number
To change the destination phone number where inquiry details are sent:
1. Open [app.js](file:///d:/antigarvity_projects/catering/app.js).
2. Locate the variable at the top of the file:
   ```javascript
   const BUSINESS_WHATSAPP_NUMBER = "919999999999";
   ```
3. Replace `"919999999999"` with your professional WhatsApp business number (include the country code but omit `+`, spaces, or hyphens).

---

## 🚀 Netlify Deployment
This website is completely ready for Netlify.
1. Log into your [Netlify Console](https://app.netlify.com).
2. Drag and drop the `catering/` folder directly into the **Netlify Drop** interface.
3. Your luxury catering site will build, launch, and go live under a free URL instantly!
