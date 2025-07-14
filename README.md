# Personal Portfolio Website

A modern, responsive portfolio website built with HTML, CSS, and JavaScript. Designed to showcase your learning journey and projects.

## 🚀 Features

- **Responsive Design** - Looks great on all devices
- **Modern UI** - Clean, professional design with smooth animations
- **Easy Updates** - Simple structure for adding new projects
- **Contact Form** - Ready-to-use contact functionality
- **Performance Optimized** - Fast loading and smooth interactions

## 📁 Project Structure

```
portfolio/
├── index.html          # Main HTML file
├── styles.css          # All styling
├── script.js           # JavaScript functionality
├── projects.js         # Project data (easy to update)
└── README.md           # This file
```

## 🛠️ How to Update Projects

### Adding a New Project

1. Open `script.js`
2. Find the `projects` array
3. Add a new project object:

```javascript
{
    id: 6,
    title: "Your New Project",
    description: "Description of your project",
    technologies: ["HTML", "CSS", "JavaScript"],
    image: "project-type",
    liveUrl: "https://your-live-url.com",
    codeUrl: "https://github.com/your-repo",
    week: 6,
    status: "completed"
}
```

### Updating Project Status

Change the `status` field:
- `"planned"` - Project is coming soon
- `"completed"` - Project is finished and live

### Updating Stats

In `index.html`, find the stats section and update the numbers:
```html
<div class="stat">
    <h3>6</h3>  <!-- Update this number -->
    <p>Projects Completed</p>
</div>
```

## 🎯 Customization

### Colors
The main colors are defined in CSS variables at the top of `styles.css`:
- Primary: `#2563eb` (Blue)
- Accent: `#fbbf24` (Yellow)
- Background: `#f8fafc` (Light Gray)

### Personal Information
Update the following in `index.html`:
- Your name (replace "Your Name")
- Your email address
- GitHub and LinkedIn links
- About me section content

## 🚀 Deployment

### GitHub Pages
1. Push your code to GitHub
2. Go to repository Settings
3. Scroll to "Pages" section
4. Select source branch (usually `main`)
5. Your site will be available at `https://username.github.io/repository-name`

### Netlify
1. Drag and drop your project folder to [netlify.com](https://netlify.com)
2. Your site will be deployed instantly
3. You'll get a custom URL

## 📝 Weekly Update Process

1. **Complete your project** for the week
2. **Update the project data** in `script.js`
3. **Deploy the updated portfolio**
4. **Share your progress** on social media

## 🎯 Learning Path Integration

This portfolio is designed to work with your 5-week learning path:
- Week 1: Personal Portfolio Website ✅
- Week 2: To-Do List App
- Week 3: Weather App
- Week 4: Quiz App
- Week 5: Typing Speed Test

## 🔧 Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with Grid and Flexbox
- **JavaScript** - Interactive functionality
- **Font Awesome** - Icons
- **Google Fonts** - Typography

## 📞 Support

If you need help updating or customizing your portfolio, feel free to ask! The code is well-commented and designed to be beginner-friendly.

---

**Happy Coding! 🚀**
```

Finally, let me create a simple project data file for easy updates:

```javascript:projects.js
// This file contains all your project data
// Update this file each week when you complete a new project

const projectData = {
    // Your personal information
    personal: {
        name: "Your Name",
        title: "Aspiring Full-Stack Developer",
        email: "your.email@example.com",
        github: "https://github.com/yourusername",
        linkedin: "https://linkedin.com/in/yourusername",
        description: "I'm passionate about creating beautiful, functional web applications. Currently on a learning journey to master modern web development."
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
        frontend: ["HTML5", "CSS3", "JavaScript", "React", "Responsive Design"],
        backend: ["Node.js", "Express.js", "REST APIs", "MongoDB"],
        tools: ["Git", "GitHub", "VS Code", "Netlify"]
    },
    
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
```

## 🎉 **Your Portfolio is Ready!**

I've created a complete, professional portfolio website for you with:

### ✅ **What's Included**
- **Modern, responsive design** that looks great on all devices
- **Easy project updates** - just edit the JavaScript file each week
- **Contact form** ready to use
- **Smooth animations** and professional styling
- **Mobile-friendly navigation**
- **Project showcase** with status indicators

### 🎯 **Next Steps**

1. **Customize the content**:
   - Replace "Your Name" with your actual name
   - Update email and social media links
   - Customize the about section

2. **Deploy it**:
   - Upload to GitHub Pages or Netlify
   - Get your live URL

3. **Update weekly**:
   - Complete each project
   - Update the project data in `script.js`
   - Deploy the updated portfolio

### 🎯 **Ready to Deploy?**

Your portfolio is ready to go live! Would you like me to help you:
- Customize any content
- Set up deployment
- Add any specific features
- Explain any part of the code

Just let me know what you'd like to do next! 🚀 