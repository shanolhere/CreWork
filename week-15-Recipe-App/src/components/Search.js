import { Link } from "react-router-dom";
import { DataContext } from "../context/DataContext";
import { useContext, useState } from "react";

const Search = () => {
  const { recipeData, setRecipeData, query, setQuery } = useContext(
    DataContext
  );
  //console.log(recipeData);

  const [querySearch, setQuerySearch] = useState("");

  const getData = () => {
    setQuery(querySearch);
  };
  // console.log(query);

  return (
    <div className="aboutContainer">
      <h1> Search </h1>
      <div className="inputContainer">
        <input
          type="text"
          placeholder="Search for a recipe"
          className="querySearch"
          value={querySearch}
          onChange={(e) => setQuerySearch(e.target.value)}
        />
        <button onClick={getData} className="clickBtn">
          Search
        </button>
      </div>
      <div className="recipeContainer">
        {recipeData.map((data, index) => {
          return (
            <div className="recipeCard" key={index}>
              <Link to={`/recipe/${data.recipe.label}`}>
                <img src={data.recipe.image} alt="recipeImage" />
              </Link>
              <h4>{data.recipe.label}</h4>
              <p>
                Cuisine:{" "}
                {data.recipe.cuisineType.map((cuisine, i) => {
                  return <span key={i}>{cuisine}</span>;
                })}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Search;
