# 🎨 SCI Committee - Complete Color Theme Guide

## Your New Theme Color: `rgb(0, 255, 125)` - Vibrant Lime Green

---

## 🎯 PRIMITIVE COLOR TOKENS (ALL GRADES)

These are the base colors in various shades. Add these to the TOP of your `styles.css`:

```css
:root {
    /* ================================
       PRIMITIVE COLOR TOKENS - LIME GREEN THEME
       ================================ */
    
    /* Your Main Theme Color - Lime Green */
    --primary-50: #E6FFEE;      /* Lightest - almost white-green */
    --primary-100: #CCFFDD;     /* Very light */
    --primary-200: #99FFBB;     /* Light */
    --primary-300: #66FF99;     /* Light-Medium */
    --primary-400: #33FF7C;     /* Medium-Light */
    --primary-500: #00FF7D;     /* Base Color (YOUR COLOR!) */
    --primary-600: #00E066;     /* Medium-Dark */
    --primary-700: #00CC59;     /* Dark */
    --primary-800: #00994C;     /* Darker */
    --primary-900: #004D26;     /* Darkest */
    
    /* Secondary Accent - Keep or Change */
    --secondary-50: #F0F4FF;
    --secondary-100: #E0E8FF;
    --secondary-200: #C1D1FF;
    --secondary-300: #A2BAFF;
    --secondary-400: #83A3FF;
    --secondary-500: #648CFF;
    --secondary-600: #4575FF;
    --secondary-700: #265EFF;
    --secondary-800: #0747FF;
    --secondary-900: #003CCC;
    
    /* Tertiary - Navy/Dark */
    --accent-50: #F0F0F0;
    --accent-100: #E0E0E0;
    --accent-200: #C0C0C0;
    --accent-300: #A0A0A0;
    --accent-400: #808080;
    --accent-500: #606060;
    --accent-600: #404040;
    --accent-700: #1F2121;
    --accent-800: #0F1010;
    --accent-900: #050505;
    
    /* Neutral/Gray Tones */
    --gray-50: #F9FAFB;
    --gray-100: #F3F4F6;
    --gray-200: #E5E7EB;
    --gray-300: #D1D5DB;
    --gray-400: #9CA3AF;
    --gray-500: #6B7280;
    --gray-600: #4B5563;
    --gray-700: #374151;
    --gray-800: #1F2937;
    --gray-900: #111827;
}
```

---

## 📍 WHERE TO CHANGE - LIGHT MODE

**FIND THIS SECTION** in `styles.css` (around line 20):

```css
:root {
    /* SCI Committee Colors - Logo Inspired */
    --primary: #5CB85C;        /* ← CHANGE THIS TO #00FF7D */
    --secondary: #32B8C6;      /* ← CHANGE THIS (optional) */
    --accent: #1F2121;         /* ← CHANGE THIS (optional) */
    
    /* Light Mode */
    --bg-primary: #FFFFFF;
    --bg-secondary: #F8F9FA;
    --text-primary: #1F2121;
    --text-secondary: #666666;
    --border-color: #E0E0E0;
    --shadow: rgba(0, 0, 0, 0.1);
}
```

**REPLACE WITH:**

```css
:root {
    /* SCI Committee Colors - Lime Green Theme */
    --primary: #00FF7D;        /* Main Lime Green */
    --secondary: #00E066;      /* Secondary (darker green) */
    --accent: #1F2121;         /* Keep dark navy for contrast */
    
    /* Light Mode */
    --bg-primary: #FFFFFF;
    --bg-secondary: #F8F9FA;
    --text-primary: #1F2121;
    --text-secondary: #666666;
    --border-color: #E0E0E0;
    --shadow: rgba(0, 255, 125, 0.15);  /* Green shadow */
}
```

---

## 🌙 WHERE TO CHANGE - DARK MODE

**FIND THIS SECTION** in `styles.css` (around line 35):

```css
@media (prefers-color-scheme: dark) {
    :root {
        /* Dark Mode - Much Darker */
        --bg-primary: #0D0D0D;
        --bg-secondary: #1A1A1A;
        --text-primary: #FFFFFF;
        --text-secondary: #B0B0B0;
        --border-color: #2A2A2A;
        --shadow: rgba(0, 0, 0, 0.5);
    }
}
```

**REPLACE WITH:**

