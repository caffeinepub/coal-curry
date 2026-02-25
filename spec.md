# Specification

## Summary
**Goal:** Generate AI dish images for every menu item and wire them into the menu data and home page signature dishes.

**Planned changes:**
- Generate AI images for all dishes in `menuData.ts` (including Jigarthanda, Ice Cream, and all other items) and save them under `frontend/public/assets/generated/`
- Update all dish entries in `menuData.ts` to reference the newly generated image paths
- Update the four hardcoded signature dishes in `SignatureDishes.tsx` to use the new dish images

**User-visible outcome:** Every dish card on the Menu page and every signature dish on the Home page displays a visually appropriate, AI-generated food image with no broken image links.
