// Navigation Tracking
let lastScrollTop = 0;
let isScrollingToSection = false;
const navHeight = 70;

/* ================================
   COMMITTEE DATA
   ================================ */

const committeeData = {
    advisors: [
        {
            name: 'Ridwan Afolabi Muhammad',
            image: 'assets/images/members_avatar/#',
            role: 'Student Advisor',
            team: 'Advisory Board',
            country: 'Nigeria',
            linkedin: '#'
        },
        {
            name: 'Dean (Name)',
            image: 'assets/images/members_avatar/#',
            role: 'Dean',
            team: 'Advisory Board',
            country: 'Country',
            linkedin: '#'
        }
    ],
    topCommittee: [
        {
            name: 'Thomas Chit Ko Ko',
            image: 'assets/images/members_avatar/#',
            role: 'President',
            team: 'Executive Board',
            country: 'Myanmar',
            linkedin: '#'
        },
        {
            name: 'Anas Muhammed',
            image: 'assets/images/members_avatar/#',
            role: 'Vice-President',
            team: 'Executive Board',
            country: 'Country',
            linkedin: '#'
        },
        {
            name: 'Fathima Wazhna',
            image: 'assets/images/members_avatar/#',
            role: 'Secretary',
            team: 'Executive Board',
            country: 'Country',
            linkedin: '#'
        },
        {
            name: 'Nurullah',
            image: 'assets/images/members_avatar/#',
            role: 'Treasurer',
            team: 'Executive Board',
            country: 'Country',
            linkedin: '#'
        }
    ],
    leaders: [
        {
            name: 'Aung Zay Yan Phyo',
            image: 'assets/images/members_avatar/#',
            role: 'Leader',
            team: 'Media & Social Communication',
            country: 'Myanmar',
            linkedin: '#'
        },
        {
            name: 'Nay Paing Oo',
            image: 'assets/images/members_avatar/#',
            role: 'Leader',
            team: 'Academic Support & Development',
            country: 'Myanmar',
            linkedin: '#'
        },
        {
            name: 'Maryam Hussaina',
            image: 'assets/images/members_avatar/#',
            role: 'Leader',
            team: 'Event and Logistics',
            country: 'Sri Lanka',
            linkedin: '#'
        },
        {
            name: 'Abdusalam Sisawo',
            image: 'assets/images/members_avatar/#',
            role: 'Leader',
            team: 'Welfare & Engagement',
            country: 'Gambia',
            linkedin: '#'
        },
        {
            name: 'Aya Tarig Salaheldein Bashir',
            image: 'assets/images/members_avatar/#',
            role: 'Leader',
            team: 'Community Outreach & Collaboration',
            country: 'Sudan',
            linkedin: '#'
        },
        {
            name: 'Abdulkarem Abubakar Ajogal',
            image: 'assets/images/members_avatar/abdulkarem_abubakar_ajoga.jpeg',
            role: 'Leader',
            team: 'Tech & Innovation',
            country: 'Nigeria',
            linkedin: 'https://www.linkedin.com/in/abdulkarem-abubakar-9a891328a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'
        },
        {
            name: 'Ishmam Siddique',
            image: 'assets/images/members_avatar/#',
            role: 'Leader',
            team: 'Sports & Recreation',
            country: 'Bangladesh',
            linkedin: '#'
        }
    ],
    members: [
        // Media & Social Communication
        { name: 'Sebire Hakyar', image: 'assets/images/members_avatar/#', role: 'Member', team: 'Media & Social Communication', country: 'Turkey', linkedin: '#' },
        { name: 'Nur Jumairah Binti Shaffri', image: 'assets/images/members_avatar/#', role: 'Member', team: 'Media & Social Communication', country: 'Malaysia', linkedin: '#' },
        { name: 'Abdullah Safras Ahamed', image: 'assets/images/members_avatar/#', role: 'Member', team: 'Media & Social Communication', country: 'Sri Lanka', linkedin: '#' },
        
        // Academic Support & Development
        { name: 'Mohamed Hamdan Ameer Irshad', image: 'assets/images/members_avatar/#', role: 'Member', team: 'Academic Support & Development', country: 'Sri Lanka', linkedin: '#' },
        { name: 'Jahid Hassan Noor', image: 'assets/images/members_avatar/#', role: 'Member', team: 'Academic Support & Development', country: 'Bangladesh', linkedin: '#' },
        { name: 'Hamdha Banu Ainudeen Hasiyar', image: 'assets/images/members_avatar/#', role: 'Member', team: 'Academic Support & Development', country: 'Sri Lanka', linkedin: '#' },
        { name: 'Raihanah Senan Qaid Ali Al-Garadi', image: 'assets/images/members_avatar/#', role: 'Member', team: 'Academic Support & Development', country: 'Yemen', linkedin: '#' },
        
        // Event and Logistics
        { name: 'Khalid Abdussamii', image: 'assets/images/members_avatar/#', role: 'Member', team: 'Event and Logistics', country: 'Nigeria', linkedin: '#' },
        { name: 'Muhammad Hasnat Anwar', image: 'assets/images/members_avatar/#', role: 'Member', team: 'Event and Logistics', country: 'Pakistan', linkedin: '#' },
        { name: 'Muhib Nabil Ali Mohsen', image: 'assets/images/members_avatar/#', role: 'Member', team: 'Event and Logistics', country: 'Yemen', linkedin: '#' },
        
        // Welfare & Engagement
        { name: 'Liyana Affifa', image: 'assets/images/members_avatar/#', role: 'Member', team: 'Welfare & Engagement', country: 'Malaysia', linkedin: '#' },
        
        // Community Outreach & Collaboration
        { name: 'Usman Anyalo Usman', image: 'assets/images/members_avatar/#', role: 'Member', team: 'Community Outreach & Collaboration', country: 'Nigeria', linkedin: '#' },
        { name: 'Sankumba Balajo', image: 'assets/images/members_avatar/#', role: 'Member', team: 'Community Outreach & Collaboration', country: 'Gambia', linkedin: '#' },
        
        // Tech & Innovation
        { name: 'Anwar Koji', image: 'assets/images/members_avatar/#', role: 'Member', team: 'Tech & Innovation', country: 'Ethiopia', linkedin: '#' },
        { name: 'Mohamed Khalid Mohamedahmed Mustafa', image: 'assets/images/members_avatar/#', role: 'Member', team: 'Tech & Innovation', country: 'Sudan', linkedin: '#' },
        
        // Sports & Recreation
        { name: 'Barakat Bukola Alli', image: 'assets/images/members_avatar/#', role: 'Member', team: 'Sports & Recreation', country: 'Nigeria', linkedin: '#' }
    ]
};

