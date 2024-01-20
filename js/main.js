import { listOfCard } from "./pages/listOfCard.js";

async function init() {
    await listOfCard(); 
}

window.addEventListener('load', () => {
    init();
});

