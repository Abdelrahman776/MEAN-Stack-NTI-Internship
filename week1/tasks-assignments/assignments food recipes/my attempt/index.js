
const fetchRecipes = async () => {

  const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=egg`;
  // try {


  const response = await fetch(url);

  // if(!response.ok) throw new Error("recipe data fetch failed");
  if(!response.ok) console.log("recipe data fetch failed");
  const data = await response.json();
  // if (data.meals === null) throw new Error("no recipes found");
  if (data.meals === null) console.log("no recipes found");

  displayRecipes(data.meals);
  // displaySummary(data.meals);
  // }catch (error) {
  //   throw error;
  // }

};

let recipescontent = document.getElementById("recipescontent");
const displayRecipes = (recipes) => {

  recipescontent.innerHTML = "";
  recipes.foreach(recipe => {
    console.log(recipe);
    recipescontent.innerHTML += `<div class="recipe-card">
    <img src="${recipe.strMealThumb}" alt="${recipe.strMeal} Image">
    <h3>${recipe.strMeal}</h3>
    <p>Category:${recipe.strCategory}</p>
    <p>Area:${recipe.strArea}</p>
    </div>`;
  });
};
console.log("hello");