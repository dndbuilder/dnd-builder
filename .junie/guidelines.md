# Page Builder Development Guidelines

This document provides guidelines and information for developers working on the Page Builder project.

## Project Structure

The project is organized as a monorepo using pnpm workspaces and Turborepo:

- **apps/web**: Next.js application that uses the page builder
- **packages/builder**: The main drag-and-drop page builder library
- **packages/config-eslint**: Shared ESLint configurations
- **packages/config-typescript**: Shared TypeScript configurations

## Build/Configuration Instructions

### Prerequisites

- Node.js (latest LTS version recommended)
- pnpm v9.1.1 or later

### Setup

1. Install dependencies:

   ```bash
   pnpm install
   ```

2. Build all packages:

   ```bash
   pnpm build
   ```

3. Start development server:
   ```bash
   pnpm dev
   ```

### Package-specific Build Commands

#### Builder Package

The builder package uses Rollup for bundling:

```bash
cd packages/builder
pnpm build
```

This will:

- Transpile TypeScript files
- Process CSS with PostCSS and Tailwind
- Bundle everything into the `dist` directory

#### Web Application

The web application uses Next.js:

```bash
cd apps/web
pnpm build
pnpm start
```

## Testing Information

### Testing Setup

The project uses Jest and React Testing Library for testing. Testing is configured at the package level.

#### Running Tests

To run tests for a specific package:

```bash
cd packages/builder
pnpm test
```

### Adding New Tests

1. Create test files in the `tests` directory of the package
2. Use the naming convention `*.test.ts` or `*.test.tsx`
3. Use Jest's `describe` and `it` functions to organize tests
4. Use React Testing Library for testing React components

#### Example: Testing a Utility Function

```typescript
// tests/utils.test.ts
import { bytesToSize } from "../src/utils";

describe("bytesToSize", () => {
  it("should convert bytes to human-readable format", () => {
    expect(bytesToSize(0)).toBe("0 Bytes");
    expect(bytesToSize(1024)).toBe("1 KB");
    expect(bytesToSize(1048576)).toBe("1 MB");
    expect(bytesToSize(1073741824)).toBe("1 GB");
  });
});
```

#### Example: Testing a React Component

```typescript
// tests/example-component.test.tsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import { ExampleComponent } from './example-component';

describe('ExampleComponent', () => {
  it('renders the provided text', () => {
    render(<ExampleComponent text="Hello, World!" />);

    const heading = screen.getByRole('heading');
    expect(heading).toHaveTextContent('Hello, World!');
  });

  it('renders a button', () => {
    render(<ExampleComponent text="Test" />);

    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent('Click me');
  });
});
```

## Code Style and Development Practices

### TypeScript Configuration

The project uses TypeScript with strict type checking. The TypeScript configuration is shared across packages:

- **base.json**: Base configuration with strict type checking
- **react-library.json**: Configuration for React libraries
- **nextjs.json**: Configuration for Next.js applications

### ESLint Configuration

The project uses ESLint for code linting with different configurations for different package types:

- **library.js**: Configuration for libraries
- **next.js**: Configuration for Next.js applications

### CSS Styling

The project uses Tailwind CSS for styling. PostCSS is used to process CSS files.

### Component Development Guidelines

1. **Component Structure**: Components should be organized in directories with related files:

   ```
   component-name/
     ├── component-name.tsx
     ├── component-name.test.tsx
     └── index.ts
   ```

2. **Testing**: All components should have tests that verify their rendering and behavior.

3. **TypeScript**: Use TypeScript interfaces for component props and state.

4. **Styling**: Use Tailwind CSS for styling components.

### Git Workflow

1. Create feature branches from `main`
2. Make changes and commit with descriptive messages
3. Push changes and create a pull request
4. Ensure all tests pass before merging

## Troubleshooting

### Common Issues

1. **Build Failures**: If you encounter build failures, try cleaning the build cache:

   ```bash
   rm -rf .turbo
   pnpm build
   ```

2. **Dependency Issues**: If you encounter dependency issues, try reinstalling dependencies:

   ```bash
   rm -rf node_modules
   pnpm install
   ```

3. **TypeScript Errors**: If you encounter TypeScript errors, make sure your code follows the project's TypeScript configuration.
