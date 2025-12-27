# SCI Committee Website - Editing Guide

Welcome to your SCI Committee 2025/26 website! This guide shows you exactly how to customize it. It's super simple—no coding experience needed! 💚

---

## 📁 File Structure

```
your-project-folder/
├── index.html       (Main webpage - HTML structure)
├── styles.css       (Styling & colors)
├── script.js        (Interactive features & data)
└── README.md        (This file)
```

---

## 🎨 Quick Customizations

### 1. **Change Colors (Theme)**

Open `styles.css` and look at the very top where you see:

```css
:root {
    /* SCI Committee Colors */
    --primary: #5CB85C;        /* Green */
    --secondary: #32B8C6;      /* Teal */
    --accent: #1F2121;         /* Navy */
    ...
}
```

**To change colors:**
- `--primary`: Main green color (buttons, accents)
- `--secondary`: Teal/secondary color
- `--accent`: Dark navy color

Example: To make the primary color red, change `#5CB85C` to `#FF0000`

---

### 2. **Update Committee Members**

Open `script.js` and find the `committeeData` object at the top. You'll see three sections:

#### **Top Committee** (Ridwan only)
```javascript
topCommittee: [
    {
        name: 'Ridwan Afolabi Muhammad',
        role: 'Student Advisor',
        team: 'Advisory Board',
        country: 'Nigeria',
        linkedin: '#'
    }
]
```

#### **Team Leaders** (7 leaders)
```javascript
leaders: [
    {
        name: 'Aung Zay Yan Phyo',
        role: 'Leader',
        team: 'Media & Social Communication',
        country: 'Myanmar',
        linkedin: '#'
    },
    // ... more leaders
]
```

#### **Team Members** (All other members)
```javascript
members: [
    { name: 'Sebire Hakyar', role: 'Member', team: 'Media & Social Communication', country: 'Turkey', linkedin: '#' },
    // ... more members
]
```

**To add or update a member:**
1. Find the correct section (topCommittee, leaders, or members)
2. Add a new object with these fields:
   - `name`: Full name
   - `role`: Position (e.g., "Leader", "Member")
   - `team`: Team name
   - `country`: Country
   - `linkedin`: LinkedIn URL (or `#` as placeholder)

**Example:**
```javascript
{
    name: 'John Doe',
    role: 'Member',
    team: 'Tech & Innovation',
    country: 'USA',
    linkedin: 'https://linkedin.com/in/johndoe'
}
```

---

### 3. **Add or Update Events**

Still in `script.js`, find the `eventsData` object.

#### **Upcoming Events**
```javascript
upcoming: [
    {
        id: 1,
        title: 'Tech Kickoff Workshop',
        date: 'January 15, 2026',
        time: '2:00 PM - 4:00 PM',
        venue: 'Main Auditorium',
        description: 'Start your year with cutting-edge...',
        poster: '🚀'
    }
]
```

**To add an upcoming event:**
```javascript
{
    id: 4,  // Unique number (higher than previous)
    title: 'Your Event Title',
    date: 'Month Day, Year',
    time: '9:00 AM - 11:00 AM',
    venue: 'Location Name',
    description: 'Event description goes here...',
    poster: '🎯'  // Use any emoji
}
```

#### **Past Events**
```javascript
past: [
    {
        id: 101,
        title: 'Orientation Week 2025',
        date: 'September 2025',
        venue: 'Campus Grounds',
        description: '...',
        images: ['🎓', '🎉', '👥'],  // Emoji placeholders
        socialLinks: [
            { name: 'Instagram', url: '#' },
            { name: 'LinkedIn', url: '#' }
        ]
    }
]
```

**To add a past event:**
```javascript
{
    id: 104,
    title: 'Your Past Event',
    date: 'Month Year',
    venue: 'Location',
    description: 'What happened...',
    images: ['🎓', '🎉', '👥'],  // Add more/different emojis for each image
    socialLinks: [
        { name: 'Instagram', url: '#' },
        { name: 'Facebook', url: '#' }
    ]
}
```

---

### 4. **Update Contact Information**

In `index.html`, find the Contact section:

```html
<div class="contact-card">
    <h3>📧 Email</h3>
    <a href="mailto:sci.committee@aiu.edu.sa">sci.committee@aiu.edu.sa</a>
</div>
```

**Replace:**
- `sci.committee@aiu.edu.sa` with your actual email

