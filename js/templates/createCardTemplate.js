/**
 * Creates a card template for a recipe.
 *
 * @param {Object} recipe - The recipe object containing name, description, and image
 * @return {string} The HTML string of the recipe card
 */
export function createCardTemplate(recipe) {

    const {
        name,
        description,
        image
    } = recipe;

    /**
     * Retrieves the ingredient details and formats them into a list item for the recipe.
     *
     * @param {object} ingredients - The object containing ingredient details.
     * @return {string} The formatted list item for the recipe ingredient.
     */
    function getIngredient(ingredients) {
        const {
            ingredient,
            quantity,
            unit
        } = ingredients;
        return `<li class="recipe__ingredient">
       
        <div class="recipe__quantity">${quantity ? quantity : ''}</div>
        <div class="recipe__description">
            <span class="recipe__unit">${unit ? unit : ''}</span>
            ${ingredient}
        </div>
    </li>`;
    }
    
    /**
     * Creates a card with the given name, description, and image.
     *
     * @param {type} name - description of the name parameter
     * @param {type} description - description of the description parameter
     * @param {type} image - description of the image parameter
     * @return {type} a string containing the HTML for the card
     */
    function createCard(name, description,image) {

        let imagePath = `./assets/images/${image}`;
        if (!image) {
            imagePath = image;
        }

        return `
        <article class="recipe__fig">
            <div class="recipe__img-container">
                <img src="${imagePath}" alt="${name}" class="recipe__img" fetchpriority="low" loading="lazy">
            </div>
            <div class="recipe__info">
                <h1 class="recipe__title">
                    <span>${name}</span>
                </h1>
                <p>${description}</p>
                <div class="recipe__ingredients">
                <ul class="recipe__ingredient-list">
                    ${recipe.ingredients.map(getIngredient).join('')}
                </ul>
            </div>
        </div>
        </article>`
    }
    
 
    return createCard(name, description, image);

}

    
                