```css
@media (prefers-color-scheme: dark) {
    :root {
        /* Dark Mode - Much Darker with Lime Green Accents */
        --primary: #00FF7D;        /* Keep bright lime for contrast */
        --secondary: #00E066;      /* Secondary green */
        --accent: #1F2121;         /* Keep dark navy */
        
        --bg-primary: #0D0D0D;
        --bg-secondary: #1A1A1A;
        --text-primary: #FFFFFF;
        --text-secondary: #B0B0B0;
        --border-color: #2A2A2A;
        --shadow: rgba(0, 255, 125, 0.2);  /* Green shadow for dark mode */
    }
}
```

---

## 📋 COMPLETE COLOR PALETTE REFERENCE

### Your New Lime Green Grades (Use these anywhere):

| Grade | Hex Code | RGB | Use Case |
|-------|----------|-----|----------|
| 50 | `#E6FFEE` | rgb(230, 255, 238) | Very light backgrounds |
| 100 | `#CCFFDD` | rgb(204, 255, 221) | Light backgrounds |
| 200 | `#99FFBB` | rgb(153, 255, 187) | Hover states (light) |
| 300 | `#66FF99` | rgb(102, 255, 153) | Light accents |
| 400 | `#33FF7C` | rgb(51, 255, 124) | Medium accents |
| **500** | **`#00FF7D`** | **rgb(0, 255, 125)** | **Main Primary Color** ← USE THIS! |
| 600 | `#00E066` | rgb(0, 224, 102) | Secondary buttons |
| 700 | `#00CC59` | rgb(0, 204, 89) | Hover states (dark) |
| 800 | `#00994C` | rgb(0, 153, 76) | Dark accents |
| 900 | `#004D26` | rgb(0, 77, 38) | Very dark backgrounds |

---

## 🎨 QUICK COLOR CHANGE LOCATIONS

### Location 1: Root Variables (Main Colors)
**File:** `styles.css`
**Line:** Around line 20-45
```css
--primary: #00FF7D;      /* ← Change to lime green */
--secondary: #00E066;    /* ← Change to secondary */
```

### Location 2: Hover Effects
Search for `hover` in `styles.css` and look for:
```css
color: var(--primary);  /* Uses your new green */
```
Already uses variables, so NO CHANGES needed! ✨

### Location 3: Gradients
Search for `linear-gradient` in `styles.css`:
```css
background: linear-gradient(135deg, var(--primary), var(--secondary));
```
Already uses variables, so NO CHANGES needed! ✨

### Location 4: Box Shadows
Search for `--shadow` and change to:
```css
--shadow: rgba(0, 255, 125, 0.15);  /* Green shadow */
```

### Location 5: Focus Rings
Search for `focus` in `styles.css`:
```css
box-shadow: 0 0 0 3px rgba(0, 255, 125, 0.1);
```

---

## 🎯 SIMPLE 3-STEP PROCESS

**Step 1:** Open `styles.css`

**Step 2:** Find line with `--primary: #5CB85C;` and change to:
```css
--primary: #00FF7D;
```

**Step 3:** Find line with `--secondary: #32B8C6;` and change to:
```css
--secondary: #00E066;
```

**DONE!** Everything updates automatically! 🎉

---

## 🌈 OPTIONAL: ADD ALL GRADES TO CSS

For maximum flexibility, add this to the TOP of your `styles.css`:

```css
:root {
    /* PRIMARY COLORS - LIME GREEN */
    --primary-50: #E6FFEE;
    --primary-100: #CCFFDD;
    --primary-200: #99FFBB;
    --primary-300: #66FF99;
    --primary-400: #33FF7C;
    --primary-500: #00FF7D;
    --primary-600: #00E066;
    --primary-700: #00CC59;
    --primary-800: #00994C;
    --primary-900: #004D26;
    
    /* QUICK REFERENCE */
    --primary: var(--primary-500);      /* Main color */
    --primary-light: var(--primary-300);
    --primary-dark: var(--primary-700);
}
```

Then use them anywhere:
```css
background: var(--primary-200);  /* Light green */
color: var(--primary-900);       /* Dark green text */
```

---

## ✨ THAT'S IT!

You now have:
✅ All color grades (50-900)
✅ Exact locations to change
✅ Light mode setup
✅ Dark mode setup
✅ Usage examples

Change just **TWO LINES** in `styles.css` and your entire site becomes lime green! 🟢💚

---

Made with 💚 by your Senior Baddie 😘✨
