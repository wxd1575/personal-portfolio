// Intersection Observer for Scroll Animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    // Render projects
    renderProjects();

    // Intersection Observer for Scroll Animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);
    const animateElements = document.querySelectorAll('.skill-card, .project-card, .highlight-card, .stat');
    animateElements.forEach(el => {
        observer.observe(el);
    });
});

// Robust Loading Screen Removal
function safeRemoveLoadingScreen() {
    const loadingScreen = document.getElementById('loadingScreen');
    if (loadingScreen) {
        loadingScreen.classList.add('fade-out');
        document.body.classList.remove('loading');
        setTimeout(() => {
            if (loadingScreen.parentNode) loadingScreen.remove();
        }, 500);
    }
}

window.addEventListener('load', () => {
    setTimeout(safeRemoveLoadingScreen, 1200);
});

// Defensive DOM element checks
function getById(id) {
    const el = document.getElementById(id);
    if (!el) console.error(`Element with id '${id}' not found.`);
    return el;
}

const themeToggle = getById('themeToggle');
const html = document.documentElement;
const scrollToTopBtn = getById('scrollToTop');
const projectModal = getById('projectModal');
const modalOverlay = getById('modalOverlay');
const modalClose = getById('modalClose');
const modalBody = getById('modalBody');

// Only add event listeners if elements exist
if (themeToggle) {
    // Check for saved theme preference or default to 'dark'
    const currentTheme = localStorage.getItem('theme') || 'dark';
    html.setAttribute('data-theme', currentTheme);
    updateThemeIcon(currentTheme);

    // Theme toggle event listener
    themeToggle.addEventListener('click', () => {
        const currentTheme = html.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        html.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateThemeIcon(newTheme);
    });
}
if (scrollToTopBtn) {
    // Show/hide scroll to top button based on scroll position
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            scrollToTopBtn.classList.add('visible');
        } else {
            scrollToTopBtn.classList.remove('visible');
        }
    });

    // Scroll to top when button is clicked
    scrollToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}
if (modalOverlay && modalClose && projectModal) {
    // Open modal with project details
    document.addEventListener('click', function (e) {
        const card = e.target.closest('.project-card');
        if (card) {
            const idx = Array.from(card.parentNode.children).indexOf(card);
            const projectsArr = (typeof projectData !== 'undefined' && projectData.projects) ? projectData.projects : [];
            showProjectModal(projectsArr[idx]);
        }
    });

    function showProjectModal(project) {
        modalBody.innerHTML = `
            <div class="modal-project-title"><strong>${project.title}</strong></div>
            <div class="modal-project-description">${project.description}</div>
            <div class="modal-project-tech">
                ${project.technologies.map(tech => `<span>${tech}</span>`).join(' ')}
            </div>
            <div class="modal-project-links">
                ${project.status === 'completed' ?
                    `<a href="${project.liveUrl}" class="live" target="_blank">Live Demo</a>
                     <a href="${project.codeUrl}" class="code" target="_blank">View Code</a>` :
                    `<span class="coming-soon">Coming Week ${project.week}</span>`
                }
            </div>
        `;
        projectModal.classList.add('active');
        document.body.style.overflow = 'hidden';
        projectModal.focus();
    }

    // Close modal on overlay or close button click
    modalOverlay.addEventListener('click', closeProjectModal);
    modalClose.addEventListener('click', closeProjectModal);

    function closeProjectModal() {
        projectModal.classList.remove('active');
        document.body.style.overflow = '';
    }

    // Close modal on Escape key
    window.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && projectModal.classList.contains('active')) {
            closeProjectModal();
        }
    });
}

// Function to update theme icon
function updateThemeIcon(theme) {
    const icon = themeToggle.querySelector('i');
    if (theme === 'light') {
        icon.className = 'fas fa-sun';
    } else {
        icon.className = 'fas fa-moon';
    }
}

// Navigation functionality
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Projects data - Easy to update each week!
// Remove the local 'const projects = [...]' array. Use 'projectData.projects' everywhere in the script for rendering and modal logic to ensure the Projects section always displays.
// Use 'projectData.projects' everywhere below

