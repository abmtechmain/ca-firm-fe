# Hero Section Image Dimensions Guide

## Navigation Bar Heights
- **Marquee**: 51px
- **NavBar**: ~100px (with padding)
- **ContactBar**: ~40px (desktop only, hidden on mobile)

## Desktop Hero Image Dimensions

### Recommended Dimensions:
- **Width**: 1920px (Full HD) or 2560px (2K) or 3840px (4K)
- **Height**: Varies based on viewport, but recommended:
  - **Minimum**: 800px height
  - **Recommended**: 1000px - 1200px height
  - **Maximum**: 1500px height

### Aspect Ratios:
- **16:9** (most common): 1920px × 1080px
- **21:9** (ultrawide): 2560px × 1080px
- **16:10**: 1920px × 1200px

### Recommended Desktop Size:
**1920px × 1080px** (16:9 aspect ratio)
- This works well for most desktop screens
- File format: JPG or WebP
- File size: Keep under 500KB for fast loading

### Alternative Desktop Sizes:
- **2560px × 1440px** (2K, 16:9)
- **3840px × 2160px** (4K, 16:9) - Only if you need ultra-high quality

---

## Mobile Hero Image Dimensions

### Recommended Dimensions:
- **Width**: 750px - 1080px (for retina displays)
- **Height**: 600px - 900px

### Aspect Ratios:
- **9:16** (portrait, most common for mobile): 1080px × 1920px
- **3:4**: 1080px × 1440px
- **1:1** (square): 1080px × 1080px

### Recommended Mobile Size:
**1080px × 1920px** (9:16 aspect ratio - Portrait)
- Optimized for mobile portrait orientation
- File format: JPG or WebP
- File size: Keep under 300KB for fast loading

### Alternative Mobile Sizes:
- **750px × 1334px** (iPhone standard)
- **1080px × 1440px** (3:4 ratio)
- **1080px × 1080px** (1:1 square)

---

## Design Guidelines

### Desktop Images:
1. **Important content** should be in the center 60% of the image
2. **Text overlays** (if any) should be placed in the center or upper third
3. **Focal point** should be horizontally centered
4. **Safe zone**: Keep important elements within 1920px × 800px center area

### Mobile Images:
1. **Important content** should be in the center vertical 50% of the image
2. **Text overlays** (if any) should be in the upper or middle third
3. **Focal point** should be vertically centered
4. **Safe zone**: Keep important elements within 1080px × 1200px center area

---

## File Naming Convention

Suggested naming:
- Desktop: `hero-desktop-1.jpg`, `hero-desktop-2.jpg`, etc.
- Mobile: `hero-mobile-1.jpg`, `hero-mobile-2.jpg`, etc.

Or:
- Desktop: `hero-1-desktop.jpg`, `hero-2-desktop.jpg`, etc.
- Mobile: `hero-1-mobile.jpg`, `hero-2-mobile.jpg`, etc.

---

## Technical Specifications

### Desktop:
- **Resolution**: 1920px × 1080px
- **Aspect Ratio**: 16:9
- **Format**: JPG (quality 85-90) or WebP
- **Max File Size**: 500KB
- **Color Space**: sRGB

### Mobile:
- **Resolution**: 1080px × 1920px
- **Aspect Ratio**: 9:16 (Portrait)
- **Format**: JPG (quality 80-85) or WebP
- **Max File Size**: 300KB
- **Color Space**: sRGB

---

## Quick Reference

| Device Type | Width | Height | Aspect Ratio | File Size |
|------------|-------|--------|--------------|-----------|
| **Desktop** | 1920px | 1080px | 16:9 | < 500KB |
| **Mobile** | 1080px | 1920px | 9:16 | < 300KB |

---

## Notes:
- Images will be cropped to fit using `object-cover` CSS property
- The hero section uses `fill` with Next.js Image component, so images will scale responsively
- Always design with the safe zones in mind to ensure important content is visible on all devices
- Test images on actual devices to ensure they look good
