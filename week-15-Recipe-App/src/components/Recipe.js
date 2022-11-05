import { useParams, Link } from "react-router-dom";

import { DataContext } from "../context/DataContext";
import { useContext } from "react";

const Recipe = () => {
  const { name } = useParams();

  const { recipeData, setRecipeData, query, SetQuery } = useContext(
    DataContext
  );

  let getRecipe = null;

  recipeData.forEach((element) => {
    if (element.recipe.label === name) {
      getRecipe = element.recipe;
    }
  });
  // console.log(getRecipe);

  return (
    <div className="recipeContext">
      {getRecipe && (
        <>
          <div className="recipeHeader">
            <img src={getRecipe.image} alt="Recipe" className="imageMax" />
            <div className="recipeHeaderDetails">
              <h1> {getRecipe.label}</h1>
              <div className="typeContainer">
                <div className="type">
                  <p>Cuisine </p>
                  {getRecipe.cuisineType.map((cuisine, i) => {
                    return <span key={i}>{cuisine}</span>;
                  })}
                </div>
                <div className="type">
                  <p>Dish </p>
                  {getRecipe.dishType.map((cuisine, i) => {
                    return <span key={i}>{cuisine}</span>;
                  })}
                </div>

                <div className="type">
                  <p>Time</p>
                  <span>{getRecipe.totalTime} mins</span>
                </div>

                <div className="type">
                  <p>Servings</p>
                  <span>{getRecipe.yield}</span>
                </div>
              </div>
              <div className="ingredientContainer">
                <p> Ingredients: </p>
                <ul>
                  {getRecipe.ingredientLines.map((cuisine, i) => {
                    return <li key={i}>{cuisine}</li>;
                  })}
                </ul>
              </div>
            </div>
          </div>
          <div className="recipeDetails">
            <p> Nutrients: </p>
            <table>
              {getRecipe.digest.map((data, i) => {
                return (
                  <tr key={i}>
                    <td>
                      {data.label} ({data.unit})
                    </td>
                    <td>{data.total.toFixed(2)}</td>
                  </tr>
                );
              })}
            </table>
          </div>

          <Link to="/">
            <button className="goBack">Go Back</button>
          </Link>
        </>
      )}
    </div>
  );
};
export default Recipe;
