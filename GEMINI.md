# Gemini Project Context: Photography Portfolio

This document provides context for the Gemini AI assistant to understand the project structure, technologies, and conventions.

## Project Overview

This is a single-page photography portfolio website. It is designed to showcase a photographer's work, provide information about their services, and offer a way for potential clients to get in touch.

**Key Technologies:**

*   **Framework:** [Next.js](https://nextjs.org/) (App Router)
*   **Language:** [TypeScript](https://www.typescriptlang.org/)
*   **UI Library:** [React](https://react.dev/)
*   **Styling:** [Tailwind CSS](https://tailwindcss.com/)
*   **UI Components:** [shadcn/ui](https://ui.shadcn.com/) - A collection of re-usable components built using Radix UI and Tailwind CSS.
*   **Icons:** [Lucide React](https://lucide.dev/)

**Architecture:**

*   The project uses the Next.js App Router, with the main page defined in `app/page.tsx`.
*   The UI is broken down into modular, reusable React components located in the `components/` directory.
*   Core UI elements provided by `shadcn/ui` are in `components/ui/`.
*   Global styles are in `app/globals.css`.
*   Static assets like images are served from the `public/` directory.
*   Path aliases are configured in `tsconfig.json`, allowing for absolute imports from the project root (e.g., `@/components/...`).

## Building and Running

The project uses `npm` as the package manager. The following scripts are defined in `package.json`:

*   **Install dependencies:**
    ```bash
    npm install
    ```

*   **Run the development server:**
    Starts the application in development mode on `http://localhost:3000`.
    ```bash
    npm run dev
    ```

*   **Create a production build:**
    Builds the application for production.
    ```bash
    npm run build
    ```

*   **Run the production server:**
    Starts the application in production mode. Requires a build to be created first.
    ```bash
    npm run start
    ```

*   **Lint the code:**
    Runs ESLint to check for code quality and style issues.
    ```bash
    npm run lint
    ```

## Development Conventions

*   **Component Structure:** Components are self-contained in their own `.tsx` files. Major page sections (e.g., `Hero`, `Gallery`) are in `components/`, while general-purpose UI elements (e.g., `Button`, `Card`) are in `components/ui/`.
*   **Styling:** Use Tailwind CSS utility classes for styling directly in the JSX. The `tailwind-merge` and `clsx` libraries (via the `cn` utility in `lib/utils.ts`) are used to intelligently merge classes.
*   **TypeScript:** All new code should be written in TypeScript to maintain type safety.
*   **Imports:** Use the `@/*` path alias for importing modules from the project's root directory to avoid relative path hell (e.g., `import { cn } from '@/lib/utils'`).
*   **Static Assets:** All images and other static files should be placed in the `public/` directory.

### Additional Coding Preferences

- Keep project dependencies minimal.
- Use relative imports and NOT a path alias.