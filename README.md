# ground-stage

A modern, production-ready Next.js starter template with best practices baked in.

## Stack

| Layer                | Technology                         |
| -------------------- | ---------------------------------- |
| **Framework**        | Next.js 16.2.10 (App Router)       |
| **Language**         | TypeScript 5 (strict mode)         |
| **Styling**          | Tailwind CSS v4 + shadcn/ui        |
| **UI Components**    | shadcn/ui + Base UI + Lucide Icons |
| **State Management** | Zustand v5                         |
| **Data Fetching**    | TanStack Query v5                  |
| **Forms**            | React Hook Form v7 + Zod v4        |
| **Fonts**            | Geist Sans + Geist Mono            |

## Features

- ✅ **Next.js 16** with App Router and React Server Components
- ✅ **TypeScript** strict mode for type safety
- ✅ **Tailwind CSS v4** with dark mode support using CSS variables
- ✅ **shadcn/ui** component library integrated
- ✅ **TanStack Query** configured for server state management
- ✅ **Zustand** ready for client state
- ✅ **React Hook Form + Zod** for type-safe form handling
- ✅ **ESLint + Prettier** with automated formatting
- ✅ **Husky + lint-staged** for pre-commit quality checks
- ✅ **pnpm** workspace support
- ✅ **Organized folder structure** for scalable development

## Project Structure

```
src/
├── app/              # Next.js App Router
│   ├── layout.tsx    # Root layout
│   ├── page.tsx      # Home page
│   └── globals.css   # Global styles
├── components/
│   ├── layout/       # Layout components (Header, Footer, etc.)
│   ├── shared/       # Shared/reusable components
│   └── ui/           # shadcn/ui primitives
├── features/         # Feature-based modules
├── hooks/            # Custom React hooks
├── lib/              # Utility functions & config
│   ├── query-client.ts  # TanStack Query setup
│   └── utils.ts         # cn() helper
├── providers/        # Context providers
├── services/         # API/service layer
├── store/            # Zustand stores
└── types/            # Shared TypeScript types
```

## Getting Started

### Prerequisites

- Node.js 18+
- pnpm 8+ (or install with `npm install -g pnpm`)

### Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd ground-stage

# Install dependencies
pnpm install

# Run development server
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to see your app.

### Available Scripts

```bash
pnpm dev          # Start development server
pnpm build        # Build for production
pnpm start        # Start production server
pnpm lint         # Run ESLint
pnpm format       # Format code with Prettier
pnpm format:check # Check if files are formatted
```

## Development Workflow

### Adding shadcn/ui Components

```bash
# Add new components
pnpx shadcn@latest add button
pnpx shadcn@latest add card
```

Components will be added to `src/components/ui/`.

### Code Quality

This project uses Husky + lint-staged to automatically:

- Lint and fix code with ESLint
- Format code with Prettier
- Validate staged files before commit

All quality checks run automatically on `git commit`.

### Path Aliases

Import using the `@/*` alias:

```tsx
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
```

## Styling

Tailwind CSS v4 is configured inline in `globals.css`. Dark mode is supported via CSS variables using the `oklch` color space for better color consistency.

Toggle dark mode by adding the `dark` class to the `<html>` element.

## State Management

- **Server state**: Use TanStack Query (configured in `src/lib/query-client.ts`)
- **Client state**: Use Zustand (create stores in `src/store/`)

## Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
pnpm add -g vercel

# Deploy
vercel
```

### Other Platforms

Build the production bundle:

```bash
pnpm build
pnpm start
```

Deploy the `.next` folder to your hosting platform.

## Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [shadcn/ui Documentation](https://ui.shadcn.com)
- [TanStack Query Docs](https://tanstack.com/query/latest)
- [Tailwind CSS Documentation](https://tailwindcss.com)
- [TypeScript Handbook](https://www.typescriptlang.org/docs)

## License

MIT
