# Intern Management Portal (InternPulse)
Welcome to the Intern Management Portal (InternPulse)!
This project helps organizations efficiently manage their interns by providing tools to track progress, manage profiles, and foster healthy competition through leaderboards.






🚀 Project Overview
InternPulse is a web-based portal that enables interns and administrators to:
Register and log in interns
Access personalized dashboards showing key statistics like referral codes and donations raised
Track rewards and milestones based on performance
View and compete on a leaderboard ranking all interns
Navigate easily through a clean and responsive interface
Built with Node.js and Express.js on the backend, EJS for dynamic frontend rendering, and MongoDB for data persistence.

📋 Features
🔐 Login Existing Intern
Select intern name from a dropdown and securely log in to view their dashboard.
➕ Add New Intern
Quickly add new interns by entering their name, with automatic referral code generation and initialized stats.
📊 Intern Dashboard
Personalized dashboard displaying intern name, referral code, donations raised, and rewards unlocked.
🏆 Leaderboard
Competitive leaderboard ranking interns by donations to encourage engagement.
🏠 Home Page
Welcoming interface with a sidebar listing all interns, quick dashboard access, and introductory info.
🖥️ Responsive UI
Modern, mobile-friendly design for seamless experience across devices.

📂 Project Structure
bash
Copy code
/internpulse
├── /controllers
│   └── internController.js      # Business logic for intern operations
├── /models
│   └── intern.js                # Mongoose schema for Intern model
├── /routes
│   └── internRoutes.js          # Express routes for intern endpoints
├── /views
│   ├── home.ejs                 # Homepage with sidebar
│   ├── login.ejs                # Login and add intern form
│   ├── dashboard.ejs            # Intern dashboard
│   └── leaderboard.ejs          # Leaderboard display
├── /public
│   ├── styles.css               # Shared CSS styles
│   └── /images                  # Images (hero illustration, icons)
├── db.js                       # Database connection setup
├── server.js                   # Main Express server configuration
├── package.json                # Node dependencies and scripts
└── README.md                   # Project documentation

⚙️ Installation & Setup
Clone the repository

bash
Copy code
git clone https://github.com/Vaishnavimirge/InternPulse-/tree/main
cd internpulse
Install dependencies

bash
Copy code
npm install
Set up MongoDB
Ensure MongoDB is installed and running locally, or update the connection URI in db.js with your MongoDB Atlas URI.

Start the server
bash
Copy code
npm start
Access the portal

Open your browser and visit:
http://localhost:3000

🧑‍💻 Usage
Homepage: View all interns in the sidebar, click on any intern’s name to access their dashboard.
Login Page: Log in as an existing intern or add a new intern.
Dashboard: Check your referral code, donations raised, and rewards.
Leaderboard: See top-performing interns ranked by donations.

🛠️ Technologies Used
Node.js & Express.js — Backend server and routing
MongoDB & Mongoose — Data storage and schema modeling
EJS — Templating engine for dynamic HTML
HTML5 / CSS3 — Markup and styling
JavaScript — Client-side scripting
Responsive Design — For desktop and mobile compatibility

📷 Image Assets
Images used in this project are stored in /public/images/ including:
Hero illustration for the homepage
Icons for dashboards and features
Background and UI decorations
