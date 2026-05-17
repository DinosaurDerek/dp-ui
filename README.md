# dp-ui

A focused React component library built on a semantic design token architecture. Built with React, TypeScript, Vite, and Tailwind CSS.

## Overview

dp-ui is structured around a token-first design system. Tailwind is used internally as an implementation detail — the public interface is expressed through semantic tokens and component props. Components never expose utility classes to consumers.

## Architecture

​`
src/
  tokens/         # Design tokens — colors, spacing, typography, breakpoints
  theme/          # Runtime theme system — context, provider, CSS variable injection
  components/     # Reusable UI components
  hooks/          # Shared behavioral primitives
  demo/           # Composed demo application
​`

### Token system

Tokens are split into two layers:

- **Palette** (`tokens/colors.ts`) — raw values with no semantic meaning. Never referenced directly by components.
- **Semantic tokens** — map intent to palette values, organized by purpose (interactive, surface, text, feedback). Consumed by components exclusively via CSS custom properties.

### Theme system

The theme provider writes all tokens as CSS custom properties onto `:root` at runtime. Static tokens (geometry, typography) are written once on mount. Theme-dependent tokens (colors) are re-written on mode change. Components reference `var(--dp-color-*)` in their styles and never re-render on theme change.

## Stack

- React 18
- TypeScript
- Vite
- Tailwind CSS (internal implementation detail — not exposed in component APIs.
  Would be replaced with CSS Modules or zero-runtime CSS for a distributed package.)

## Getting started

​`bash
npm install
npm run dev
​`

## Components

- Button
- Input
- Card
- Modal
- Dropdown
- Tabs / Table
- FormField
- Toast / Tooltip

## Status

Early development. Not published. Not production-ready.
