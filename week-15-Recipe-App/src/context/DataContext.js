import { createContext, useState, useEffect } from "react";

const DataContext = createContext();

export function DataContextProvider({ children }) {
  const [recipeData, setRecipeData] = useState([]);
  const [query, setQuery] = useState("chocolate");

  const fetchData = async () => {
    const res = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=243087a8&app_key=8dd678972216a15320639aa248c0b1bc`
    );
    const data = await res.json();
    setRecipeData(data.hits);
  };

  useEffect(() => {
    fetchData();
  }, [query]);
  console.log(query, "dd");

  return (
    <DataContext.Provider
      value={{ recipeData, setRecipeData, query, setQuery }}
    >
      {children}
    </DataContext.Provider>
  );
}

export { DataContext };
