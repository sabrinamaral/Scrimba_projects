export default function IngredientsList(props) {
  function showIngredientList() {
    return (
      <section>
        <h2>Ingredients on hand:</h2>
        <ul className="ingredients-list" aria-live="polite">
          {props.list}
        </ul>
      </section>
    );
  }

  function showGetRecipe() {
    return (
      <div className="get-recipe-container">
        <div ref={props.ref}>
          <h3>Ready for a recipe?</h3>
          <p>Generate a recipe from your list of ingredients.</p>
        </div>
        <button onClick={props.handleGetRecipe}>Get a recipe</button>
      </div>
    );
  }
  return (
    <>
      {props.list.length > 0 && showIngredientList()}
      {props.list.length > 3 && showGetRecipe()}
    </>
  );
}