/* ================================
   EVENTS DATA
   ================================ */

const eventsData = {
    upcoming: [
        {
            id: 1,
            title: 'Launch Of Committee Webpage !',
            date: 'January 1, 2026',
            time: '2:00 AM - 10:00 PM',
            venue: '',
            description: '» SCI will launch their official webpage, featuring SCI committee values, all members with their key details, event system which will showcase the upcoming and pass events, a comment system that every can share their thoughts, and last but not the lease, an official contacts.',
            poster: 'assets/images/logos/SCI committee Logo.png'
        },

    ],
    past: [
        {
            id: 101,
            title: 'SCI Townhall 2025',
            date: 'December 18, 2025',
            venue: 'Convocation Hall',
            description: '» The School of Computing and Informatics (SCI) successfully hosted a combined leadership handover and academic recognition ceremony on December 18, 2025, at Albukhary International University. The event marked a significant transition with the launch of the first SCI Yearbook to honor the outgoing committee and the formal oath-taking of the new student leadership. Additionally, the session celebrated academic and extracurricular excellence by awarding Dean’s List scholars and recognizing winners of the KMF Young Innovators Challenge and CTF Cybersecurity competitions. Addressed by university leadership, the gathering fostered a spirit of unity and innovation through interactive activities like Kahoot and a lucky draw, reinforcing the school\'s collaborative culture.',
            images: [
                'assets/images/events/past/sci-townhall/1.jpeg',
                'assets/images/events/past/sci-townhall/2.jpeg',
                'assets/images/events/past/sci-townhall/3.jpeg',
                'assets/images/events/past/sci-townhall/4.jpeg',
                'assets/images/events/past/sci-townhall/5.jpeg',
                'assets/images/events/past/sci-townhall/6.jpeg',
                'assets/images/events/past/sci-townhall/7.jpeg',
                'assets/images/events/past/sci-townhall/8.jpeg',
                'assets/images/events/past/sci-townhall/9.jpeg',
                'assets/images/events/past/sci-townhall/10.jpeg',
                'assets/images/events/past/sci-townhall/11.jpeg',
            ],
            socialLinks: [
                { name: '<i class="fa-brands fa-instagram"></i>', url: '#' },
                { name: '<i class="fa-brands fa-linkedin"></i>', url: 'https://www.linkedin.com/company/school-of-computing-informatics-committee-aiu/' }
            ]
        },

    ]
};

