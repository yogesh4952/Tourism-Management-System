# YATRA - Revolutionizing Tourism & Hospitality

## Overview

YATRA is a web application designed to transform the tourism and hospitality industry by connecting travelers with authentic experiences and empowering local businesses. Our platform offers:

- **Destination-Based Discovery:** Explore destinations and discover unique places.
- **Verified Local Guides:** Connect with trustworthy and knowledgeable guides.
- **Integrated Hotel Management:** Hotels can list, manage, and attract direct bookings.
- **Fraud Prevention:** Ensuring safe and reliable interactions.
- **User-Generated Content:** Share experiences and insights through our blog section.

## Key Features

- **Destination Explorer:** Discover destinations based on location and interests.
- **Verified Guide Network:** Browse and connect with verified local guides, ensuring trustworthy experiences.
- **Hotel Management System:** List hotels with location-based listings and seamless booking.
- **Blog Section:** Share travel experiences, tips, and recommendations.
- **User Authentication:** Secure user accounts with login and registration.

## Tech Stack

- **Frontend:** [React, JavaScript, Tailwind CSS, DaisyUI]
- **Backend:** [Node.js, Express.js]
- **Database:** [MongoDB]
- **Authentication:** [JWT]
- **Other Libraries:** [Axios, React Router]

## Setup Instructions

1.  **Clone the repository:**

    ```
    git clone [repository URL]
    cd [your-app-name]
    ```

2.  **Install dependencies (Frontend):**

    ```
    cd client  # Or your frontend directory
    npm install
    ```

3.  **Install dependencies (Backend):**

    ```
    cd server  # Or your backend directory
    npm install
    ```

4.  **Configure environment variables:**

    - Create a `.env` file in your backend directory.
    - Add the following variables:

      ```
      PORT=5000
      MONGODB_URI=[Your MongoDB Connection String]
      JWT_SECRET=[Your JWT Secret Key]
      ```

5.  **Run the application (Development):**

    - Start the frontend development server:

      ```
      cd client
      npm start
      ```

    - Start the backend server:

      ```
      cd server
      npm start
      ```

6.  **Access the application:**

    - Open your browser and navigate to `http://localhost:5000` (or the port specified for your frontend).

## API Endpoints

- `POST /api/users/register`: Register a new user.
- `POST /api/users/login`: Authenticate and log in an existing user.
- `GET /api/destinations`: Retrieve a list of destinations.
- `GET /api/guides`: Retrieve a list of verified local guides.
- `POST /api/hotels`: List a new hotel (requires authentication).
- `GET /api/hotels`: Retrieve a list of hotels.
- `GET /api/hotels/:location`: Retrieve hotels by location.
- `GET /api/blogs`: Retrieve a list of blog posts.
- `POST /api/blogs`: Create a new blog post (requires authentication).

## Contributing

We welcome contributions to YATRA! To contribute:

1.  Fork the repository.
2.  Create a new branch for your feature or bug fix.
3.  Make your changes and commit them with descriptive messages.
4.  Push your changes to your forked repository.
5.  Submit a pull request to the main repository.

## License

[Your App Name] is licensed under the [MIT License](LICENSE).

## Contact

Yogesh Shah Thakuri - yogeshshah2063@gmail.com
