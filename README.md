# Intern Management Portal (InternPulse)

Welcome to the **Intern Management Portal (InternPulse)**! This project is designed to help organizations efficiently manage their interns. It provides tools to **track progress, manage profiles, and foster healthy competition through leaderboards**.


## 🚀 Project Overview

InternPulse is a **web-based portal** that empowers both interns and administrators to:
*   **Register and log in interns**.
*   Access **personalized dashboards** displaying key statistics such as referral codes and donations raised.
*   **Track rewards and milestones** based on performance.
*   **View and compete on a leaderboard** that ranks all interns.
*   Navigate easily through a **clean and responsive interface**.

The portal is built with **Node.js and Express.js for the backend**, uses **EJS for dynamic frontend rendering**, and relies on **MongoDB for data persistence**.



## 📋 Features

The Intern Management Portal offers the following key features:

*   **🔐 Login Existing Intern**: Allows users to select an intern name from a dropdown and securely log in to view their dashboard.
*   **➕ Add New Intern**: Provides a quick way to add new interns by entering their name, with automatic referral code generation and initialized statistics.
*   **📊 Intern Dashboard**: A personalized dashboard that displays the intern's name, referral code, donations raised, and unlocked rewards.
*   **🏆 Leaderboard**: A competitive leaderboard that ranks interns by donations, designed to encourage engagement.
*   **🏠 Home Page**: A welcoming interface featuring a sidebar listing all interns, quick access to dashboards, and introductory information.
*   **🖥️ Responsive UI**: A modern, mobile-friendly design ensuring a seamless experience across various devices.


## 📂 Project Structure

The project follows a well-organized directory structure:

bash
/internpulse
├── /controllers
│   └── internController.js # Business logic for intern operations
├── /models
│   └── intern.js # Mongoose schema for Intern model
├── /routes
│   └── internRoutes.js # Express routes for intern endpoints
├── /views
│   ├── home.ejs # Homepage with sidebar
│   ├── login.ejs # Login and add intern form
│   ├── dashboard.ejs # Intern dashboard
│   └── leaderboard.ejs # Leaderboard display
├── /public
│   ├── styles.css # Shared CSS styles
│   └── /images # Images (hero illustration, icons)
├── db.js # Database connection setup
├── server.js # Main Express server configuration
├── package.json # Node dependencies and scripts
└── README.md # Project documentation
```






## ⚙️ Installation & Setup

To get the InternPulse project up and running locally, follow these steps:

1.  **Clone the repository**:
    bash
    git clone https://github.com/Vaishnavimirge/InternPulse-/tree/main
    cd internpulse

   

2.  **Install dependencies**:
    bash
    npm install

   

3.  **Set up MongoDB**: Ensure MongoDB is installed and running locally. Alternatively, you can update the connection URI in `db.js` with your MongoDB Atlas URI.

4.  **Start the server**:
   bash
    npm start



## 🧑‍💻 Usage

Once the server is running, you can access the portal and utilize its features:

*   **Access the portal**: Open your browser and visit: `http://localhost:3000`.
*   **Homepage**: View all interns listed in the sidebar. Click on an intern’s name to access their dashboard.
*   **Login Page**: Log in as an existing intern or add a new intern.
*   **Dashboard**: Check your referral code, donations raised, and any rewards you've earned.
*   **Leaderboard**: See top-performing interns ranked by donations.


## 🛠️ Technologies Used

The project leverages a modern web development stack:

*   **Node.js & Express.js**: Used for the backend server and routing.
*   **MongoDB & Mongoose**: Utilized for data storage and schema modeling.
*   **EJS**: Serves as the templating engine for dynamic HTML rendering.
*   **HTML5 / CSS3**: Provides the markup and styling for the application.
*   **JavaScript**: Used for client-side scripting.
*   **Responsive Design**: Ensures compatibility and optimal experience across both desktop and mobile devices.


## 📷 Image Assets

Images used within this project are stored in the `/public/images/` directory. These include:

*   **Hero illustration** for the homepage.
*   **Icons** for dashboards and various features.
*   **Background and UI decorations**.

