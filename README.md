# Titans Country Information App

## Overview

The Country Information App is a React-based web application that provides detailed information about countries around the world. Users can search for countries, filter them by continent, and sort them alphabetically. The app fetches data from a REST API and displays it in a user-friendly interface.

## Features

- **Search**: Users can search for countries by name.
- **Filter**: Users can filter countries by continent.
- **Sort**: Users can sort countries alphabetically in ascending or descending order.
- **Country Details**: Users can view detailed information about a specific country, including its population, region, subregion, capital, timezones, currencies, languages, borders, and flags.

## Technologies Used

- **React - 19**: A JavaScript library for building user interfaces.
- **React Router**: A library for routing in React applications.
- **Axios**: A promise-based HTTP client for making API requests.
- **CSS**: For styling the application.

## Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/FahimJadid/titans-react19.git
   
   cd titans-react19
    ```

2. **Install dependencies:**
    ```
    npm install
    ```


3. **Start the development server:**
    ```
    npm start
    ```

## Usage
- Search for a country:

- Enter the name of the country in the search bar.
- Filter countries by continent:

- Select a continent from the dropdown menu.
- Sort countries alphabetically:

- Click the "Asc" button to sort countries in ascending order.
- Click the "Desc" button to sort countries in descending order.
View country details:

- Click the "Read More" button on a country card to view detailed information about the country.

## API
The app fetches data from the REST Countries API. The base URL for the API is https://restcountries.com/v3.1.

## Components
- CountryCard.jsx
Displays a card with basic information about a country, including its flag, name, population, region, and capital. Includes a "Read More" button to view detailed information about the country.

- CountryDetails.jsx
Displays detailed information about a specific country, including its population, region, subregion, capital, timezones, currencies, languages, borders, and flags.

- Loader.jsx
Displays a loading spinner while data is being fetched.

- SearchFilter.jsx
Provides a search bar, filter dropdown, and sort buttons for searching, filtering, and sorting countries.

## Hooks
- useCountry.js
Custom hook for fetching and managing country data. Provides functions for fetching all countries, fetching a country by name, and sorting countries.

## Pages
- Country.jsx

Main page for displaying the list of countries. Includes the SearchFilter component for searching, filtering, and sorting countries, and the CountryCard component for displaying country information.

## Styling
The app uses CSS for styling. The main styles are defined in App.css.

## Contributing
Contributions are welcome! Please open an issue or submit a pull request if you have any improvements or bug fixes.

## License
This project is licensed under the MIT License. See the LICENSE file for details.
