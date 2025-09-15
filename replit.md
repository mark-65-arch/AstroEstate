# Bilingual Real Estate Platform

## Overview

This is a bilingual real estate platform built with Astro, a modern static site generator that emphasizes performance and developer experience. The project is designed to serve real estate content in multiple languages, leveraging Astro's built-in internationalization capabilities and static generation for optimal SEO and performance.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Framework
- **Astro 4.15+**: Chosen as the primary framework for its excellent static site generation capabilities, built-in TypeScript support, and superior performance for content-heavy sites like real estate platforms
- **Static-first approach**: Astro's island architecture allows for minimal JavaScript shipping while maintaining interactivity where needed
- **TypeScript integration**: Strict TypeScript configuration ensures type safety and better developer experience

### Styling and UI
- **Tailwind CSS**: Utility-first CSS framework integrated via @astrojs/tailwind for rapid UI development
- **Custom design system**: Global CSS defines reusable component classes (btn-primary, btn-secondary, container-custom) for consistent styling
- **Responsive design**: Mobile-first approach using Tailwind's responsive utilities

### Development Environment
- **Hot reload development**: Configured to run on host 0.0.0.0:5000 for easy access in development environments
- **Type checking**: Integrated Astro check for build-time TypeScript validation
- **Modern tooling**: ES modules support with proper TypeScript configuration

### Content Architecture
- **Bilingual support**: Project structure suggests multi-language content delivery
- **SEO optimization**: Static generation provides excellent SEO performance for real estate listings
- **Performance focus**: Astro's partial hydration ensures minimal JavaScript bundle sizes

## External Dependencies

### Core Framework Dependencies
- **Astro**: Main framework for static site generation and routing
- **@astrojs/tailwind**: Official Astro integration for Tailwind CSS
- **Tailwind CSS**: Utility-first CSS framework for styling

### Development Dependencies
- **TypeScript**: Static type checking and enhanced developer experience
- **@astrojs/check**: Build-time type checking and validation tool

### Font Integration
- **Inter font family**: Google Fonts integration for modern, readable typography optimized for real estate content

### Build and Deployment
- **Static output**: Optimized for deployment to CDNs and static hosting platforms
- **Preview functionality**: Built-in preview server for production builds
- **Type-safe builds**: Enforced TypeScript checking in the build process