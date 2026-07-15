# 💈 JoshRCutz — Barber Booking Application

JoshRCutz is a lightweight, cross-platform desktop application designed for barbers to seamlessly manage their schedules and accept client bookings. Built on top of **Electron** using modern vanilla web technologies, it features an elegant high-end dark mode interface accented with luxury gold tones.

The application contains an administrative dashboard for the barber to track, create, and cancel appointment slots, paired with an integrated mobile-responsive view for clients to book themselves.

---

## ✨ Features

- **Barber Dashboard (`index.html`)**:
  - **Overview Insights**: At-a-glance analytics showing available, booked, and cancelled slots.
  - **Dynamic Slot Builder**: Create customized booking slots grouped by date and multiple specific time configurations.
  - **Slot Management**: Instantly confirm manual walk-ins or trigger client cancellations.
  - **Centralized Settings**: Securely set and manage your email dispatch pipeline in-app.
- **Client Booking View (`client.html`)**:
  - A clean, compact, and responsive view modeled after premium scheduling interfaces.
  - Interactive selection between core services: **Taper ($30)** and **Fade ($35)**.
  - Smooth bottom-drawer modal confirmation window.
- **Automated Email Pipeline**: Fully integrated client notification architecture via EmailJS. Clients receive automatic confirmation receipts when booked and alerts if an appointment is cancelled.

---

## 🛠️ Tech Stack

- **Shell Framework**: [Electron](https://www.electronjs.org/) (Desktop environment wrapper)
- **Frontend**: Vanilla HTML5, CSS3 Variables (Custom theme), and JavaScript ES6+
- **Integrations**: [EmailJS Browser SDK v4](https://www.emailjs.com/) (Serverless email automation)

---

## 📂 Project Structure

```text
├── main.js         # Electron main process (Windows management & IPC communications)
├── preload.js      # Context isolation script bridge for secure IPC execution
├── index.html      # Administrative scheduling and statistics dashboard
├── client.html     # Client-facing scheduling menu interface
└── package.json    # Application metadata, scripts, and package dependencies