/* ================================
   INITIALIZATION 1
   ================================ */

document.addEventListener('DOMContentLoaded', function() {
    initHeroSlider();
    renderMembers();
    renderEvents();
    loadComments();
    setupNavigation();
    setupCommentForm();
    setupEventListeners();
    setupScrollHandling();
});

function setupScrollHandling() {
    const navbar = document.querySelector('.navbar');

    window.addEventListener('scroll', function() {
        // Skip logic if we are currently scrolling to a specific section via click
        if (isScrollingToSection) return;

        let st = window.pageYOffset || document.documentElement.scrollTop;

        // If scrolling down, hide; if scrolling up, show
        if (st > lastScrollTop && st > navHeight) {
            navbar.classList.add('navbar--hidden');
        } else {
            navbar.classList.remove('navbar--hidden');
        }

        lastScrollTop = st <= 0 ? 0 : st;
    }, false);
}

function initHeroSlider() {
    const slides = document.querySelectorAll('.slide');
    if (slides.length === 0) return;
    let currentSlideIndex = 0;
    const slideDuration = 2000;

    function goToNextSlide() {
        slides[currentSlideIndex].classList.remove('active');
        currentSlideIndex = (currentSlideIndex + 1) % slides.length;
        slides[currentSlideIndex].classList.add('active');
    }
    setInterval(goToNextSlide, slideDuration);
}

/* ================================
   RENDER MEMBERS
   ================================ */

function renderMembers() {
    // Advisors
    const advisorsGrid = document.getElementById('advisorsGrid');
    advisorsGrid.innerHTML = committeeData.advisors.map(member => createMemberCard(member)).join('');

    // Top Committee
    const topCommitteeGrid = document.getElementById('topCommitteeGrid');
    topCommitteeGrid.innerHTML = committeeData.topCommittee.map(member => createMemberCard(member)).join('');

    // Leaders
    const leadersGrid = document.getElementById('leadersGrid');
    leadersGrid.innerHTML = committeeData.leaders.map(member => createMemberCard(member)).join('');

    // Members
    const membersGrid = document.getElementById('membersGrid');
    membersGrid.innerHTML = committeeData.members.map(member => createMemberCard(member)).join('');
}

function createMemberCard(member) {
    const initials = member.name.split(' ').map(n => n[0]).join('').toUpperCase();
    let avatarHTML = '';

    if (member.image) {
        avatarHTML = `<img src="${member.image}" alt="${member.name}" class="member-avatar-img">`;
    } else {
        avatarHTML = `<div class="member-avatar">${initials}</div>`;
    }

    return `
        <div class="member-card">
            <div class="member-avatar-container">${avatarHTML}</div>
            <div class="member-name">${member.name}</div>
            <div class="member-role">${member.role}</div>
            <div class="member-team">${member.team}</div>
            <div class="member-country-Linkedin">
                <div class="member-country">${member.country}</div>
                <a href="${member.linkedin}" class="member-linkedin" target="_blank"><i class="fa-brands fa-linkedin"></i></a>
            </div>
        </div>
    `;
}

/* ================================
   RENDER EVENTS
   ================================ */

