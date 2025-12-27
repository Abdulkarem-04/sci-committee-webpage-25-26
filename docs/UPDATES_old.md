# 🔥 SCI Committee Website - Recent Updates

## Changes Made:

### 1. **Committee Structure Reorganized** 📋
   - **Advisors** (New section with 2 people):
     - Ridwan Afolabi Muhammad - Student Advisor
     - Dean (Name) - Faculty Advisor
   
   - **Executive Board** (New Top Committee with 4 people):
     - Thomas Chit Ko Ko - President
     - Anas Muhammed - Vice-President
     - Fathima Wazhna - Secretary
     - Nurullah - Treasurer
   
   - **Team Leaders** (7 leaders - unchanged)
   - **Team Members** (unchanged)

### 2. **Logo Section in Navbar** 🎨
   - Added space for **two logos**: University Logo + SCI Committee Logo
   - Logos appear in the top-left of navbar
   - Currently show as placeholder boxes (AIU Logo, SCI Logo)
   - Easy to replace with actual image URLs

### 3. **Centered Member Grids** 🎯
   - All member cards now display centered on the page
   - Responsive: adapts to screen size
   - Still maintains grid layout but centers the entire grid

### 4. **Much Darker Dark Mode** 🌙
   - Dark mode background changed from `#1A1A1A` to `#0D0D0D` (much darker)
   - Secondary background: `#2D2D2D` to `#1A1A1A` (darker)
   - Text colors adjusted for better contrast
   - More comfortable for nighttime viewing

### 5. **SCI Logo-Inspired Theme** ✨
   - Color scheme remains: Green #5CB85C, Teal #32B8C6, Navy #1F2121
   - Gradients and accents align with SCI brand
   - Logo placeholders have colored borders matching theme

---

## How to Update Details:

### Update Advisor Info:
In `script.js`, find `advisors` section:
```javascript
advisors: [
    {
        name: 'Ridwan Afolabi Muhammad',
        role: 'Student Advisor',
        team: 'Advisory Board',
        country: 'Nigeria',
        linkedin: '#'
    },
    {
        name: 'Dean (Name)',  // ← Change this
        role: 'Faculty Advisor',
        team: 'Advisory Board',
        country: 'Country',  // ← Change this
        linkedin: '#'  // ← Add LinkedIn URL
    }
]
```

### Update Executive Board:
In `script.js`, find `topCommittee` section and update:
- Thomas Chit Ko Ko (President) - add country and LinkedIn
- Anas Muhammed (Vice-President) - add country and LinkedIn
- Fathima Wazhna (Secretary) - add country and LinkedIn
- Nurullah (Treasurer) - add country and LinkedIn

### Add Logo Images:
In `index.html`, find the navbar section:
```html
<div class="nav-logos">
    <div class="logo-placeholder uni-logo">AIU Logo</div>
    <div class="logo-placeholder sci-logo">SCI Logo</div>
</div>
```

Replace with actual images:
```html
<div class="nav-logos">
    <img src="path/to/aiu-logo.png" alt="AIU Logo" class="nav-logo-img">
    <img src="path/to/sci-logo.png" alt="SCI Logo" class="nav-logo-img">
</div>
```

Then add to `styles.css`:
```css
.nav-logo-img {
    width: 50px;
    height: 50px;
    object-fit: contain;
}
```

---

## Color Customization:

If you want to change the SCI theme colors, update in `styles.css`:
```css
:root {
    --primary: #5CB85C;      /* Main Green - Change here */
    --secondary: #32B8C6;    /* Teal - Change here */
    --accent: #1F2121;       /* Navy - Change here */
}
```

---

## Dark Mode Colors:

If you want to adjust dark mode further:
```css
@media (prefers-color-scheme: dark) {
    :root {
        --bg-primary: #0D0D0D;    /* Very dark background */
        --bg-secondary: #1A1A1A;  /* Dark secondary */
        /* Adjust as needed */
    }
}
```

---