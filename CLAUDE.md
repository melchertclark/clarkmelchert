# CLAUDE.md - Personal Website Development Guidelines

## Commands
- Run local development server: `python -m http.server` or use VS Code Live Server
- HTML validation: `npx html-validator-cli --file=index.html`
- CSS linting: `npx stylelint "**/*.css"`
- JavaScript linting: `npx eslint "**/*.js"`
- Test page load: `npx lighthouse http://localhost:8000 --view`

## Code Style Guidelines
- **HTML**: Semantic markup, descriptive classes, validated HTML5
- **CSS**: BEM naming convention, mobile-first responsive design
- **JavaScript**: ES6+ syntax, modular functions, descriptive variables
- **Assets**: Compress videos (h.264/WebM), optimize images (WebP/AVIF)
- **Accessibility**: WCAG AA compliance, proper alt text, keyboard navigation
- **Performance**: Lazy-loading for videos, optimized asset loading
- **Deployment**: GitHub Pages from main branch

## Project Structure
This is a static personal website with video carousel background and content
sections for blog, external links, and archived writings. Built with
vanilla HTML/CSS/JS for GitHub Pages deployment.