function renderEvents() {
    // Upcoming Events
    const upcomingContainer = document.getElementById('upcomingEventsContainer');
    upcomingContainer.innerHTML = eventsData.upcoming.map(event => createEventCard(event, 'upcoming')).join('');

    // Past Events
    const pastContainer = document.getElementById('pastEventsContainer');
    pastContainer.innerHTML = eventsData.past.map(event => createEventCard(event, 'past')).join('');

    // Add event listeners
    document.querySelectorAll('.event-card').forEach(card => {
        card.addEventListener('click', function() {
            this.querySelector('.event-details').classList.toggle('show');
        });
    });


    // ================================
// CAROUSEL NAVIGATION - PAST EVENTS
// ================================

    function handleCarouselNavigation(btn) {
        const carousel = btn.closest('.event-carousel');
        if (!carousel) return;

        const images = carousel.querySelectorAll('.carousel-image');
        if (images.length === 0) return;

        let currentIdx = 0;
        images.forEach((img, idx) => {
            if (img.classList.contains('active')) {
                currentIdx = idx;
            }
        });

        let nextIdx;
        if (btn.classList.contains('prev')) {
            nextIdx = currentIdx === 0 ? images.length - 1 : currentIdx - 1;
        } else {
            nextIdx = currentIdx === images.length - 1 ? 0 : currentIdx + 1;
        }

        images.forEach(img => img.classList.remove('active'));
        images[nextIdx].classList.add('active');

        const counter = carousel.querySelector('.carousel-counter .current');
        if (counter) {
            counter.textContent = nextIdx + 1;
        }
    }

// Attach click handlers to all carousel buttons
    document.querySelectorAll('.carousel-btn').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.stopPropagation();
            handleCarouselNavigation(this);
        });
    });



    // Carousel controls
    document.querySelectorAll('.carousel-btn').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.stopPropagation();
            handleCarouselNavigation(this);
        });
    });
}

function createEventCard(event, type) {
    const isImagePath = event.poster && (event.poster.includes('/') || event.poster.includes('.'));

    const posterHTML = isImagePath
        ? `<img src="${event.poster}" alt="${event.title}" class="event-poster-img">`
        : `<div class="event-icon">${event.poster || '📅'}</div>`;

    if (type === 'upcoming') {
        return `
            <div class="event-card">
                <div class="event-preview">
                    <div>
                        <div class="event-title">${event.title}</div>
                        <div class="event-date">${event.date}</div>
                    </div>
                    <div>🌐</div>
                </div>
                <div class="event-details">
                    <div class="event-poster-space">
                        <div class="event-visual">${posterHTML}</div>
                    </div>
                    <div class="event-description">${event.description}</div>
                    <div class="event-meta">
                        <div>📅 ${event.date}</div>
                        <div>🕐 ${event.time}</div>
                        <div>📍 ${event.venue}</div>
                    </div>
                    <div class="event-share">
                        <button class="btn-share" onclick="shareEvent('${event.title}')">Share Event »</button>
                    </div>
                </div>
            </div>
        `;
    } else {
        return `
            <div class="event-card">
                <div class="event-preview">
                    <div>
                        <div class="event-title">${event.title}</div>
                        <div class="event-date">${event.date}</div>
                    </div>
                    <div class="event-icon">✨</div>
                </div>
                <div class="event-details">
                
                
<!--            const carouselHTML = \`-->
                <div class="event-carousel">
                    ${event.images.map((img, idx) => `
                        <img src="${img}" alt="Event Photo" class="carousel-image ${idx === 0 ? 'active' : ''}">
                    `).join('')}
                    <div class="carousel-nav">
                        <button class="carousel-btn prev">← Previous</button>
                        <span class="carousel-counter">
                            <span class="current">1</span> / ${event.images.length}
                        </span>
                        <button class="carousel-btn next">Next →</button>
                    </div>
                </div>
<!--            \`;-->
                    <div class="event-description">${event.description}</div>
                    <div class="event-meta">
                        <div>📅 ${event.date}</div>
                        <div>📍 ${event.venue}</div>
                    </div>
                    <div class="social-links">
                        ${event.socialLinks.map(link => `<a href="${link.url}" class="social-link" target="_blank">${link.name}</a>`).join('')}
                    </div>
                </div>
            </div>
        `;
    }
}

function handleCarouselNavigation(btn) {
    const carousel = btn.closest('.event-carousel');
    const images = carousel.querySelectorAll('.carousel-image');
    const currentImg = carousel.querySelector('.carousel-image.active');
    const currentIdx = Array.from(images).indexOf(currentImg);
    let nextIdx;

    if (btn.classList.contains('prev')) {
        nextIdx = currentIdx === 0 ? images.length - 1 : currentIdx - 1;
    } else {
        nextIdx = currentIdx === images.length - 1 ? 0 : currentIdx + 1;
    }

    currentImg.classList.remove('active');
    images[nextIdx].classList.add('active');
    carousel.querySelector('.carousel-counter .current').textContent = nextIdx + 1;
}

