# Gaushala

Gaushala is a Gujarati-language informational and donation landing page for an animal hospital and cow-service trust in Gujarat.

## Core features

- Gujarati overview of animal treatment, shelter, rescue, and rehabilitation services.
- Donation section with bank-transfer and QR-code options.
- In-page navigation to donation and contact information.
- Responsive single-page layout with service and trust information.

## Technology stack

- Next.js 16 App Router
- React 19 and TypeScript
- Tailwind CSS 4
- ESLint 9

## Prerequisites

- Node.js compatible with the locked dependencies
- npm

## Local setup

```bash
git clone https://github.com/varunisrani/gaushala.git
cd gaushala
npm ci
npm run dev
```

Production build and start commands:

```bash
npm run build
npm run start
```

Lint the project with `npm run lint`.

## Configuration

No environment variables are referenced by the current application. The page content and external QR image URL are defined directly in `src/app/page.tsx`.

## Project structure

- `src/app/page.tsx` — the complete landing-page content
- `src/app/layout.tsx` — root document layout and metadata
- `src/app/globals.css` — global theme and presentation styles
- `public/` — static assets

## Status and limitations

This is a static informational site: it has no CMS, contact form submission, payment processing, or backend. Donation, registration, contact, and externally hosted QR-image details are operational content and should be independently verified before deployment.
