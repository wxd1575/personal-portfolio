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
const projects = [
    {
        id: 1,
        title: "Personal Portfolio Website",
        description: "A responsive portfolio website built with HTML, CSS, and JavaScript. Features modern design, smooth animations, and easy project updates.",
        technologies: ["HTML", "CSS", "JavaScript"],
        image: "portfolio",
        liveUrl: "#",
        codeUrl: "#",
        week: 1,
        status: "completed"
    },
    {
        id: 2,
        title: "To-Do List App",
        description: "A functional to-do list application with add, delete, and mark-as-complete features. Uses local storage for data persistence.",
        technologies: ["HTML", "CSS", "JavaScript", "Local Storage"],
        image: "todo",
        liveUrl: "#",
        codeUrl: "#",
        week: 2,
        status: "planned"
    },
    {
        id: 3,
        title: "Weather App",
        description: "A weather application that fetches real-time weather data from APIs. Features search functionality and 5-day forecast.",
        technologies: ["HTML", "CSS", "JavaScript", "API Integration"],
        image: "weather",
        liveUrl: "#",
        codeUrl: "#",
        week: 3,
        status: "planned"
    },
    {
        id: 4,
        title: "Quiz App",
        description: "An interactive quiz application with multiple choice questions, timer, and scoring system.",
        technologies: ["HTML", "CSS", "JavaScript", "Local Storage"],
        image: "quiz",
        liveUrl: "#",
        codeUrl: "#",
        week: 4,
        status: "planned"
    },
    {
        id: 5,
        title: "Typing Speed Test",
        description: "A typing speed test application that measures WPM and accuracy with real-time feedback.",
        technologies: ["HTML", "CSS", "JavaScript"],
        image: "typing",
        liveUrl: "#",
        codeUrl: "#",
        week: 5,
        status: "planned"
    }
];

// Function to render projects
function renderProjects() {
    const projectsGrid = document.getElementById('projectsGrid');
    
    projects.forEach(project => {
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

// Contact form handling
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(this);
    const name = formData.get('name');
    const email = formData.get('email');
    const subject = formData.get('subject');
    const message = formData.get('message');
    
    // Simple validation
    if (!name || !email || !subject || !message) {
        alert('Please fill in all fields');
        return;
    }
    
    // For now, just show a success message
    // In a real application, you'd send this to a server
    alert('Thank you for your message! I\'ll get back to you soon.');
    this.reset();
});

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

// Render Awards Section
function renderAwards() {
    const awardsContainer = document.querySelector('.awards-container');
    if (!awardsContainer || !projectData.awards) return;
    awardsContainer.innerHTML = '';
    projectData.awards.forEach((award, idx) => {
        const card = document.createElement('div');
        card.className = 'award-card';
        card.innerHTML = `<span style="font-size:1.5em;margin-right:0.5em;vertical-align:middle;">🏆</span> <span>${award}</span>`;
        awardsContainer.appendChild(card);
    });
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