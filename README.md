# NRK Catering Website

Production-ready one-page business website for a Tamil Nadu catering service.

## Tech Stack

- Vite
- React
- TypeScript
- Tailwind CSS
- shadcn/ui components

## Main Sections

- Premium hero section with WhatsApp CTA
- About / legacy section
- Catering services
- Dining styles and menu packages
- Gallery with filter and lightbox
- Testimonials
- Why choose us
- WhatsApp enquiry contact form
- Mobile-friendly navigation and layout

## Edit Business Details

Update business contact details in:

```ts
src/config/business.ts
```

Important placeholders to replace before going live:

- Phone number
- WhatsApp number
- Email
- Real address
- Instagram link, if needed

## Development

```bash
npm install
npm run dev
```

## Production Build

```bash
npm run build
npm run preview
```

## Deployment

This project is ready for Vercel, Netlify, or any static hosting provider. Upload the repository or deploy the generated `dist` folder after running `npm run build`.
