---
name: Bedbeards
description: Sculpt Your Beard, Define Your Style
colors:
  charcoal: "#0f0f0f"
  copper: "#ba704f"
  parchment: "#d0cbc6"
  ink-white: "#ffffff"
  ghost-copper: "rgba(186,112,79,0.55)"
typography:
  display:
    fontFamily: '"Gin Test", Georgia, serif'
    fontSize: "clamp(2.5rem, 5vw, 4rem)"
    fontWeight: 400
    lineHeight: 1.05
    letterSpacing: "-0.02em"
  headline:
    fontFamily: '"Gin Test", Georgia, serif'
    fontSize: "clamp(2rem, 4.4vw, 4rem)"
    fontWeight: 400
    lineHeight: 1.1
    letterSpacing: "-0.02em"
  body:
    fontFamily: '"Montserrat", system-ui, sans-serif'
    fontSize: "16px"
    fontWeight: 300
    lineHeight: "1.55"
  label:
    fontFamily: '"HelveticaNeueCyr", "Helvetica Neue", Helvetica, Arial, sans-serif'
    fontSize: "20px"
    fontWeight: 400
    lineHeight: "1"
rounded:
  none: "0px"
spacing:
  section-v: "100px"
  section-v-mobile: "60px"
  section-h: "80px"
  section-h-mobile: "20px"
  content-max: "1280px"
components:
  button-primary:
    backgroundColor: "rgba(186,112,79,0.85)"
    textColor: "#ffffff"
    rounded: "0px"
    padding: "0 0 0 30px"
    height: "40px"
  button-primary-hover:
    backgroundColor: "rgba(186,112,79,1)"
    textColor: "#ffffff"
    rounded: "0px"
    padding: "0 0 0 30px"
    height: "40px"
---

# Design System: Bedbeards

## 1. Overview

**Creative North Star: "The Obsidian Blade"**

