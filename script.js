const projectCards = document.querySelector(".project-cards");
const projects = [
    {   title: "Complete presentation Slides",
        description: `Create slides for upcoming client presentation. Include key points,
        data visuals, and a cohesive design to effectively communicate project updates
        and recommendations.`
    },
    {   title: "Research Market Trends",
        description: `Create slides for upcoming client presentation. Include key points,
        data visuals, and an efficient design to communicate project updates.`
    },
    {   title: "Schedule Team Meeting",
        description: `Coordinate a team meeting to discuss project timelines, address any
        issues, and align on priorities.`
    },
    {   title: "Review Budget Report",
        description: `Review monthly budget report to track expenses, identify areas of
        overspending or savings, and make necessary adjustments to stay within budget
        constraints. Analyze the effectiveness of the recent marketing campaign across
        different channels.`
    },
    {   title: "Conduct Team Training Session",
        description: `Organize and lead a training session for team members to update them
        on new software tools and best practices. Provide hands-on exercises and Q&A sessions
        to ensure understanding and proficiency.`
    },
    {   title: "Follow Up with Client",
        description: `Reach out to the client to gather feedback on recent deliverables
        and discuss next steps.`
    }
];

// create project cards
for (let i = 0; i < 6; i++) {
    const projectCard = document.createElement("div");
    projectCard.classList.add("card");
    
    const title = document.createElement("h4");
    title.classList.add("title");
    title.textContent = projects[i].title;
    
    const description = document.createElement("p");
    description.classList.add("description");
    description.textContent = projects[i].description;
    
    const cardBtns = document.createElement("div");
    cardBtns.classList.add("card-btns");
    
    const iconNames = ["star", "visualize", "share"];
    iconNames.forEach((iconName) => {
        const cardBtn = document.createElement("img");
        cardBtn.classList.add("card-btn");
        cardBtn.setAttribute("src", `resources/icons/${iconName}.svg`);
        cardBtns.appendChild(cardBtn);
    })
    
    projectCard.appendChild(title);
    projectCard.appendChild(description);
    projectCard.appendChild(cardBtns);
    projectCards.appendChild(projectCard);
}


const announcementsCard = document.querySelector(".announcements-section > .card");
const announcements = [
    {   title: "Scheduled maintenance",
        description: `Our website will undergo scheduled maintenance on March 15 from 02:00
        to 04:00 (UTC). During this time, access to certain features may be temporarily
        unavailable. We apologize for any inconvenience and appreciate your patience.`
    },
    {   title: "Updated privacy policy",
        description: `We've updated our Privacy Policy to reflect recent changes in data
        protection regulations. Please review the updated policy to understand how we collect,
        use, and protect your personal information. Your continued use of our services constitutes
        acceptance of these terms.`
    },
    {   title: "Upcoming webinar invitation",
        description: `Join us for an exclusive webinar on UX/UI. Gain insights, strategies,
        and best practices from industry experts. Reserve your spot today to
        secure access to this valuable learning opportunity. Limited seats
        available, so register now!`
    }
];

// create announcements card
for (let i = 0; i < 3; i++) {
    const announcement = document.createElement("div");
    announcement.classList.add("announcement");
    
    const title = document.createElement("p");
    title.classList.add("title");

    const strongTxt = document.createElement("strong");
    strongTxt.textContent = announcements[i].title;
    
    const description = document.createElement("p");
    description.classList.add("description");
    description.textContent = announcements[i].description;
    
    title.appendChild(strongTxt);
    announcement.appendChild(title);
    announcement.appendChild(description);
    announcementsCard.appendChild(announcement);
}