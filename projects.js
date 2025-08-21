const projects = [
  {
    name: "Expat Maids",
    details: [
      { label: "Platform", value: "Flutter (iOS & Android)" },
      { label: "Architecture", value: "Stacked with MVVM" },
      { label: "Tech Used", value: "Flutter, SQLite, REST API, Firebase(Notification)" },
      { label: "Description", value: "A comprehensive HR app that helps Dubai expats manage domestic helper employment processes with offline and online capabilities." }
    ],
    link: "https://play.google.com/store/apps/details?id=com.nathanhr.expatemployee&hl=en"
  },
  {
    name: "Freelancer Central",
    details: [
      { label: "Platform", value: "Flutter (iOS & Android)" },
      { label: "Architecture", value: "Stacked with MVVM" },
      { label: "Tech Used", value: "Flutter, SQLite, REST API, Firebase(Push Notification)" },
      { label: "Description", value: "A platform for freelancers to track work, submit timesheets, and communicate with employers—all from a single mobile app." }
    ],
    link: "https://play.google.com/store/apps/details?id=com.nathanhr.freelancercentral&hl=en"
  },
  {
    name: "Attendance In and Out",
    details: [
      { label: "Platform", value: "Flutter (iOS & Android)" },
      { label: "Architecture", value: "Stacked with MVVM" },
      { label: "Tech Used", value: "Flutter, SQLite, Firebase (Auth & Firestore)" },
      { label: "Description", value: "A secure attendance tracker for shift-based workers with Firebase Auth and offline capability via SQLite." }
    ],
    link: "https://play.google.com/store/apps/details?id=com.myworker.attendeance"
  },
  {
    name: "mWell PH: 24/7 Doctor Consult",
    details: [
      { label: "Platform", value: "Android - Kotlin" },
      { label: "Architecture", value: "OOP" },
      { label: "Tech Used", value: "Kotlin, Getstream SDK(chat & video), REST API" },
      { label: "Description", value: "mWell, the digital healthcare arm of Metro Pacific Investments Corporation, is the Philippines' first fully integrated, fully digital health and wellness app." }
    ],
    link: "https://play.google.com/store/search?q=mwell+ph+app&c=apps&hl=en"
  },
  {
    name: "FILBYTE Timekeeper",
    details: [
      { label: "Platform", value: "Android (Java)" },
      { label: "Architecture", value: "OOP" },
      { label: "Tech Used", value: "Android Java SDK, Firebase (Auth, Firestore)" },
      {
        label: "Description",
        value: "A workforce management app designed for small to large businesses to track employee Daily Time Records (DTR). Features include secure user authentication, real-time attendance logging, and cloud-based storage powered by Firebase for reliable and scalable data management."
      }
    ],
    link: "https://play.google.com/store/apps/details?id=com.myclient.dailytimerecords"
  },
  {
    name: "Emergency Response App (MDRMMO)",
    details: [
      { label: "Platform", value: "React Native (iOS & Android)" },
      { label: "Architecture", value: "OOP" },
      { label: "Tech Used", value: "Expo Go, TypeScript, Node.js, Firebase (Auth, Firestore, Notifications)" },
      {
        label: "Description",
        value: "A mobile emergency alert system that enables households to send real-time distress signals directly to the MDRMMO office. The app leverages Firebase for secure authentication, cloud-based data management, and instant push notifications, ensuring rapid communication and timely disaster response."
      }
    ],
    link: ""

  }
  // Add more projects as needed
];

function createProjectCard(project) {
  const ul = project.details.map(
    d => `<li><strong>${d.label}:</strong> ${d.value}</li>`
  ).join('');
  return `
    <div class="project-card">
      <h3>${project.name}</h3>
      <ul class="bullets-space">${ul}</ul>
      <a href="${project.link}" target="_blank">Project link</a>
    </div>
  `;
}

document.getElementById('projectsGrid').innerHTML = projects.map(createProjectCard).join('');