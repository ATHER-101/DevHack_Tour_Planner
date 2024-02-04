// This example uses the autocomplete feature of the Google Places API.
// It allows the user to find all hotels in a given place, within a given
// country. It then displays markers for all the hotels returned,
// with on-click details for each hotel.
// This example requires the Places library. Include the libraries=places
// parameter when you first load the API. For example:
// <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places">
let map;
let places;
let infoWindow;
let markers = [];
let autocomplete;
var d = 0;
var a = 0;
var final = 0;
const random = {}
const countryRestrict = { country: "us" };
const MARKER_PATH =
  "https://developers.google.com/maps/documentation/javascript/images/marker_green";
const hostnameRegexp = new RegExp("^https?://.+?/");
const countries = {
  au: {
    center: { lat: -25.3, lng: 133.8 },
    zoom: 4,
  },
  br: {
    center: { lat: -14.2, lng: -51.9 },
    zoom: 3,
  },
  ca: {
    center: { lat: 62, lng: -110.0 },
    zoom: 3,
  },
  fr: {
    center: { lat: 46.2, lng: 2.2 },
    zoom: 5,
  },
  de: {
    center: { lat: 51.2, lng: 10.4 },
    zoom: 5,
  },
  mx: {
    center: { lat: 23.6, lng: -102.5 },
    zoom: 4,
  },
  nz: {
    center: { lat: -40.9, lng: 174.9 },
    zoom: 5,
  },
  it: {
    center: { lat: 41.9, lng: 12.6 },
    zoom: 5,
  },
  za: {
    center: { lat: -30.6, lng: 22.9 },
    zoom: 5,
  },
  es: {
    center: { lat: 40.5, lng: -3.7 },
    zoom: 5,
  },
  pt: {
    center: { lat: 39.4, lng: -8.2 },
    zoom: 6,
  },
  us: {
    center: { lat: 37.1, lng: -95.7 },
    zoom: 3,
  },
  uk: {
    center: { lat: 54.8, lng: -4.6 },
    zoom: 5,
  },
};

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    zoom: countries["us"].zoom,
    center: countries["us"].center,
    mapTypeControl: false,
    panControl: false,
    zoomControl: false,
    streetViewControl: false,
  });
  infoWindow = new google.maps.InfoWindow({
    content: document.getElementById("info-content"),
  });
  // Create the autocomplete object and associate it with the UI input control.
  // Restrict the search to the default country, and to place type "cities".
  autocomplete = new google.maps.places.Autocomplete(
    document.getElementById("autocomplete"),
    {
      types: ["(cities)"],
      componentRestrictions: countryRestrict,
      fields: ["geometry"],
    },
  );
  places = new google.maps.places.PlacesService(map);
  autocomplete.addListener("place_changed", onPlaceChanged);
  // Add a DOM event listener to react when the user selects a country.
  document
    .getElementById("country")
    .addEventListener("change", setAutocompleteCountry);
}

// When the user selects a city, get the place details for the city and
// zoom the map in on the city.
function onPlaceChanged() {
  const place = autocomplete.getPlace();

  if (place.geometry && place.geometry.location) {
    map.panTo(place.geometry.location);
    map.setZoom(15);
    search();
    search2();
    search3();
    const size = 10;
    const twoDArray = [];

    for (let i = 0; i < size; i++) {
      const row = [];
      for (let j = 0; j < size; j++) {
        const index = i * size + j;
        row.push(random[index]);
        console.log(row[j])
      }
      twoDArray.push(row);
    }

    console.log(twoDArray);
    console.log(random)
    d = random[1]
  } else {
    document.getElementById("autocomplete").placeholder = "Enter a city";
  }
}

// Search for hotels in the selected city, within the viewport of the map.
function search() {
  const search = {
    bounds: map.getBounds(),
    types: ["lodging"],
  };

  let hotel_search = {}

  places.nearbySearch(search, (results, status, pagination) => {
    if (status === google.maps.places.PlacesServiceStatus.OK && results) {
      clearResults();
      clearMarkers();

      // Create a marker for each hotel found, and
      // assign a letter of the alphabetic to each marker icon.
      for (let i = 0; i < results.length; i++) {
        if (results[i].rating > 3.5) {
          hotel_search[results[i].name] = results[i].rating
        }
      }
      console.log(hotel_search)
    }
  });
}


// Search for restaurant in the selected city, within the viewport of the map.
function search2() {
  const search = {
    bounds: map.getBounds(),
    types: ["restaurant"],
  };

  let restaurant_search = {}

  places.nearbySearch(search, (results, status, pagination) => {
    if (status === google.maps.places.PlacesServiceStatus.OK && results) {
      clearResults();
      clearMarkers();

      // Create a marker for each hotel found, and
      // assign a letter of the alphabetic to each marker icon
      for (let i = 0; i < 5; i++) {
        if (results[i].rating > 3.5) {
          restaurant_search[results[i].name] = results[i].rating
        }
      }
      console.log(restaurant_search)
    }
  });
}

