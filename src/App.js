import React, {useEffect, useState} from 'react';
import SearchBar from "./components/searchBar/SearchBar";
/*import ForecastTab from './pages/forecastTab/ForecastTab';
import kelvinToCelsius from './helpers/kelvinToCelsius'*/
import './App.css';
import axios from "axios";


const apiKey = "8c7c2232a13a04304df4ebe4f8febec2"

function App() {
  const [weatherData, setWeatherData]= useState({});
  const [location, setLocation] = useState("");
  const [error, toggleError] = useState(false);


  useEffect(()=>{
    async function fetchData() {
      toggleError(false)


      try{
        const result = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${location},nl&appid=${apiKey}&lang=nl`)
        console.log(result.data);
        setWeatherData(result.data);
      } catch (e) {
        console.error(e)
        toggleError(true)
      }

    }
    if(location){
      fetchData();
    }
  },[location])

  return (
      <>
        <div className="weather-container">

          {/*HEADER -------------------- */}
          <div className="weather-header">
           <SearchBar setLocationHandler={setLocation} />
            {error && <span className="wrong-location-error">Oeps! Deze locatie bestaat niet</span>}

            <span className="location-details">
              {Object.keys(weatherData).length > 0 &&
                <>
                  <h2>{weatherData.weather[0].description}</h2>
                  <h3>{weatherData.name}</h3>
                  <h3>Coordinates location: {weatherData.coord.lat} & {weatherData.coord.lon}</h3>
                 {/* <h2>{kelvinToCelsius(weatherData.main.temp)}</h2>*/}
                </>
              }

{/*            <button type="button" onClick={fetchData}>
              Haal data op!
            </button>*/}
          </span>
          </div>

{/*          CONTENT ------------------
          <div className="weather-content">
            <TabBarMenu />

            <div className="tab-wrapper">
              <ForecastTab coordinates={weatherData.coord} />
            </div>
          </div>*/}

         {/* <MetricSlider />*/}
        </div>
      </>
  );

}

export default App;

//Pseudocode:
// Step1 (App.js): Fetch weatherdata from API.
  // Initialize project using Create React App
  //Setup boilerplate - remove unnecessary elements / add static elements <h1>/<p> etc.
  //Create API key variable
  //Import and install axios
  //Create async function
  //Make axios get-request
  //Add eventlisteners to button / input elements
  //Import useState
  //Create state variable
  //Put response into state
  //Use dynamic data in the UI
  //Check Data before it renders - conditional rendering: {Object.keys(state).length > 0 && <> fragment</> : Meaning if there is an object received as data which has a length longer than 0 then render a fragment...

// Step2 (App.js & SearBar.js): Transfer search data when there is input.
  // Setup a <SearchBar/> component
  //Setup a boilerplate
  //Create a <form> element with an <input> and <button> element.
  //Import useState
  //Create a state variable for each search query.
  //Convert input element to controlled component: add a value={} & an eventlistener with callback function onChange={(e)=>} that has state in it and targets the value of the input.
  //Create submit function within the main function. after the state and before the return statement/
  //Prevent refresh by adding e.preventDefault() after the submit function
  // Implement the submit function through an eventlistener in the <form> element: onSubmit={handleSubmit}
  //Create a location state in App.js because you want to fetch the location details from the API.
  // Pass the setLocation as callback prop to SearchBar: function SearchBar({ setLocation })
  // Make sure SearchBar can receive this callback prop. Place setLocation(query) in handleSubmit function  in SearchBar.js below console.log and add a <SearchBar/> component in App.js: <SearchBar setLocationHandler={setLocation} />

//Step3 (App.js): Search when user input changes.
  //Remove button
  //Import useEffect to trigger a special behaviour (async fetchData()) at a specifick moment (updating stage of the lifecycle - when location state is updated) of the component lifecycle.
    //Create a useEffect hook with a callback function and a dependency array: useEffect (()=>{}, []);
    //Move async function (fetchData) into the useEffect hook, particularly in the return of the callback function useEffect(()=> {async function}, [])
    //Place function call (fetchData()) underneath function declaration, but before the dependency array.
    //Make sure the useEffect hook is only called when the location (state) is changed/updated, so add the location state as dependency in the dependency array.
   //Check if location is a truthy value (entered string) before calling fetchData. Place an if statement if(location){(fetchData()} around the function call fetchData()
  //Make request endpoint dynamic by adding ${} to location and apiKey in App.js.

//Step4(App.js & ForecastTab.js): Transfer conditional props/data
  //Import the ForecastTab component
  //Replace hardcoded text (Place here the content of the tab pages) in content <div> in App.js with <ForecastTab /> component.
  //Pass coordinates to ForecastTab: <ForecastTab coordinates={weatherData.coord}/>
  //Setup boilerplate with hardcoded text and html elements(with attributes): 5x below:
   /*<article>
    <p>
    Weekday
    </p>
    <section>
    <span>
    degrees C
    </span>
    <span>
    weatherdescription
    </span>
    </section>
    </article>*/
  //Give function ForecastTab coordinates as props: function ForecastTab({ coordinates }) {console.log(coordinates); Recieve coordinates prop in ForecastTab (see prev step)
  //Import useState in ForecastTab.js: import React, { useState } from 'react';
  //Initialise state for forecasts and set initial stat to an empty array:  const [forecasts, setForecasts] = useState([]);
  //Import useEffect in ForecastTab.js and use it in the "update" cycle within the main function: useEffect()=>{function, [props]}
  //Import axios in ForecastTab.js as you want to fetch data from API.
  //Declare async function fetchData () with try/catch block inside useEffect.
  //Create API-key variable above main function.
  //Use dummy endpoint en log result in async function of ForecastTab.js by adding a randon latitude and longitude of a location.
 // Fill in dynamic url by adding ${} into the sections of the url which are dynamic such as the lat, lon & apiKey. Within the template literals add the prop coordinates and address the lat respectively lon key of the array object fetched from the API call.
  //Save result in state, so setForecasts(result.data);
  //Call fetchData when there are coordinates, so insert a condition within the async function: if(parameter/prop) {fetchData()}

//Step5(ForecastTab.js): Displaying multiple weatherForecasts through data iteration and keys
  //Place the fetched data (result.data) in the setter function of the array after the axios.wait call.
  //Set up map method before the return statement of the main function, but in your <></> fragment or <div> element, give it a callback function, which returns the hardcoded <article> element as base.
  //Remove all other static articles
  //Use dynamic values by using {} to inject the dynamic data into the html elements. Use the parameter given in the map method and target its keys.

//Step6(App.js & ForecastTab.js): Implement errors processing and displaying on the page.
  //Add error-state in app.js: const [error, toggleError] = useState(false) to app.js
  //Add error toggle to request between async function and try block. Set its value to false.
  //Add error toggle to request in the catch section. Set its value to true.
 //Conditional rendering:Add conditional error message in the header section below the <SearchBar/> component.
/*{error &&
<span className="wrong-location-error">
              Oeps! Deze locatie bestaat niet
            </span>*/

  //Do same with ForecastTab.js: add conditional error message in the return within the main container <div>:
/*{error && <span>Er is iets misgegaan met het ophalen van de data</span>}*/
  //Conditional rendering: Add message when there are no forecasts. Put this in the return of the main function within the main container:
/*{forecasts.length === 0 && !error &&
<span className="no-forecast">
          Zoek eerst een locatie om het weer voor deze week te bekijken
        </span>
}*/

//Step7(ForecastTab.js): Loading time processing and displaying on the page.
  //Creat loading state: const [loading, toggleLoading] = useState(false); and set the initial stat to False.
  //Add the toggleLoading setter between the async function and try block and after the catch block:
   //In the function, set it to true between async and try and set it to false after the catch block.
  //Conditional rendering: if the state is on loading then....display Loading...in <html/> element: {loading && <span>Loading...</span>}

//Step8(App.js & TabBarMenu.js): Implement the routing to the pages.


