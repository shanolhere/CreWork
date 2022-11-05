import { NavLink, Link } from "react-router-dom";
import { DataContext } from "../context/DataContext";
import { useContext, useEffect } from "react";

const Home = () => {
  const { recipeData, setRecipeData, query, setQuery } = useContext(
    DataContext
  );

  // const fetchData = async () => {
  //   const res = await fetch(
  //     `https://api.edamam.com/search?q=${query}&app_id=243087a8&app_key=8dd678972216a15320639aa248c0b1bc`
  //   );
  //   const data = await res.json();
  //   setRecipeData(data.hits);
  // };

  // useEffect(() => {
  //   fetchData();
  // }, [query]);

  //console.log(recipeData);

  return (
    <>
      <div className="container">
        <h1> Cook. Eat. Repeat.</h1>
        <p>
          Delicious recipes at your finger tips. A complete step-by-step guide
          to cook soul soothing delicious and healthy food.
        </p>

        <NavLink to="/search">
          <button className="searchBtn">Search</button>
        </NavLink>
      </div>
      <div className="recipeContainer">
        {recipeData.map((data, index) => {
          return (
            <div className="recipeCard" key={index}>
              <Link to={`recipe/${data.recipe.label}`}>
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
    </>
  );
};
export default Home;
