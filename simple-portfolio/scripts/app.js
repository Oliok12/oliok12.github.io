// This file contains the JavaScript code for the portfolio.
// You can add interactive elements, animations, or dynamic content loading here.

document.addEventListener('DOMContentLoaded', () => {
    // Example: Smooth scrolling for anchor links
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            targetElement.scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Example: Dynamic content loading (placeholder)
    const projectsSection = document.getElementById('projects');
    const projects = [
       
    ];

    projects.forEach(project => {
        const projectDiv = document.createElement('div');
        projectDiv.classList.add('project');
        projectDiv.innerHTML = `<h3>${project.title}</h3><p>${project.description}</p>`;
        projectsSection.appendChild(projectDiv);
    });
});