/* ================================
   COMMENTS SYSTEM
   ================================ */

function setupCommentForm() {
    const commentForm = document.getElementById('commentForm');
    commentForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = document.getElementById('commentName').value.trim();
        const text = document.getElementById('commentText').value.trim();

        if (name && text) {
            addComment(name, text);
            commentForm.reset();
        } else {
            alert('Please fill in both name and comment fields.');
        }
    });
}

function addComment(name, text) {
    const comments = JSON.parse(localStorage.getItem('sciComments')) || [];
    const newComment = {
        id: Date.now(),
        name: name,
        text: text,
        timestamp: new Date().toISOString()
    };

    comments.unshift(newComment); // Add to beginning for "most recent first"
    localStorage.setItem('sciComments', JSON.stringify(comments));
    loadComments();
}

function loadComments() {
    const comments = JSON.parse(localStorage.getItem('sciComments')) || [];
    const commentsList = document.getElementById('commentsList');

    if (comments.length === 0) {
        commentsList.innerHTML = '<div class="no-comments">No comments yet. Be the first to share your thoughts!</div>';
        return;
    }

    commentsList.innerHTML = comments.map(comment => {
        const date = new Date(comment.timestamp);
        const timeAgo = getTimeAgo(date);
        return `
            <div class="comment-item">
                <div class="comment-name">${escapeHtml(comment.name)}</div>
                <div class="comment-text">${escapeHtml(comment.text)}</div>
                <div class="comment-time">${timeAgo}</div>
            </div>
        `;
    }).join('');
}

function getTimeAgo(date) {
    const seconds = Math.floor((new Date() - date) / 1000);
    const intervals = {
        year: 31536000,
        month: 2592000,
        week: 604800,
        day: 86400,
        hour: 3600,
        minute: 60
    };

    for (const [key, value] of Object.entries(intervals)) {
        const interval = Math.floor(seconds / value);
        if (interval >= 1) {
            return `${interval} ${key}${interval > 1 ? 's' : ''} ago`;
        }
    }
    return 'Just now';
}

function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

/* ================================
   SHARE FUNCTIONALITY
   ================================ */

function shareEvent(eventTitle) {
    const url = window.location.href;
    const text = `Check out the "${eventTitle}" event on the SCI Committee website!`;

    if (navigator.share) {
        navigator.share({
            title: 'SCI Committee Event',
            text: text,
            url: url
        });
    } else {
        // Fallback: Copy to clipboard
        const shareText = `${text} ${url}`;
        navigator.clipboard.writeText(shareText).then(() => {
            alert('Event link copied to clipboard!');
        });
    }
}

/* ================================
   NAVIGATION
   ================================ */

function setupNavigation() {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Highlight active section
    window.addEventListener('scroll', updateActiveNavLink);
}

function updateActiveNavLink() {
    const sections = document.querySelectorAll('section, header');
    const navLinks = document.querySelectorAll('.nav-link');
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 100) {
            current = section.getAttribute('id') || '';
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
}

/* ================================
   EVENT LISTENERS
   ================================ */

function setupEventListeners() {
    // Modal functionality
    const modal = document.getElementById('eventModal');
    const closeBtn = document.querySelector('.close');

    if (closeBtn) {
        closeBtn.addEventListener('click', function() {
            modal.classList.remove('show');
        });
    }

    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.classList.remove('show');
        }
    });

    // Smooth scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

    const navbar = document.querySelector('.navbar');

    // Smooth scroll for nav links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                // Force show navbar for the click interaction
                navbar.classList.remove('navbar--hidden');

                // Lock the auto-hide logic
                isScrollingToSection = true;

                // Scroll to target
                targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });

                // Hide navbar after reaching destination
                setTimeout(() => {
                    isScrollingToSection = false;
                    navbar.classList.add('navbar--hidden');
                    lastScrollTop = window.pageYOffset;
                }, 1000); // 1 second usually covers the smooth scroll duration
            }
        });
    });

    // Close Modals
    if (closeBtn && modal) {
        closeBtn.addEventListener('click', () => modal.classList.remove('show'));
    }
}
