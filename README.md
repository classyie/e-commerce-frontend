# React + Vite - E-Commerce Frontend

This is the frontend for an e-commerce application built using React and Vite. The project provides a user-friendly interface to explore products, manage a cart, sign up, and log in. The product data is fetched from [dummyjson.com](https://dummyjson.com/products?limit=10) to simulate real product data.

## Features

- **Navbar**: A responsive navigation bar for seamless navigation.
- **Sign Up**: A user registration form to create an account.
- **Login**: A login form to authenticate users.
- **Home**: A home page displaying products fetched from a mock API.
- **Cart**: A shopping cart page that allows users to view selected products, see total prices, and apply discounts.
- **Responsive Design**: Tailwind CSS ensures the app is fully responsive across devices.
  
## Tech Stack

- **React**: For building the UI and handling state management.
- **Vite**: For fast development and optimized production builds.
- **Tailwind CSS**: For styling the components with a utility-first approach.
- **React Router**: For routing between pages (Sign Up, Login, Home, Cart).
- **React Hooks (useState, useEffect)**: For managing state and side effects in the app.

## Installation

To run the project locally, follow these steps:

### 1. Clone the repository

git clone https://github.com/classyie/e-commerce-frontend.git

### 2. Install dependencies

Navigate into the project directory and install the dependencies:

cd e-commerce-frontend
npm install

### 3. Run the development server

Start the Vite development server:

npm run dev

Your application should now be running at [http://localhost:3000](http://localhost:3000).

## Features Overview

### Home Page

- Displays a list of products fetched from a mock API.
- Shows product details like title, price, and image.
- Each product has options for adding to the cart.

### Cart Page

- Displays products added to the cart with their prices.
- Calculates the total amount, applying any discounts (up to two decimal places).
- Allows the user to view product details and remove items from the cart.

### Responsive Design

- The app is fully responsive, ensuring a seamless experience on both desktop and mobile devices.
  
## Future Enhancements

- **Product Filtering and Sorting**: Ability to filter products by categories and sort by price or popularity.
- **User Authentication**: Implementing real authentication using a real backend (JWT, OAuth).
- **Payment Gateway**: Integrating a payment solution for online transactions.
- **State Management**: Implementing a global state management solution (e.g., Redux or Context API) for managing the cart and user authentication.

## Contributing

Feel free to fork this project and make contributions. If you encounter any issues or have suggestions, please open an issue.