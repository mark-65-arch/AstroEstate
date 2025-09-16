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

## Deployment Configuration & Troubleshooting

### Astro Configuration for Dual Environment Support
The `astro.config.mjs` is configured to handle both local development and GitHub Pages deployment:

```javascript
export default defineConfig({
  site: 'https://mark-65-arch.github.io',
  base: process.env.NODE_ENV === 'production' ? '/AstroEstate/' : '/',
  output: 'static',
  build: {
    assets: 'assets',
    format: 'directory'
  }
});
```

**Key Configuration Points:**
- **Base Path**: Uses `/AstroEstate/` for GitHub Pages, `/` for local development
- **Output**: Always set to `static` for GitHub Pages compatibility
- **Assets**: Uses `assets` folder to avoid potential Jekyll conflicts

### Common GitHub Pages Issues & Solutions

#### Issue 1: Conflicting GitHub Actions Workflows
**Problem**: Multiple deployment workflows can conflict, causing 404 errors
**Solution**: 
- Keep only `deploy.yml` (Astro-specific workflow)
- Remove or disable `static.yml` (generic static deployment)
- Ensure only one deployment workflow is active

#### Issue 2: Base Path Configuration Errors  
**Problem**: Hardcoded base path breaks local development
**Solution**: Use environment-conditional base path as shown in config above

#### Issue 3: TypeScript Build Errors
**Problem**: Strict TypeScript checking prevents deployment
**Common Issues**:
- Event handlers with `this` context need proper typing
- Use `event.currentTarget as HTMLElement` instead of implicit `this`
- Add type assertions for DOM queries: `querySelector() as HTMLElement`

#### Issue 4: Server Connection Loss After Config Changes
**Problem**: Local server disconnects when base path changes
**Solution**: Restart the development workflow after configuration changes

### GitHub Pages Deployment Checklist
1. ✅ Repository name matches base path in config (`/AstroEstate/`)
2. ✅ Only `deploy.yml` workflow is active (disable/delete `static.yml`)
3. ✅ GitHub Pages source set to "GitHub Actions" (not branch)
4. ✅ Build completes with 0 TypeScript errors
5. ✅ Local development server works with `/` base path

### Development Workflow Best Practices
- **Local Testing**: Always verify both `npm run dev` and `npm run build && npm run preview` work
- **Configuration Changes**: Restart development server after modifying `astro.config.mjs`
- **TypeScript Errors**: Fix all TypeScript errors before deployment
- **Asset References**: Use `import.meta.env.BASE_URL` for proper path resolution

## Replit Import Optimization

### Quick Import Checklist for GitHub Astro Projects
When importing this or similar Astro projects from GitHub to Replit, follow this streamlined process:

1. **Install Dependencies**: Run `npm install` immediately after import
2. **Fix Replit Configuration**: Update `astro.config.mjs` for Replit compatibility
3. **Fix Preview Port**: Update `package.json` preview script for port 5000
4. **Test Development**: Restart workflow and verify site loads
5. **Configure Deployment**: Set up autoscale deployment with build/preview commands

### Critical Configuration Fixes Required

#### astro.config.mjs Changes
```javascript
// Replace hardcoded GitHub Pages config with environment variables
site: process.env.SITE_URL || undefined,
base: process.env.DEPLOY_BASE || '/',
```

#### package.json Changes  
```javascript
// Ensure preview runs on port 5000 for Replit deployment
"preview": "astro preview --host 0.0.0.0 --port 5000"
```

### Common Import Issues & Solutions

#### Issue: "astro: not found" Error
**Cause**: Dependencies not installed after GitHub import
**Solution**: Run `npm install` before starting workflow

#### Issue: Wrong Base Path in Production
**Cause**: astro.config.mjs hardcoded for GitHub Pages (`/AstroEstate/`)
**Fix**: Use environment variables for flexible deployment targets

#### Issue: Preview Port Mismatch
**Cause**: Default `astro preview` uses port 4321, Replit expects 5000
**Fix**: Add `--host 0.0.0.0 --port 5000` to preview script

#### Issue: Host Header Verification
**Cause**: Replit proxy needs allowedHosts bypass
**Verify**: Ensure `vite.server.allowedHosts: true` is set (already correct in this project)

#### Issue: GitHub Pages Assets Not Loading After Replit Config
**Cause**: After configuring for Replit with environment variables, GitHub Pages deployment doesn't get the required DEPLOY_BASE and SITE_URL environment variables
**Solution**: 
1. Update `.github/workflows/deploy.yml` to include environment variables:
   ```yaml
   - name: Install, build, and upload your site output
     uses: withastro/action@v4
     with:
       path: .
       node-version: 20
       package-manager: npm
     env:
       SITE_URL: https://mark-65-arch.github.io
       DEPLOY_BASE: /AstroEstate/
   ```
2. Check for hardcoded asset paths and convert to BASE_URL:
   - Replace `src="/assets/..."` with `src={`${import.meta.env.BASE_URL}assets/...`}`
   - Replace `src="/attached_assets/..."` with `src={`${import.meta.env.BASE_URL}attached_assets/...`}`

### Deployment Configuration
- **Type**: autoscale (for static sites)
- **Build**: `["npm", "run", "build"]`  
- **Run**: `["npm", "run", "preview"]`

### Time-Saving Tips
- Check for existing Replit-compatible configuration before making changes
- Always test both `npm run build` and `npm run preview` after configuration fixes
- Use environment variables for dual GitHub Pages/Replit deployment support