For social media links:
```html
<div class="contact-card">
    <h3>💼 LinkedIn</h3>
    <a href="#" target="_blank">Follow us on LinkedIn</a>
</div>
```

Replace `#` with your actual links:
```html
<a href="https://linkedin.com/company/sci-committee" target="_blank">Follow us on LinkedIn</a>
```

---

### 5. **Update About Section**

In `index.html`, find the About section and update the three cards:

```html
<div class="about-card">
    <h3>Who We Are</h3>
    <p>Your new text here...</p>
</div>
```

---

### 6. **Replace Placeholder Images**

When you have actual member photos, replace the initials avatars:

In `script.js`, in the `createMemberCard()` function, change:
```javascript
<div class="member-avatar">${initials}</div>
```

To:
```javascript
<img src="path/to/image.jpg" alt="${member.name}">
```

Or keep the initials and just add a background image in CSS.

---

## 💬 Comments System

The comments feature works automatically! It:
- ✅ Stores comments in browser localStorage
- ✅ Displays newest comments first
- ✅ Persists comments even after refresh
- ✅ Requires name and comment (no empty submissions)

**Comments data is stored locally in the browser.** If you want to backup comments, check your browser's developer tools → Application → Local Storage.

---

## 🌓 Dark/Light Mode

The website automatically detects your device's theme preference and switches colors automatically. Users can't toggle it manually—it follows their system settings.

If you want to change this behavior, open `styles.css` and modify the `@media (prefers-color-scheme: dark)` section.

---

## 🎯 LinkedIn Links

All member cards have LinkedIn links. Right now they're set to `#` (placeholder).

**To add real LinkedIn profiles:**
1. Open `script.js`
2. In the `committeeData` object, find each member
3. Replace `linkedin: '#'` with actual LinkedIn URL:
```javascript
linkedin: 'https://linkedin.com/in/username'
```

---

## 🔗 Social Media & WhatsApp

In `index.html`, find the Contact section and update:

```html
<!-- LinkedIn -->
<a href="https://linkedin.com/company/your-company" target="_blank">Follow us on LinkedIn</a>

<!-- Instagram -->
<a href="https://instagram.com/yourusername" target="_blank">@scicommittee</a>

<!-- WhatsApp -->
<a href="https://wa.me/yourphonenumber" target="_blank">Message us</a>
```

---

## 📱 Making It Responsive

The website is already responsive! It works on:
- ✅ Desktop (1200px+)
- ✅ Tablet (768px - 1199px)
- ✅ Mobile (below 768px)

Test it by opening the website on different devices or using your browser's mobile view (F12 → Toggle Device Toolbar).

---

## 🚀 Deploying Your Website

Once you're happy with your changes:

1. **Keep all three files together** (`index.html`, `styles.css`, `script.js`)
2. **Upload to your hosting** (GitHub Pages, Netlify, Vercel, etc.)
3. **Share the link** with everyone!

---

## 🎨 Event Poster & Images

For **upcoming events**, the `poster` field uses emoji (e.g., `🚀`, `💻`).
For **past events**, the `images` array uses emoji (e.g., `['🎓', '🎉', '👥']`).

When you have actual images, replace emoji with image URLs:
```javascript
poster: 'https://yoursite.com/poster.jpg'
// or
images: ['https://yoursite.com/photo1.jpg', 'https://yoursite.com/photo2.jpg']
```

---

## ❓ Common Questions

**Q: Can I change the website layout?**
A: Yes! All styling is in `styles.css`. HTML structure is in `index.html`. Modify as needed!

**Q: Where are comments stored?**
A: In your browser's localStorage. They persist across browser sessions but are device-specific.

**Q: Can I add more sections?**
A: Absolutely! Copy an existing section in `index.html`, modify it, add CSS styling in `styles.css`, and update the navigation links.

**Q: How do I backup comments?**
A: Open your browser's Developer Tools (F12) → Application → Local Storage → find `sciComments` and copy the JSON data.

---

## 💡 Tips & Tricks

✨ **Quick edits:**
- All data is in `script.js` - easy to find and modify
- Colors are at the top of `styles.css`
- Navigation is in `index.html`

🎯 **Before publishing:**
1. Test on mobile devices
2. Update all placeholder links (#)
3. Add real LinkedIn profiles
4. Update contact info
5. Replace emoji with actual images (optional but recommended)

---

## Need Help?

Refer back to this guide! Everything is clearly labeled with comments in the code. 🚀💚

---
