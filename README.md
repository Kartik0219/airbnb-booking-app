📅 Airbnb Booking Management Web Application
A web application built with Node.js, Express, MongoDB, HTML/CSS, and JavaScript to manage Airbnb bookings. It provides full CRUD operations (Create, Read, Update, and Delete) to allow users to add, edit, delete, and view bookings.



Features:
1. Create new bookings through a user-friendly form.
2. View all bookings displayed in a responsive table.
3. Edit existing bookings and update details.
4. Delete bookings from the database.
5. Uses MongoDB Atlas for cloud-based database storage.
6. Built with Bootstrap and custom CSS for modern and responsive design.



Technologies Used:
1. Backend: Node.js, Express.js
2. Database: MongoDB Atlas
3. Frontend: HTML, CSS (Bootstrap), JavaScript
4. Tools: Nodemon (for live-reloading), Mongoose (for MongoDB ORM)




Setup Instructions:
1. Clone the repository:
git clone <your-repo-url>
cd airbnb-booking-app'


2. Install dependencies:
npm install


3. Set up MongoDB Atlas:
a. Create a free MongoDB Atlas account at MongoDB Atlas.
b. Create a new cluster and database named airbnb-bookings.
c. Whitelist your IP address in Atlas.
d. Replace the connection string in server.js with your MongoDB Atlas URI:
const dbURI = 'mongodb+srv://<username>:<password>@<your-cluster-url>/airbnb-bookings?retryWrites=true&w=majority';


4. Run the application:
nodemon server.js


5. Access the web app:
http://localhost:3000


How to Use the Application:
1. Add a Booking:
a. Fill in the form at the top of the page with details (client name, email, dates, etc.).
b. Click "Save Booking" to store the booking in the database.

2. View Bookings:
a. All bookings are listed in the "All Bookings" table below the form.
b. Each row displays the booking details along with Edit and Delete buttons.

3. Edit a Booking:
a. Click the "Edit" button next to the booking you want to modify.
b. The form will load the booking's data for editing.
c. Make changes and click "Save Booking" to update the booking.

4. Delete a Booking:
a. Click the "Delete" button next to the booking you want to remove.
b. The booking will be deleted from the database.



1. Project Structure:
airbnb-booking-app/
│
├── models/              # Mongoose schemas and models
│   └── Booking.js
│
├── public/              # Static frontend files
│   ├── index.html       # Main HTML file
│   ├── index.js         # Frontend JavaScript logic
│   ├── styles.css       # Custom CSS styles
│
├── routes/              # API routes for CRUD operations
│   └── bookings.js
│
├── server.js            # Main Express server
├── package.json         # Project dependencies and scripts
├── package-lock.json    # Dependency lock file
└── README.md            # Project documentation





API Endpoints:
1. GET /api/bookings
Retrieve all bookings from the database.

2. POST /api/bookings
Add a new booking.

3. GET /api/bookings/
Get a specific booking by ID (for editing).

4. PUT /api/bookings/
Update a booking by ID.

5. DELETE /api/bookings/
Delete a booking by ID.





Known Issues & Future Improvements: 
1. Add search or filter functionality to find bookings faster.
2. Implement pagination for large datasets.
3. Improve form validation (e.g., prevent end date before start date).



Acknowledgments:
1. Bootstrap for UI design.
2. MongoDB Atlas for cloud-based database services.
3. Express.js and Node.js for building the backend.



License:
1. This project is licensed under the MIT License – feel free to modify and distribute it.

Contributing:
1. If you would like to contribute to this project, please open a pull request or submit issues on GitHub.