A blade is black, exact, and utterly without ornament. Every surface of this design system earns that same description. The charcoal foundation (#0f0f0f) is not a dark mode; it is the material. Copper (#ba704f) does not decorate — it marks. It appears at the moments that matter: the active state, the CTA, the ghost watermark that frames a section heading. Its scarcity is the message.

The ghost watermark system is the signature move. Large Gin Test letterforms in copper outline sit behind section headlines, visible but not competing. They name the section without announcing it. This is the site's most distinctive pattern and must be preserved across every new page.

Motion exists for purpose, not polish. Framer Motion is used for image crossfades in the hero, accordion expansion in services, and scroll-triggered FadeInSection reveals. Every animation follows an ease-out curve. No bounce, no elastic, no entrance choreography that gates content visibility.

**Key Characteristics:**
- Zero-radius surfaces — every edge is sharp
- Three-font system: Gin Test display / Montserrat body / HelveticaNeueCyr nav
- Dark background is permanent, not optional
- Copper appears rarely; when it appears, it commands
- Ghost watermark text as section identity system
- Imagery at full bleed; dark overlays keep typography legible

## 2. Colors: The Blade Palette

Three roles. Nothing invented, nothing borrowed.

### Primary
- **Copper** (#ba704f): The brand's one accent. Used for active states, CTAs, ghost-text stroke, hover underlines on nav, section highlight lines. Appears at ≤15% of any screen surface. Never used as a background fill for large areas.

### Neutral
- **Charcoal** (#0f0f0f): The permanent background. Body background, mobile drawer, section backgrounds. Never replaced with a lighter surface except for the parchment panel.
- **Ink White** (#ffffff): Primary text color. All body copy, headings, nav links at rest.
- **Parchment** (#d0cbc6): The one light surface. Used exclusively for expanded service panels. It is the exception that proves the rule; do not extend it to other contexts.
- **Ghost Copper** (rgba(186,112,79,0.55)): The stroke value for watermark ghost text. Never used as fill.

### Named Rules
**The One Voice Rule.** Copper appears on ≤15% of any screen. Its rarity is the message. When copper is everywhere, nothing is important.

**The Parchment Exception.** The #d0cbc6 light surface exists for one reason: expanded service cards, where content needs to read against a contrasting ground. Do not introduce light backgrounds elsewhere.

## 3. Typography: The Gin Test / Montserrat Pairing

**Display Font:** Gin Test (400, Regular and Oblique), Georgia fallback — a serif with an editorial, calligraphic quality
**Body Font:** Montserrat (300 light for body, 400/600 for UI labels), system-ui fallback
**Nav/Label Font:** HelveticaNeueCyr, Helvetica Neue fallback — utility sans for navigation and small functional text

**Character:** Gin Test brings ink-on-paper warmth to a charcoal-dark surface. Montserrat at light weight reads soft against the dark background. HelveticaNeueCyr handles utility contexts where personality would distract.

### Hierarchy
- **Display** (Gin Test 400, clamp(2.5rem→4rem), line-height 1.05, tracking -0.02em): Hero headlines, section ghost watermarks. Maximum 2 lines.
- **Headline** (Gin Test 400, clamp(2rem→4rem), line-height 1.1, tracking -0.02em): Section headings (h2). The ghost watermark always accompanies a headline.
- **Title** (Gin Test 400, clamp(1.75rem→2.5rem), line-height 1.1): Service titles, team member names in expanded contexts. Copper tint on service panel bg.
- **Body** (Montserrat 300, 16px/20px, line-height 1.55): All paragraph copy. Cap line length at 65–70ch. Never light gray — always #ffffff or at minimum #ffffff99 (white/60) on dark bg.
- **Label** (HelveticaNeueCyr 400, 20px, line-height 1): Navigation links, button text. Capitalized (not all-caps). Nav links use pseudo-element copper underline on hover.

### Named Rules
**The Ghost Companion Rule.** Every h2 section heading has a corresponding ghost watermark text in Gin Test at the section tag, positioned absolutely behind the heading. This pattern is mandatory on all new section headers.

**The Weight Ceiling.** Montserrat 300 for body. Montserrat 600 for button labels. Nothing in between except specific UI labels (barber specialty, blog dates). Flat weight scales dilute hierarchy.

## 4. Elevation

This system is flat by default. Depth is conveyed through dark overlays on photography, not through box shadows on UI elements. The only shadow in use is a text glow: `text-shadow: 0 0 25px rgba(0,0,0,0.5)` applied to headlines overlaid on imagery (hero heading, slide counter). This is a readability tool, not decoration.

Images carry dark overlay gradients (`bg-black/30` to `bg-black/90` depending on text legibility needs). These are not UI shadows; they are photographic treatments.

### Shadow Vocabulary
- **Text glow** (`text-shadow: 0 0 25px rgba(0,0,0,0.5)`): Headlines on imagery. Readability, not decoration.
- **Ambient drop** (`drop-shadow-[0_0_25px_rgba(0,0,0,0.5)]`): Info panels that appear over imagery. Structural separation.

### Named Rules
**The Flat-By-Default Rule.** No `box-shadow` on cards, buttons, inputs, or containers. If an element needs to feel elevated, its background difference or dark overlay does that work. Shadows are reserved for text-over-image contexts.

## 5. Components

### Buttons
The button is a signature pattern: text block with copper background left, white arrow-box right. This distinctive split layout is the brand's only UI decoration.

- **Shape:** Zero radius (sharp on all four corners)
- **Primary:** Copper-85% opacity background (`rgba(186,112,79,0.85)`), white Montserrat 600 text at 20px, left padding 30px, height 40px. Arrow end-cap: #fbfbfb background, 48px wide, charcoal arrow SVG pointing down (rotated -90° → right-pointing)
- **Hover:** Copper transitions to 100% opacity (`rgba(186,112,79,1)`) over 200ms ease. No transform.
- **No secondary or ghost button variants.** All CTAs use primary. Link-styled text actions use nav underline treatment instead.

### Navigation
- **Desktop:** Fixed header, transparent at top → `rgba(15,15,15,0.95)` with `backdrop-blur-sm` on scroll. Horizontal links in HelveticaNeueCyr 20px white/85. Hover: color shifts to full white + copper pseudo-element underline animates from 0 to full width. Book Now CTA button on right.
- **Mobile:** Burger icon (three lines → X animation). Drawer expands below header with `height: 0 → auto` Framer Motion animation. Same links in vertical stack with Book Now button at bottom.
- **Active link indication:** Copper underline pseudo-element. No background fills.

### Section Header (Signature Component)
The branded heading pattern used throughout the site.

- Ghost watermark text: Gin Test Display size, `color: transparent`, `-webkit-text-stroke: 1.5px rgba(186,112,79,0.55)`. Positioned absolutely above/behind the h2, centered (or left/right aligned per section). z-index: 0.
- Section heading (h2): Gin Test Headline, relative, z-index: 1. Renders in front of ghost.
- Optional description: Montserrat 300 16px, white, positioned opposite side or below depending on alignment.
- Three alignment modes: left (ghost aligns left), right (ghost aligns right, description left of heading), center (everything centered).

### Cards / Containers
- **Service cards (collapsed):** Full-bleed image with dark overlay. Service label in Gin Test 22px bottom-left. Plus icon bottom-right. No border, no shadow, no radius.
- **Service info panel (expanded):** Parchment (#d0cbc6) background. Gin Test Title (copper tint). Montserrat Light body. Primary button. Three preview images in equal row at bottom. Sharp edges throughout.
- **Blog cards:** Full-bleed image (350px height). Text block below with date, headline, excerpt, arrow link. No card border or radius.
- **Team cards:** Full-bleed portrait. Nickname in Gin Test italic below. Name bold, specialty light. Social icon row.

### Divider
Single rule: `1px solid rgba(255,255,255,0.15)`. Full-width. Used to frame section headers and create visual breathing room. No decorative dividers, no gradient rules.

### Ghost Text Watermarks
The signature system. Behavior spec:
- `position: absolute`, `z-index: 0`
- Heading sibling: `position: relative`, `z-index: 1`
- Never apply `overflow: hidden` to the container holding both ghost and heading — the ghost extends above its container
- Section wrapper may have `overflow: hidden` only if the ghost stays within section bounds

## 6. Do's and Don'ts

### Do:
- **Do** use the charcoal (#0f0f0f) background on every new page. It is the material, not a preference.
- **Do** pair every h2 with a ghost watermark in Gin Test. The Ghost Companion Rule is mandatory for all section headers.
- **Do** keep copper at ≤15% of any screen surface. Use it on active states, CTAs, and the ghost stroke only.
- **Do** use full-bleed photography with dark overlays. Images are structural, not decorative.
- **Do** keep all edges sharp (border-radius: 0). The zero-radius doctrine applies to all containers, cards, inputs, and panels.
- **Do** use Montserrat 300 for body and 600 for button labels. Never use medium weights for prose.
- **Do** apply `prefers-reduced-motion` alternatives to every Framer Motion animation.

### Don't:
- **Don't** make the site look like Sports Clips or Great Clips. No franchise patterns: no high-saturation orange headers, no template-feeling grid layouts, no stock-photo warmth.
- **Don't** use bright, colorful, or playful design elements. This is a serious grooming studio. Nothing cheerful or casual.
- **Don't** introduce additional accent colors. Copper is the one voice. There is no secondary accent.
- **Don't** add border-radius to any UI element. The zero-radius doctrine has no exceptions except pills on badge-sized tags if introduced.
- **Don't** use the parchment (#d0cbc6) surface outside expanded service panels. It is the exception, not a reusable pattern.
- **Don't** apply `overflow: hidden` to containers that hold ghost watermark text. The ghost sits above the container boundary; clipping it destroys the effect.
- **Don't** use gradient text (`background-clip: text`). Copper is solid or transparent. Never gradient.
- **Don't** use side-stripe borders (`border-left` or `border-right` greater than 1px as decoration).
- **Don't** add eyebrow labels above every section heading. Section identity comes from the ghost watermark system, not from all-caps tracked kickers.
