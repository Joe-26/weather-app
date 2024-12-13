# Weather App

A simple weather application built using **React**. This app allows users to check the current weather conditions of their current location and any other place based on their coordinates from a weather API.

---

## Table of Contents
1. [Features](#features)
2. [Demo](#demo)
3. [Technologies Used](#technologies-used)
4. [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
5. [Usage](#usage)
6. [API Information](#api-information)
7. [Contributing](#contributing)
8. [Acknowledgments](#acknowledgments)

---

## Features
- Search for the current weather at your location.
- Displays current temperature, minimum and maximum temperature for the day.
- Search Weather for any place based on its coordinates.
- Responsive design for mobile and desktop users.
- Real-time data fetching from a weather API.

---

## Demo
Check out the live demo of the app: [Weather App Demo](https://joe-26.github.io/WeatherApp)  

---

## Technologies Used
- **React**: Frontend library.
- **Tailwind CSS**: Styling.
- **Weather API**: Fetching real-time weather data.
- **Axios**: For HTTP requests.

---

## Getting Started

### Prerequisites
Make sure you have the following installed:
- Node.js (v14 or above)
- npm or yarn

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/joe-26/weather-app.git
   cd weather-app
   ```
2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```
3. Start the development server:
   ```bash
   npm start
   # or
   yarn start
   ```

---

## Usage
1. When you first fire up the server, the application shows the weather information for your current location after giving the location permissions.
2. You can enter a particular place's latitude and longitude values and see its respective weather data as well.
3. You can follow the link in the application to find out the longitude and latitude values for any other place.

---

## API Information
This app uses the [Open-Meteo API](https://open-meteo.com/)  
This is a free API that you can use to fetch the weather data using the latitude and longitude values.

---

## Contributing
Contributions are welcome!  
1. Fork the repository.
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request.

---

## Acknowledgments
- [Open-Meteo API](https://open-meteo.com/) for weather data.
- [React Documentation](https://reactjs.org/docs/getting-started.html).
- [Latitude and Longitude Finder](https://www.latlong.net/) to find the coordinates for a place.

---

This template ensures a structured README that covers all essential details for your weather app. You can modify it as needed based on your specific project details.
