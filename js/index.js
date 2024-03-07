import usedCars from './usedCars.js';
console.log(usedCars);

const listing = document.getElementById('listing');

function createCarProfile(car){
  const{year, make, model, mileage, price, color} = car;
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

function clearCarProfile(){
  listing.innerHTML = "";
}

function displayCarProfile(cars){
  return cars.map((car) => createCarProfile(car)).join("");
}

function init(){
  clearCarProfile();
  listing.innerHTML = displayCarProfile(usedCars);
}

init();