// Update renderProjects to use projectData.projects
function renderProjects() {
    const projectsGrid = document.getElementById('projectsGrid');
    projectsGrid.innerHTML = ""; // Clear previous cards
    const projectsArr = (typeof projectData !== 'undefined' && projectData.projects) ? projectData.projects : [];
    if (!projectsArr.length) {
        projectsGrid.innerHTML = '<div class="project-card" style="text-align:center;">No projects found.</div>';
        return;
    }
    projectsArr.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';
        const statusClass = project.status === 'completed' ? 'completed' : 'planned';
        projectCard.innerHTML = `
            <div class="project-image">
                <i class="fas fa-${getProjectIcon(project.image)}"></i>
            </div>
            <div class="project-content">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem;">
                    <h3 class="project-title">${project.title}</h3>
                    <span class="status-badge ${statusClass}">${project.status}</span>
                </div>
                <p class="project-description">${project.description}</p>
                <div class="project-tech">
                    ${project.technologies.map(tech => `<span>${tech}</span>`).join('')}
                </div>
                <div class="project-links">
                    ${project.status === 'completed' ? 
                        `<a href="${project.liveUrl}" class="live" target="_blank">Live Demo</a>
                         <a href="${project.codeUrl}" class="code" target="_blank">View Code</a>` :
                        `<span class="coming-soon">Coming Week ${project.week}</span>`
                    }
                </div>
            </div>
        `;
        projectsGrid.appendChild(projectCard);
    });
}

// Function to get project icons
function getProjectIcon(imageType) {
    const icons = {
        'portfolio': 'user',
        'todo': 'tasks',
        'weather': 'cloud-sun',
        'quiz': 'question-circle',
        'typing': 'keyboard'
    };
    return icons[imageType] || 'code';
}

// Contact form handling with inline validation and feedback
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        // Clear previous errors
        ["errorName", "errorEmail", "errorSubject", "errorMessage", "formFeedback"].forEach(id => {
            const el = document.getElementById(id);
            if (el) el.textContent = "";
            if (id === "formFeedback") el.classList.remove("error");
        });
        let hasError = false;
        // Validate fields
        const name = contactForm.name.value.trim();
        const email = contactForm.email.value.trim();
        const subject = contactForm.subject.value.trim();
        const message = contactForm.message.value.trim();
        if (!name) {
            document.getElementById("errorName").textContent = "Please enter your name.";
            hasError = true;
        }
        if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
            document.getElementById("errorEmail").textContent = "Please enter a valid email address.";
            hasError = true;
        }
        if (!subject) {
            document.getElementById("errorSubject").textContent = "Please enter a subject.";
            hasError = true;
        }
        if (!message) {
            document.getElementById("errorMessage").textContent = "Please enter your message.";
            hasError = true;
        }
        if (hasError) {
            document.getElementById("formFeedback").textContent = "Please fix the errors above.";
            document.getElementById("formFeedback").classList.add("error");
            return;
        }
        // Show success message
        document.getElementById("formFeedback").textContent = "Thank you for your message! I'll get back to you soon.";
        contactForm.reset();
    });
}

// Add some CSS for status badges
const style = document.createElement('style');
style.textContent = `
    .status-badge {
        padding: 0.25rem 0.75rem;
        border-radius: 12px;
        font-size: 0.8rem;
        font-weight: 500;
    }
    
    .status-badge.completed {
        background: #dcfce7;
        color: #166534;
    }
    
    .status-badge.planned {
        background: #fef3c7;
        color: #92400e;
    }
    
    .coming-soon {
        color: #6b7280;
        font-style: italic;
        font-size: 0.9rem;
    }
`;
document.head.appendChild(style);

// Render Awards Section with scroll-in animation
function renderAwards() {
    const awardsContainer = document.querySelector('.awards-container');
    if (!awardsContainer || !safeProjectData.awards) return;
    awardsContainer.innerHTML = '';
    if (!safeProjectData.awards.length) {
        awardsContainer.innerHTML = '<div class="award-card" style="text-align:center;">No awards found.</div>';
        return;
    }
    safeProjectData.awards.forEach((award, idx) => {
        const card = document.createElement('div');
        card.className = 'award-card';
        card.innerHTML = `<span>🏆</span> <span>${award}</span>`;
        awardsContainer.appendChild(card);
    });
    // Animate award cards on scroll
    const awardCards = awardsContainer.querySelectorAll('.award-card');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    awardCards.forEach(card => observer.observe(card));
}

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    renderProjects();
    renderAwards();
    
    // Add scroll effect to navbar
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        }
    });
}); 