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

- **Test Logging Form:** Enter customer details, technician info, and key water quality metrics (Chlorine, pH, Alkalinity, Hardness).
- **Customer Sidebar:** View a list of all customer tests and create new ones.
- **Search Functionality:** Quickly filter and find specific customer tests.
- **Interactive Schedule:** A full-page calendar view powered by `@ilamy/calendar` to visualize scheduled jobs.
- **Modern UI:** A responsive and clean user interface built with Tailwind CSS.
- **Routing:** Seamless navigation between the main test page and the schedule page using React Router.

## 🛠️ Built With

This project is built with a modern front-end stack:

- React
- TypeScript
- Vite
- Tailwind CSS
- React Router
- @ilamy/calendar
