# Implementation Plan - Futuristic Redesign

## Goal Description
Redesign the existing React website to embody a "modern, futuristic, business appealing" aesthetic. The goal is to shift from a "rustic/organic" feel to a "high-end eco-futurism" vibe. This implies precision, minimalism, and a premium architectural feel.

## User Review Required
> [!IMPORTANT]
> I will be updating the `index.css` to use a new design system. This will drastically change the look of the site.
> I will also be updating components to use `framer-motion` for smoother, more "premium" animations. **Please ensure you have run `npm install` to install framer-motion.**

## Proposed Changes

### Design System (`index.css`)
*   **Typography**: Switch strictly to 'Outfit' (Sans-Serif) for a cleaner, more modern look. Remove 'Cormorant Garamond' (Serif) to reduce the "rustic" vibe.
*   **Colors**:
    *   Background: Deepest Obsidian (`#050505`) instead of warm black.
    *   Text: Pure White & Cool Grey.
    *   Accent: "Cyber Gold" (sharper, brighter) or "Holographic Silver". Let's go with **Electric Gold** (`#D4AF37` but glowing).
*   **Effects**:
    *   "Hyper-Glass": Ultra-thin borders (`1px solid rgba(255,255,255,0.08)`), high blur.
    *   Grid Backgrounds: Subtle linear gradients to create a technical grid feel.

### Components

#### [MODIFY] [Navbar.jsx](file:///c:/Users/91974/OneDrive/Desktop/Gemini%20Antigravity/React%20Website/src/components/Navbar.jsx)
*   Make it a floating "Control Center" pill shape rather than a full bar.
*   Use a backdrop blur with a tech-inspired border.

#### [MODIFY] [Hero.jsx](file:///c:/Users/91974/OneDrive/Desktop/Gemini%20Antigravity/React%20Website/src/components/Hero.jsx)
*   Typography: Massive, edge-to-edge text.
*   Animation: Staggered reveal using `framer-motion`.
*   Imagery: Darker overlay for better text contrast.

#### [MODIFY] [Essentials.jsx](file:///c:/Users/91974/OneDrive/Desktop/Gemini%20Antigravity/React%20Website/src/components/Essentials.jsx)
*   Convert Bento Grid to a "Data Dashboard" style.
*   Use mono-spaced fonts for labels to give a "technical specs" feel.

#### [MODIFY] [Reviews.jsx](file:///c:/Users/91974/OneDrive/Desktop/Gemini%20Antigravity/React%20Website/src/components/Reviews.jsx)
*   Cards: Minimalist, sharp corners (or slightly rounded), glowing edges on hover.

#### [MODIFY] [Journey.jsx](file:///c:/Users/91974/OneDrive/Desktop/Gemini%20Antigravity/React%20Website/src/components/Journey.jsx)
*   Timeline: Turn it into a "Flight Path" or "Navigation Route" visualization.

## Verification Plan
### Automated Tests
*   Verify the build runs: `npm run build` (User to run).
*   Check console for `framer-motion` errors.

### Manual Verification
*   Check the "Future" aesthetic: Does it look premium?
*   Responsiveness: Does the new grid layout work on mobile?
