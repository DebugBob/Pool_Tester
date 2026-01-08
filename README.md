# Test Tracker 🧪

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)

A web application for pool service technicians to log and track water quality test results.

## 📖 About The Project

Test Tracker is a front-end application built with React and TypeScript that provides a clean and efficient interface for managing pool maintenance records. It allows technicians to enter test results for various customers, view a history of tests, and see their appointments on a calendar.

The project is currently a prototype and uses a static JSON file (`dummy.json`) for data. Form submissions are logged to the console to simulate data persistence without a backend.

## ✨ Features

*   **Test Logging Form:** Enter customer details, technician info, and key water quality metrics (Chlorine, pH, Alkalinity, Hardness).
*   **Customer Sidebar:** View a list of all customer tests and create new ones.
*   **Search Functionality:** Quickly filter and find specific customer tests.
*   **Interactive Schedule:** A full-page calendar view powered by `@ilamy/calendar` to visualize scheduled jobs.
*   **Modern UI:** A responsive and clean user interface built with Tailwind CSS.
*   **Routing:** Seamless navigation between the main test page and the schedule page using React Router.

## 🛠️ Built With

This project is built with a modern front-end stack:

*   React
*   TypeScript
*   Vite
*   Tailwind CSS
*   React Router
*   @ilamy/calendar

## 🚀 Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

You need to have Node.js and npm (or yarn) installed on your machine.

*   npm
    ```sh
    npm install npm@latest -g
    ```

### Installation

1.  Clone the repo
    ```sh
    git clone https://github.com/your_username/Test_Tracker.git
    ```
2.  Navigate to the project directory
    ```sh
    cd Test_Tracker
    ```
3.  Install NPM packages
    ```sh
    npm install
    ```
4.  Start the development server
    ```sh
    npm run dev
    ```

The application will be available at `http://localhost:5173` (or another port if 5173 is in use).

## 🤝 Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1.  Fork the Project
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the Branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request

## 📄 License

Distributed under the MIT License. See `LICENSE.txt` for more information.

## 📞 Contact

Your Name - @your_twitter - email@example.com

Project Link: https://github.com/your_username/Test_Tracker

