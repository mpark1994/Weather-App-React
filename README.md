# Weather App
#### Video Demo:  <https://youtu.be/0NRBLoouS5Y>

## Description:
This is my Weather App created using the Javascript React Library.
To start, type in the command `npm start` within the directory.

To run successfully, you may also have to install the necessary icons from React:
To do so, run `npm install react-icons --save`

Look below for further details using react if the commands fail.

#### Weather App Components
For the project, the Weather App utilizes the WeatherDisplay.js and WeatherDisplayForm.js components to build a webpage within App.js
The WeatherDisplayForm.js component receives input from user to get the location of the city that they want to view the weather for, and
WeatherDisplay.js uploads the data from the weather API via GET.

The weather API data include forecasts up to 2 days in advance including the current day, with further info for every hour within the day.
Furthermore, depending on the time of day viewed, the background of the WeatherDisplay.js component changes between day and night.

The components also gathers other important Weather data - including humidity, wind speed, and more - which the user can access via a 
dropdown menu.

#### Design Choices
I wanted to make a Weather App that utilized minimalism - to have a really clear UI that does not take up a lot of space to view the 
necessary information needed to get the data that the user requests via input. This also meant that I had to figure out what information
should be represented and not, while tinkering with the CSS of the project to retain a sleek visual UI - balancing information given while
minimizing the space utilized.

#### Navigating the App
Originally set to Ottawa by default, you can check out the temperature of the location typed in the search bar.
To navigate through the forecast, use the arrow buttons on the top of the webpage - the first set represents the days,
while the second set represents the hours.

Although set to just show the temperature and location of the selected query, the can also view a more detailed information by clicking 
on the More Data dropdown Menu

#### Possible Feature Creep in the Future

One of the reasons why I wanted to do a minimalistic display was to be able to deploy the Weather App into a mobile application - to be compact
enough to render successfully on mobile devices with ease - but for this Weather App I first wanted to be able to deploy the webpage on a computer
first as it is my first react project.

Other features to add could include companion components that compliments with the weather API - using the longitude and latitude data received from
the weather API to request information to a seperate API for more information - This could be hotels or restaurants near, or other interesting data
to complement the app.

## React CLI Commands

#### Available Scripts
In the project directory, you can run:

#### npm start
Runs the app in the development mode.
Open http://localhost:3000 to view it in your browser.

#### npm test
Launches the test runner in the interactive watch mode.
See the section about running tests for more information.

#### npm run build
Builds the app for production to the build folder.
It correctly bundles React in production mode and optimizes the build for the best performance.
