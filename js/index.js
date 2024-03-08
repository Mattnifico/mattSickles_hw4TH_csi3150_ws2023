import usedCars from "./usedCars.js";
console.log(usedCars);

const listing = document.getElementById("listing");

function createCarProfile(car) {
  const { year, make, model, mileage, price, color } = car;
  const imageName = `${year} ${model}.png`;
  const profileTemplate = `
  <div class="carCard">
  <img src="../assets/${imageName}" alt="${make} ${model}">
    <div class="carCardInfo">
        <h2>${make} ${model}</h2>
        <p>Year: ${year}</p>
        <p>Price: $${price}</p>
        <p>Mileage: ${mileage}</p>
        <p>Color: ${color}</p>
    </div>
  </div>
  `;

  return profileTemplate;
}

function clearCarProfile() {
  listing.innerHTML = "";
}

function displayCarProfile(cars) {
  return cars.map((car) => createCarProfile(car)).join("");
}

// filter code

// function that makes arrays from collective makes, models, colors, years
// function that collects checkbox values
// if else statements where say car color's array includes id of one of the checkbox values, it puts it inside the filter's array which is then used to show the final list of cars

/*
var checkedCheckboxes = document.querySelectorAll(
  "input[type=checkbox]:checked"
);
*/

function filterCars() {
  var selectedDecades = Array.from(
    document.querySelectorAll('input[name="decade"]:checked')
  ).map((checkbox) => checkbox.value);
  var selectedMakes = Array.from(
    document.querySelectorAll('input[name="make"]:checked')
  ).map((checkbox) => checkbox.value);
  var selectedMileage = Array.from(
    document.querySelectorAll('input[name="mileage"]:checked')
  ).map((checkbox) => checkbox.value);
  var selectedPrice = Array.from(
    document.querySelectorAll('input[name="price"]:checked')
  ).map((checkbox) => checkbox.value);
  var selectedColors = Array.from(
    document.querySelectorAll('input[name="color"]:checked')
  ).map((checkbox) => checkbox.value);

  console.log(selectedDecades);
  console.log(selectedMakes);
  console.log(selectedMileage);
  console.log(selectedPrice);
  console.log(selectedColors);

  var filteredCars = usedCars.filter((car) => {
    return (
      (selectedDecades.length === 0 || selectedDecades.includes(car.decade)) &&
      (selectedMakes.length === 0 || selectedMakes.includes(car.make)) &&
      (selectedMileage.length === 0 || selectedMileage.includes(car.mileage)) &&
      (selectedPrice.length === 0 || selectedPrice.includes(car.price)) &&
      (selectedColors.length === 0 || selectedColors.includes(car.color))
    );
  });

  console.log(filteredCars);
  clearCarProfile();
  listing.innerHTML = displayCarProfile(filteredCars);
}

document.getElementById("filterButton").addEventListener("click", filterCars);

// end filter code

function init() {
  clearCarProfile();
  listing.innerHTML = displayCarProfile(usedCars);
}

init();

/*
event listener for apply button
  filters
    make
*/
