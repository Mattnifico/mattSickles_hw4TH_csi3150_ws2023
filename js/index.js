const usedCars = require('./usedCars');
console.log(usedCars);

const listing = document.getElementById('listing');
const form = document.getElementById('filters-form');

/*
// Function to display the list of cars on the website
function displayCars() {
    // Select the HTML element where you want to display the cars
    

    // Clear any existing content inside the listing div
    listing.innerHTML = '';

    // Iterate over each car in the array
    usedCars.forEach(car => {
        // Create a div element to represent each car
        const carDiv = document.createElement('div');
        carDiv.classList.add('car');

        // Construct the HTML content for the car
        carDiv.innerHTML = `
            <h2>${car.year} ${car.make} ${car.model}</h2>
            <p>Mileage: ${car.mileage}</p>
            <p>Price: $${car.price}</p>
            <p>Color: ${car.color}</p>
            <p>Gas Mileage: ${car.gasMileage}</p>
        `;

        // Append the car div to the listing div
        listing.appendChild(carDiv);
    });
}

// Call the displayCars function when the page loads
window.addEventListener('DOMContentLoaded', displayCars); */

function createCarProfile(car){
  const{year, make, mileage, price, color} = car;
  const profileTemplate = `
  <div class="car-card">
    <div class="car-card-info">
        <h2>${make} ${model}</h2>
        <p>${year}</p>
        <p>$${price}</p>
        <p>Mileage: ${mileage}</p>
        <p>Color: ${color}</p>
    </div>
  </div>
  `;

  return profileTemplate;
}

function clearCarProfile(){
  car.innerHTML = "";
}

function displayCarProfile(cars){
  const newCar = cars.map(createCarProfile).join("");
  listing.innerHTML += newCar;
}

function init(){
  clearCarProfile();
  listing.innerHTML = displayCarProfile(usedCars);
}

init();