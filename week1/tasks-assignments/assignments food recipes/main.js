const container = document.querySelector(".container");

async function getData() {
  const url = "https://www.themealdb.com/api/json/v1/1/search.php?s=";
  const response = await fetch(url);
  const json = await response.json();
  console.log(json);

  json.meals.forEach(meal => {
    showMeal(meal);
  });

}

function sayHi() {
  console.log("hi");
}

getData();
sayHi();

function showMeal(meal) {
  const titleMeal = meal.strMeal;
  const imageMeal = meal.strMealThumb;
  const ingridentMeal1 = meal.strIngredient1;
  const ingridentMeal2 = meal.strIngredient2;
  const instruction = meal.strInstructions;

  const html = `
  <div class="meal">
      <h4>${titleMeal}</h4>
      <img src="${imageMeal}">
      <div>
        <span>${ingridentMeal1}</span>
        <span>${ingridentMeal2}</span>
      </div>
      <p>${instruction}</p>
    </div>
  `;

  container.innerHTML += html;
}