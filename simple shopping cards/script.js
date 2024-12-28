const Product = './product.json';
const sneakerBtn = document.getElementById("sneaker");
const hoodieBtn = document.getElementById("hoodie");
const trouserBtn = document.getElementById("trouser");
const buttons = [sneakerBtn, hoodieBtn, trouserBtn];

function setActiveButton(activeButton) {
    buttons.forEach(button => {
        if (button === activeButton) {
            button.classList.add('active');
        } else {
            button.classList.remove('active');
        }
    });
}

const dialog = document.getElementById("dialog");

function toggleDialog(show) {
    if (show) {
        dialog.classList.add("fade-in");
        dialog.classList.remove("fade-out");
    } else {
        dialog.classList.add("fade-out");
        dialog.classList.remove("fade-in");
    }
}

// Sneakers Section
async function getProductSneakers() {
    const cards = document.getElementById("cards");
    const res = await fetch(Product);
    const data = await res.json();

    cards.innerHTML = data.sneakers
        .map(
            (sneaker) => `
                <div class="card">
                    <img src="${sneaker.image}" alt="${sneaker.name}" />
                    <span class="name">${sneaker.name}</span>
                    <span class="description">${sneaker.description}</span>
                    <span class="price">$${sneaker.price}</span>
                    <div class="cts">
                        <button class="btn-primary btn-add-to-cart">
                            <img src="./assets/cart.png" />
                        </button>
                        <button class="btn-primary">
                            <img src="./assets/heart.png" />
                        </button>
                    </div>
                </div>`
        )
        .join("");
    setActiveButton(sneakerBtn);

    const addToCartButtons = document.querySelectorAll(".btn-add-to-cart");
    addToCartButtons.forEach((button) => {
        button.addEventListener("click", () => {
            toggleDialog(true); 
            setTimeout(() => toggleDialog(false), 3000); 
        });
    });
}

// Hoodies Section
async function getProductHoodies() {
    const cards = document.getElementById("cards");
    const res = await fetch(Product);
    const data = await res.json();

    cards.innerHTML = data.hoodies
        .map(
            (hoodie) => `
                <div class="card">
                    <img src="${hoodie.image}" alt="${hoodie.name}" />
                    <span class="name">${hoodie.name}</span>
                    <span class="description">${hoodie.description}</span>
                    <span class="price">$${hoodie.price}</span>
                    <div class="cts">
                        <button class="btn-primary btn-add-to-cart">
                            <img src="./assets/cart.png" />
                        </button>
                        <button class="btn-primary">
                            <img src="./assets/heart.png" />
                        </button>
                    </div>
                </div>`
        )
        .join("");
    setActiveButton(hoodieBtn);

    const addToCartButtons = document.querySelectorAll(".btn-add-to-cart");
    addToCartButtons.forEach((button) => {
        button.addEventListener("click", () => {
            toggleDialog(true);
            setTimeout(() => toggleDialog(false), 3000);
        });
    });
}

// Trousers Section
async function getProductTrousers() {
    const cards = document.getElementById("cards");
    const res = await fetch(Product);
    const data = await res.json();

    cards.innerHTML = data.trousers
        .map(
            (trouser) => `
                <div class="card">
                    <img src="${trouser.image}" alt="${trouser.name}" />
                    <span class="name">${trouser.name}</span>
                    <span class="description">${trouser.description}</span>
                    <span class="price">$${trouser.price}</span>
                    <div class="cts">
                        <button class="btn-primary btn-add-to-cart">
                            <img src="./assets/cart.png" />
                        </button>
                        <button class="btn-primary">
                            <img src="./assets/heart.png" />
                        </button>
                    </div>
                </div>`
        )
        .join("");
    setActiveButton(trouserBtn);

    const addToCartButtons = document.querySelectorAll(".btn-add-to-cart");
    addToCartButtons.forEach((button) => {
        button.addEventListener("click", () => {
            toggleDialog(true);
            setTimeout(() => toggleDialog(false), 3000);
        });
    });
}

// Add event listeners to buttons
sneakerBtn.addEventListener('click', getProductSneakers);
hoodieBtn.addEventListener('click', getProductHoodies);
trouserBtn.addEventListener('click', getProductTrousers);

// Load sneakers section by default
document.addEventListener('DOMContentLoaded', () => {
    getProductSneakers();
} );