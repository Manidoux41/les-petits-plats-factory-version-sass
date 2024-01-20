import { recipes } from "../datas/recipes.js";
import { createCardTemplate } from "../templates/createCardTemplate.js";

/**
 * Iterates through the list of recipes and creates a card template for each recipe,
 * then inserts the card into the DOM.
 *
 * @param {type} recipe - the recipe to be used for creating the card template
 * @return {type} undefined
 */
export function listOfCard() {
   for(const recipe of recipes) {
       const card = createCardTemplate(recipe);
       document.querySelector('#recipesList').insertAdjacentHTML('afterbegin', card);
   }
}