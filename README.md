# User Feedback System

## Overview
This is a full-stack User Feedback System developed using Node.js, Express, React, and MongoDB/PostgreSQL. The application allows users to submit feedback, and it displays collected feedback in a dashboard with filtering and sorting options.

## Features
- Submit user feedback.
- View feedback in a dashboard.
- Filter and sort feedback.
- Categorize feedback (Optional).

## Prerequisites
- Node.js
- MongoDB or PostgreSQL (depending on what you used)

## Installation

### Backend Setup:
1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/feedback-system.git
    cd feedback-system
    ```

2. Install backend dependencies:
    ```bash
    cd backend
    npm install
    ```

3. Set up your environment variables (create a `.env` file in the backend folder):
    ```
    DB_URI=mongodb://localhost:27017/feedback_db  # MongoDB or PostgreSQL URI
    PORT=5000  # Port for the backend server
    ```

4. Start the backend server:
    ```bash
    npm start
    ```

### Frontend Setup:
1. Navigate to the frontend folder:
    ```bash
    cd frontend
    ```

2. Install frontend dependencies:
    ```bash
    npm install
    ```

3. Start the frontend server:
    ```bash
    npm start
    ```

## Usage
- Open the frontend application in a web browser at `http://localhost:3000`.
- Submit feedback through the form.
- View and filter feedback on the dashboard.

## API Endpoints
- **POST /feedback**: Submit feedback.
- **GET /feedback**: Get all feedback.

## Optional: Additional Features
- Categorization of feedback (e.g., suggestion, bug report, feature request).

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
