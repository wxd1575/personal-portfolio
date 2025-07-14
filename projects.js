// This file contains all your project data
// Update this file each week when you complete a new project

const projectData = {
    // Your personal information
    personal: {
        name: "Xolani Sedibe",
        title: "Digital Transformation Specialist & eLearning Developer",
        email: "info@xolanisedibe.com",
        phone: ["065 614 1270", "069 489 2768"],
        linkedin: "https://www.linkedin.com/in/xolani-wiseman-sedibe-390a8b19/",
        description: "Results-driven digital transformation specialist and eLearning developer with over a decade of experience in digital skills training, programme development, and strategic advisory. Recognised for leading high-impact digital projects, including transforming Digify Pro from an in-person boot camp to an online, self-guided programme now serving over 300 students per cohort across Africa. Holds a BCom in Information Management and multiple certifications in digital skills, analytics, and leadership. Currently pursuing certifications in SQL, Power BI, and Generative AI."
    },
    
    // Your projects - update this each week!
    projects: [
        {
            id: 1,
            title: "Personal Portfolio Website",
            description: "A responsive portfolio website built with HTML, CSS, and JavaScript. Features modern design, smooth animations, and easy project updates.",
            technologies: ["HTML", "CSS", "JavaScript"],
            image: "portfolio",
            liveUrl: "https://your-portfolio.netlify.app",
            codeUrl: "https://github.com/yourusername/portfolio",
            week: 1,
            status: "completed",
            completedDate: "2024-01-15"
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
    ],
    
    // Your skills - update as you learn new technologies
    skills: {
        elearning: ["Instructional Design", "WhatsApp Chatbot Development", "Curriculum Design", "LMS Administration", "Training Needs Analysis"],
        data: ["Information Management", "Data Analysis", "Google Looker Studio", "Google Analytics", "Power BI (in progress)", "SQL (in progress)", "Analytics for Learning Program (LinkedIn Learning)", "Digital Innovation Lab for Skills Development (ITC-ILO, 2023)", "Digital Skills Development for Youth NEET (ITC-ILO, 2023)", "No-code Automation", "AI Agent Development (beginner)", "ChatGPT Prompting"],
        media: ["Graphic Design", "Photography", "Videography", "Podcasting", "Copywriting"],
        business: ["Business Development", "Sales & New Business", "Collaboration", "Leadership", "Public Speaking", "Training & Facilitation", "Communication", "Adaptability"],
    },
    
    // Your awards/certifications
    awards: [
        "New Gen Awards 2021 - Most Innovative App - Silver",
        "The Loeries 2021 - Mobile Media - Finalist",
        "MMA Smarties 2022 - Social Messaging / Chat Apps / Text Messaging - Gold",
        "MMA Smarties 2022 - Business Transformation - Leader",
        "The Bookmarks 2022 - Innovation (Silver), Public Service & NPO Platforms (Silver)",
        "The Loeries 2022 - Mobile Media - Bronze",
        "The Loeries 2022 - Use of Technology - Finalist",
        "New Gen Awards - Best Use of Technical Innovation - Finalist"
    ],
    
    // Your stats - update these numbers
    stats: {
        projectsCompleted: 1,
        weeksOfLearning: 1,
        dedication: "100%"
    }
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = projectData;
} 