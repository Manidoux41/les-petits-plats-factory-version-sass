import { listOfCard } from "./pages/listOfCard.js";

async function init() {
    const card = await listOfCard(); 
    return card;
}

window.addEventListener('load', () => {
    init();
});

