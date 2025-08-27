import React from "react";
import ClaudeRecipe from "./ClaudeRecipe";
import IngredientsList from "./IngredientsList";
import { getRecipeFromMistral } from "../../ai";

export default function Main() {
  const [ingredientsItems, setIngredientItems] = React.useState([]);
  const [recipe, setRecipe] = React.useState("");
  const recipeSection = React.useRef(null);

  React.useEffect(() => {
    if (recipe !== "" && recipeSection.current !== null) {
      recipeSection.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [recipe]);

  const ingredientsList = ingredientsItems.map((ingredient) => {
    return <li key={ingredient}>{ingredient}</li>;
  });

  function addIngredient(formData) {
    const newIngredient = formData.get("ingredient");

    setIngredientItems((prevIngredient) => {
      return [...prevIngredient, newIngredient];
    });
  }

  async function handleGetRecipe() {
    const result = await getRecipeFromMistral(ingredientsItems);
    if (result) {
      setRecipe(result);
    }
  }

  return (
    <main>
      <form className="add-ingredient-form" action={addIngredient}>
        <input
          type="text"
          placeholder="e.g. oregano"
          aria-label="Add ingredient"
          name="ingredient"
        />
        <button type="submit">Add ingredient</button>
      </form>
      <IngredientsList
        ref={recipeSection}
        list={ingredientsList}
        handleGetRecipe={handleGetRecipe}
      />
      {recipe && <ClaudeRecipe recipe={recipe} />}
    </main>
  );
}

/**
 * Note: if you ever need the old value of state
 * to help you determine the new value of state,
 * you should pass a callback function to your
 * state setter function instead of using
 * state directly. This callback function will
 * receive the old value of state as its parameter,
 * which you can then use to determine your new
 * value of state.
 */
