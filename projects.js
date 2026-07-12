const projects = [
  {
    name: "Vinyl App",
    platform: "Flutter · iOS & Android",
    emoji: "🎵",
    description: "E-commerce app for buying and selling physical vinyl records with AI-powered album cover recognition. Supports two distinct user roles — customers and store owners — within a single app. Store owners can manage listings, events, promos, and announcements.",
    tech: ["Flutter", "REST API", "Dio", "Firebase", "Geolocator", "Figma", "GitLab"],
    link: "",
    screenshot: "images/vinyl-app.png"
  },
  {
    name: "Dynamic Maids (Expat Maids)",
    platform: "Flutter · iOS & Android",
    emoji: "🏠",
    description: "Built from scratch for UAE users to process domestic worker Employment Visas entirely through mobile. Features include visa tracking, NOC and letter requests, document downloads, invoice payments, real-time chat, and support tickets.",
    tech: ["Flutter", "Stacked MVVM", "Dio", "Socket.IO", "Firebase Remote Config", "MongoDB", "REST API"],
    link: "https://play.google.com/store/apps/details?id=com.nathanhr.expatemployee&hl=en",
    screenshot: "images/expat-maids.png"
  },
  {
    name: "Freelancer Central",
    platform: "Flutter · iOS & Android",
    emoji: "💼",
    description: "Built for Dubai freelancers to process Freelancing Visas entirely on mobile. Features visa application tracking, invoice management, payment monitoring, NOC requests, real-time chat, and support tickets.",
    tech: ["Flutter", "Stacked MVVM", "Socket.IO", "Syncfusion", "Firebase", "MongoDB", "REST API"],
    link: "https://play.google.com/store/apps/details?id=com.nathanhr.freelancercentral&hl=en",
    screenshot: "images/freelancer-central.png"
  },
  {
    name: "HR Direct",
    platform: "Flutter · iOS & Android",
    emoji: "🏢",
    description: "Enterprise HR application supporting attendance tracking, leave management, expense claims, letters, and other employee self-service workflows integrated with RESTful APIs and real-time features.",
    tech: ["Flutter", "Stacked MVVM", "Dio", "Socket.IO", "REST API", "Firebase"],
    link: "https://play.google.com/store/apps/details?id=com.nathandigital.hrdirect&pcampaignid=web_share",
    screenshot: "images/hr-direct.png"
  },
  {
    name: "mWell PH",
    platform: "Android · Kotlin",
    emoji: "🏥",
    description: "Contributed to the Philippines' first fully integrated digital health and wellness app by Metro Pacific Investments Corporation. Integrated GetStream SDK to enable real-time messaging and video consultations between doctors and patients.",
    tech: ["Kotlin", "Jetpack Compose", "GetStream SDK", "Hilt", "Room", "Retrofit", "MVVM"],
    link: "https://play.google.com/store/search?q=mwell+ph+app&c=apps&hl=en",
    screenshot: "images/mwell.png"
  },
  {
    name: "DSWD Emergency Response",
    platform: "React Native · iOS & Android",
    emoji: "🚨",
    description: "Contributed to a government client project implementing dynamic form rendering driven by Frappe backend configurations, allowing flexible UI updates without requiring app redeployment.",
    tech: ["React Native", "TypeScript", "Expo", "Node.js", "Firebase", "Frappe"],
    link: "",
    screenshot: "images/emergency-app.png"
  },
  {
    name: "Attendance In & Out",
    platform: "Flutter · iOS & Android",
    emoji: "🕐",
    description: "Freelance project — a Flutter-based workforce management app with selfie verification, GPS-based attendance, offline sync via SQLite and Firebase, and automated Excel payroll report generation emailed to the accounting team.",
    tech: ["Flutter", "Firebase Auth", "Firestore", "SQLite", "Syncfusion XlsIO", "Camera", "Mailer", "GitHub Actions"],
    link: "https://play.google.com/store/apps/details?id=com.myworker.attendeance",
    screenshot: "images/attendance-app.png"
  },
  {
    name: "Grocery Calculator",
    platform: "Flutter · Android",
    emoji: "🛒",
    description: "Freelance project — a smart grocery companion that lets users add items using voice input and tracks spending in real time. No more mental math or overspending at the grocery store.",
    tech: ["Flutter", "Voice Input", "SQLite", "Firebase", "GitHub Actions"],
    link: "https://play.google.com/store/apps/details?id=com.grocery.calc_app",
    screenshot: "images/grocery-app.png"
  },
  {
    name: "FILBYTE Timekeeper",
    platform: "Android · Java",
    emoji: "⏱️",
    description: "Attendance and workforce management app with RFID card verification, selfie check-in, geolocation tracking, and offline-first SQLite storage. Includes employee self-service features like leave filing, overtime requests, and payslip viewing.",
    tech: ["Android Java", "SQLite", "Realm DB", "RFID", "Camera", "REST API", "Geolocation"],
    link: "https://play.google.com/store/apps/details?id=com.myclient.dailytimerecords",
    screenshot: "images/filbyte-app.png"
  }
];

function createProjectCard(project) {
  const techPills = project.tech
    .map(t => `<span class="tech-pill">${t}</span>`)
    .join('');

  const thumbnail = project.screenshot
    ? `<img src="${project.screenshot}" alt="${project.name} screenshot" class="project-thumb" loading="lazy" />`
    : `<div class="project-thumb-placeholder">${project.emoji}</div>`;

  const linkEl = project.link
    ? `<a href="${project.link}" target="_blank" rel="noopener noreferrer" class="project-link">
        View on Store
        <svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
          <polyline points="15 3 21 3 21 9"/>
          <line x1="10" y1="14" x2="21" y2="3"/>
        </svg>
      </a>`
    : `<span class="no-link">Private / Internal project</span>`;

  return `
    <div class="project-card">
      ${thumbnail}
      <div class="project-body">
        <p class="project-platform">${project.platform}</p>
        <h3>${project.name}</h3>
        <p class="project-desc">${project.description}</p>
        <div class="project-tech">${techPills}</div>
        ${linkEl}
      </div>
    </div>
  `;
}

document.addEventListener('DOMContentLoaded', function () {
  const grid = document.getElementById('projectsGrid');
  if (grid) {
    grid.innerHTML = projects.map(createProjectCard).join('');
  }
});