# homeQuest.com

homeQuest.com is a full-stack web application designed to help users explore, evaluate, and book houses and properties for rent or purchase. The platform provides detailed information about each property, allows users to book visits, and integrates powerful tools for data visualization and area assessment.

## Features

### 1. Property Listings
- Browse houses and properties available for rent or purchase.
- Detailed property information including price, size, location, and more.

### 2. Book a Visit
- Schedule a visit to view any listed property directly through the website.

### 3. Google Maps Integration
- Integrated Google Maps API to provide users with a clear view of the property's surrounding area.
- Explore nearby amenities, public transport, schools, and more to help make an informed decision.

### 4. Price Tracking with Chart.js
- Track the price trends of houses and properties using interactive charts powered by **Chart.js**.
- View historical price data to understand market movements and make better investment decisions.

### 5. Secure Authentication
- Google Login for easy and secure authentication.
- Ensures privacy and data safety by managing sessions and cookies effectively.

### 6. Responsive Design
- Mobile-first design to ensure a seamless experience across all devices.

## Tech Stack

### Frontend
- **React.js**: For building dynamic and interactive user interfaces.
- **Chart.js**: For interactive charting and data visualization.
- **Google Maps API**: To provide detailed geographical data and area mapping.

### Backend
- **Node.js** with **Express.js**: For building the server-side and handling API requests.
- **PostgreSQL**: As the relational database to store user data, property listings, and visit schedules.
- **Google OAuth**: For secure user authentication.
  
### Additional Tools
- **Cookie and Session Management**: For secure user session handling and persistent login.

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/homeQuest.com.git
    cd homeQuest.com
    ```

2. Install the dependencies:
    ```bash
    npm install
    ```

3. Set up environment variables:
    - Create a `.env` file in the root of the project and add your configurations:
      ```
      DATABASE_URL=<your_postgres_db_url>
      GOOGLE_CLIENT_ID=<your_google_client_id>
      GOOGLE_CLIENT_SECRET=<your_google_client_secret>
      SESSION_SECRET=<your_session_secret>
      ```

4. Start the development server:
    ```bash
    npm run dev
    ```

5. Access the website on `http://localhost:3000`.

## Usage

- Users can view property listings, book visits, and track prices.
- Use Google login for secure authentication and personalized features.
- Navigate properties with the help of Google Maps for detailed area insights.

## Future Enhancements

- Add user reviews and ratings for properties.
- Implement advanced search filters (e.g., price range, property type, location).
- Enhance the booking process with real-time notifications.

## Contributing

Feel free to fork the repository, make updates, and submit pull requests. Any contributions that improve the functionality, security, or user experience of **homeQuest.com** are welcome.

## License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.

