# TrustFire Marketing Website

Marketing website for TrustFire - Safe, Legal, Simple Firearm Transfers.

Built with Next.js 15, TypeScript, and Tailwind CSS.

## Getting Started

### Install Dependencies

```bash
cd website
npm install
```

### Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Pages

- **/** - Homepage with hero, features, how it works, testimonials
- **/features** - Detailed feature breakdown
- **/download** - App download page (iOS & Android)
- **/about** - About TrustFire, mission, values, compliance
- **/how-it-works** - Coming soon
- **/terms** - Coming soon
- **/privacy** - Coming soon
- **/compliance** - Coming soon

## Design System

The website uses the same TrustFire design system as the mobile app:

- **Primary Color**: #f0413f (TrustFire Red)
- **Background Dark**: #1b1c1c
- **Background Dark Alt**: #2a2b2b

See `tailwind.config.ts` for full theme configuration.

## Deployment

This website can be deployed to:

- **Vercel** (recommended for Next.js)
- **Netlify**
- **AWS Amplify**
- **Traditional hosting** (after `npm run build`)

### Deploy to Vercel

```bash
npm install -g vercel
vercel
```

## Components

All reusable components are in the `/components` directory:

- `Navigation.tsx` - Top navigation bar
- `Hero.tsx` - Homepage hero section
- `Features.tsx` - Feature showcase
- `HowItWorks.tsx` - 4-step process
- `SocialProof.tsx` - Stats and testimonials
- `CTA.tsx` - Call-to-action section
- `Footer.tsx` - Site footer

## License

Copyright © 2025 TrustFire. All rights reserved.