// Search for attractions in the selected city, within the viewport of the map.
function search3() {
  const search = {
    bounds: map.getBounds(),
    types: ["tourist_attraction"],
  };

  let attractions_search = {}

  places.nearbySearch(search, (results, status, pagination) => {
    if (status === google.maps.places.PlacesServiceStatus.OK && results) {
      clearResults();
      clearMarkers();

      // Create a marker for each hotel found, and
      // assign a letter of the alphabetic to each marker icon.
      for (let i = 0; i < 10; i++) {
        attractions_search[results[i].name] = results[i].rating
      }
      for (let j = 0; j < 10; j++) {
        for (let k = 0; k < 10; k++) {
          distanceCalculation(results[j].geometry.location, results[k].geometry.location)
        }
      }
      console.log(attractions_search)
    }
  });
}

function distanceCalculation(results, origin) {
  const destinations = [];
  destinations.push(results);

  let requestParms = {
    origins: [origin],
    destinations,
    travelMode: 'DRIVING'
  }

  var distanceMatrixService = new google.maps.DistanceMatrixService();
  distanceMatrixService.getDistanceMatrix(requestParms, (distanceResult) => {
    let totalDistance = 0;
    for (let i = 0; i < distanceResult.rows[0].elements.length; i++) {
      const element = distanceResult.rows[0].elements[i];
      const distance = element.distance.value;
      totalDistance += distance;
    }
    d = totalDistance
    console.log('Total distance: ' + totalDistance);
    random[a] = d
    a = a+1
  });
}

function clearMarkers() {
  for (let i = 0; i < markers.length; i++) {
    if (markers[i]) {
      markers[i].setMap(null);
    }
  }

  markers = [];
}

// Set the country restriction based on user input.
// Also center and zoom the map on the given country.
function setAutocompleteCountry() {
  const country = document.getElementById("country").value;

  if (country == "all") {
    autocomplete.setComponentRestrictions({ country: [] });
    map.setCenter({ lat: 15, lng: 0 });
    map.setZoom(2);
  } else {
    autocomplete.setComponentRestrictions({ country: country });
    map.setCenter(countries[country].center);
    map.setZoom(countries[country].zoom);
  }

  clearResults();
  clearMarkers();
}

function dropMarker(i) {
  return function () {
    markers[i].setMap(map);
  };
}

function addResult(result, i) {
  const results = document.getElementById("results");
  const markerLetter = String.fromCharCode("A".charCodeAt(0) + (i % 26));
  const markerIcon = MARKER_PATH + markerLetter + ".png";
  const tr = document.createElement("tr");

  tr.style.backgroundColor = i % 2 === 0 ? "#F0F0F0" : "#FFFFFF";
  tr.onclick = function () {
    google.maps.event.trigger(markers[i], "click");
  };

  const iconTd = document.createElement("td");
  const nameTd = document.createElement("td");
  const icon = document.createElement("img");

  icon.src = markerIcon;
  icon.setAttribute("class", "placeIcon");
  icon.setAttribute("className", "placeIcon");

  const name = document.createTextNode(result.name);

  iconTd.appendChild(icon);
  nameTd.appendChild(name);
  tr.appendChild(iconTd);
  tr.appendChild(nameTd);
  results.appendChild(tr);
}

function clearResults() {
  const results = document.getElementById("results");

  while (results.childNodes[0]) {
    results.removeChild(results.childNodes[0]);
  }
}

// Get the place details for a hotel. Show the information in an info window,
// anchored on the marker for the hotel that the user selected.
function showInfoWindow() {
  // @ts-ignore
  const marker = this;

  places.getDetails(
    { placeId: marker.placeResult.place_id },
    (place, status) => {
      if (status !== google.maps.places.PlacesServiceStatus.OK) {
        return;
      }

      infoWindow.open(map, marker);
      buildIWContent(place);
    },
  );
}

// Load the place information into the HTML elements used by the info window.
function buildIWContent(place) {
  document.getElementById("iw-icon").innerHTML =
    '<img class="hotelIcon" ' + 'src="' + place.icon + '"/>';
  document.getElementById("iw-url").innerHTML =
    '<b><a href="' + place.url + '">' + place.name + "</a></b>";
  document.getElementById("iw-address").textContent = place.vicinity;
  if (place.formatted_phone_number) {
    document.getElementById("iw-phone-row").style.display = "";
    document.getElementById("iw-phone").textContent =
      place.formatted_phone_number;
  } else {
    document.getElementById("iw-phone-row").style.display = "none";
  }

  // Assign a five-star rating to the hotel, using a black star ('&#10029;')
  // to indicate the rating the hotel has earned, and a white star ('&#10025;')
  // for the rating points not achieved.
  if (place.rating) {
    let ratingHtml = "";

    for (let i = 0; i < 5; i++) {
      if (place.rating < i + 0.5) {
        ratingHtml += "&#10025;";
      } else {
        ratingHtml += "&#10029;";
      }

      document.getElementById("iw-rating-row").style.display = "";
      document.getElementById("iw-rating").innerHTML = ratingHtml;
    }
  } else {
    document.getElementById("iw-rating-row").style.display = "none";
  }

  // The regexp isolates the first part of the URL (domain plus subdomain)
  // to give a short URL for displaying in the info window.
  if (place.website) {
    let fullUrl = place.website;
    let website = String(hostnameRegexp.exec(place.website));

    if (!website) {
      website = "http://" + place.website + "/";
      fullUrl = website;
    }

    document.getElementById("iw-website-row").style.display = "";
    document.getElementById("iw-website").textContent = website;
  } else {
    document.getElementById("iw-website-row").style.display = "none";
  }
}

window.initMap = initMap;
