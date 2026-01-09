// style.js

// Highlight active navigation link
document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll("nav .links a");
    const currentPage = window.location.pathname.split("/").pop();

    links.forEach(link => {
        if (link.getAttribute("href") === currentPage) {
            link.style.color = "#ffcb77"; // Highlight color
            link.style.textDecoration = "underline";
        }
    });
});

// Recipes Data
const recipes = {
    "Chocolate Cake": `
        <h3>Chocolate Cake Recipe</h3>
        <p><strong>Ingredients:</strong></p>
        <ul>
            <li>1 cup flour</li>
            <li>1/2 cup cocoa powder</li>
            <li>1 tsp baking powder</li>
            <li>1/2 tsp baking soda</li>
            <li>1/2 cup sugar</li>
            <li>2 eggs</li>
            <li>1/2 cup milk</li>
            <li>1/4 cup vegetable oil</li>
        </ul>
        <p><strong>Instructions:</strong></p>
        <ol>
            <li>Preheat the oven to 350°F (180°C).</li>
            <li>Mix the dry ingredients in one bowl and wet ingredients in another.</li>
            <li>Combine both mixtures and pour into a greased baking pan.</li>
            <li>Bake for 25–30 minutes or until a toothpick comes out clean.</li>
        </ol>
    `,
    "Croissants": `
        <h3>Croissants Recipe</h3>
        <p><strong>Ingredients:</strong></p>
        <ul>
            <li>2 cups all-purpose flour</li>
            <li>1/2 cup warm water</li>
            <li>1/4 cup milk</li>
            <li>2 tbsp sugar</li>
            <li>1 tsp salt</li>
            <li>1 packet yeast</li>
            <li>1/2 cup unsalted butter</li>
        </ul>
        <p><strong>Instructions:</strong></p>
        <ol>
            <li>Mix water, milk, sugar, yeast, and salt. Add flour to form a dough.</li>
            <li>Refrigerate for 1 hour, then laminate with butter.</li>
            <li>Fold the dough and roll it out several times to create layers.</li>
            <li>Shape into crescents, proof, and bake at 375°F (190°C) for 15–20 minutes.</li>
        </ol>
    `,
    "Macarons": `
        <h3>Macarons Recipe</h3>
        <p><strong>Ingredients:</strong></p>
        <ul>
            <li>1 cup powdered sugar</li>
            <li>1/2 cup almond flour</li>
            <li>2 egg whites</li>
            <li>1/4 cup granulated sugar</li>
            <li>Food coloring</li>
            <li>Filling of your choice (e.g., buttercream)</li>
        </ul>
        <p><strong>Instructions:</strong></p>
        <ol>
            <li>Sift powdered sugar and almond flour together.</li>
            <li>Whip egg whites with granulated sugar until stiff peaks form.</li>
            <li>Fold dry ingredients into the meringue, add food coloring, and pipe onto a baking sheet.</li>
            <li>Let rest for 30 minutes and bake at 300°F (150°C) for 12–15 minutes.</li>
        </ol>
    `,
    "Red Velvet Cake": `
        <h3>Red Velvet Cake Recipe</h3>
        <p><strong>Ingredients:</strong></p>
        <ul>
            <li>2 1/2 cups all-purpose flour</li>
            <li>1 1/2 cups sugar</li>
            <li>1 tsp baking soda</li>
            <li>1 tsp salt</li>
            <li>1 tsp cocoa powder</li>
            <li>1 1/2 cups vegetable oil</li>
            <li>1 cup buttermilk</li>
            <li>2 large eggs</li>
            <li>2 tbsp red food coloring</li>
            <li>1 tsp vanilla extract</li>
        </ul>
        <p><strong>Instructions:</strong></p>
        <ol>
            <li>Preheat the oven to 350°F (180°C).</li>
            <li>Mix dry ingredients in one bowl and wet ingredients in another.</li>
            <li>Combine mixtures, pour into greased pans, and bake for 30–35 minutes.</li>
        </ol>
     `,    
    "Donuts": `
        <h3>Donuts Recipe</h3>
        <p><strong>Ingredients:</strong></p>
        <ul>
            <li>2 1/2 cups all-purpose flour</li>
            <li>1/2 cup sugar</li>
            <li>1 packet yeast</li>
            <li>1/2 cup warm milk</li>
            <li>1/4 cup melted butter</li>
            <li>1 egg</li>
            <li>1/4 tsp salt</li>
            <li>Oil for frying</li>
        </ul>
        <p><strong>Instructions:</strong></p>
        <ol>
            <li>Mix warm milk, sugar, and yeast. Let it sit for 5 minutes.</li>
            <li>Add melted butter, egg, and salt, then gradually add flour to form a soft dough.</li>
            <li>Knead for 5 minutes and let the dough rise until doubled in size.</li>
            <li>Roll out the dough, cut into shapes, and let them rise again for 30 minutes.</li>
            <li>Fry in hot oil until golden brown and coat with sugar or glaze.</li>
        </ol>
    `,
    "Cupcakes": `
        <h3>Cupcakes Recipe</h3>
        <p><strong>Ingredients:</strong></p>
        <ul>
            <li>1 1/2 cups all-purpose flour</li>
            <li>1 cup sugar</li>
            <li>1/2 cup butter</li>
            <li>2 eggs</li>
            <li>1 tsp vanilla extract</li>
            <li>1/2 cup milk</li>
            <li>1 1/2 tsp baking powder</li>
            <li>1/4 tsp salt</li>
        </ul>
        <p><strong>Instructions:</strong></p>
        <ol>
            <li>Preheat the oven to 350°F (180°C) and line a cupcake tin with liners.</li>
            <li>Cream butter and sugar until light and fluffy. Add eggs and vanilla extract.</li>
            <li>Mix dry ingredients in a separate bowl and add to the wet mixture alternately with milk.</li>
            <li>Pour batter into liners and bake for 18–20 minutes or until a toothpick comes out clean.</li>
            <li>Let cool and decorate with frosting of your choice.</li>
        </ol>
     `,
    "Kaju Katli": `
        <h3>Kaju Katli Recipe</h3>
        <p><strong>Ingredients:</strong></p>
        <ul>
            <li>1 cup cashew nuts</li>
            <li>1/2 cup sugar</li>
            <li>1/4 cup water</li>
            <li>1 tsp ghee</li>
        </ul>
        <p><strong>Instructions:</strong></p>
        <ol>
            <li>Grind cashews into a fine powder.</li>
            <li>Heat sugar and water to make a syrup, then add cashew powder and mix.</li>
            <li>Roll the mixture and cut into diamond shapes.</li>
        </ol>
    `,
    "Dual Forest Cake": `
        <h3>Dual Forest Cake Recipe</h3>
        <p><strong>Ingredients:</strong></p>
        <ul>
            <li>2 layers of chocolate sponge cake</li>
            <li>2 layers of vanilla sponge cake</li>
            <li>1 cup whipped cream</li>
            <li>1 cup cherries</li>
            <li>Chocolate shavings</li>
        </ul>
        <p><strong>Instructions:</strong></p>
        <ol>
            <li>Layer chocolate and vanilla sponge cakes alternately with whipped cream and cherries.</li>
            <li>Top with more whipped cream and chocolate shavings.</li>
        </ol>
     `,
    "Chocolate Trifle Cake": `
        <h3>Chocolate Trifle Cake Recipe</h3>
        <p><strong>Ingredients:</strong></p>
        <ul>
            <li>Chocolate sponge cake</li>
            <li>Chocolate pudding</li>
            <li>Whipped cream</li>
            <li>Chocolate chips</li>
            <li>Crushed cookies</li>
        </ul>
        <p><strong>Instructions:</strong></p>
        <ol>
            <li>Layer chocolate sponge, pudding, whipped cream, and crushed cookies in a trifle dish.</li>
            <li>Repeat layers and top with chocolate chips.</li>
        </ol>
     `,
    "Pinata": `
        <h3>Pinata Recipe</h3>
        <p><strong>Ingredients:</strong></p>
        <ul>
            <li>Chocolate shell</li>
            <li>Assorted candies</li>
            <li>Whipped cream</li>
        </ul>
        <p><strong>Instructions:</strong></p>
        <ol>
            <li>Prepare a chocolate shell using a mold.</li>
            <li>Fill the shell with candies and close it.</li>
            <li>Serve with whipped cream and break the shell to reveal candies.</li>
        </ol>
    `,
    "Cookies": `
        <h3>Cookies Recipe</h3>
        <p><strong>Ingredients:</strong></p>
        <ul>
            <li>1 cup flour</li>
            <li>1/2 cup sugar</li>
            <li>1/2 cup butter</li>
            <li>1 tsp vanilla extract</li>
            <li>1/4 tsp baking soda</li>
            <li>1/4 cup chocolate chips</li>
        </ul>
        <p><strong>Instructions:</strong></p>
        <ol>
            <li>Mix all ingredients into a dough.</li>
            <li>Shape into cookies and bake at 350°F (180°C) for 10–12 minutes.</li>
        </ol>
     `,
    "Cream Roll": `
        <h3>Cream Roll Recipe</h3>
        <p><strong>Ingredients:</strong></p>
        <ul>
            <li>Swiss roll sponge</li>
            <li>Whipped cream</li>
            <li>Fruit slices</li>
        </ul>
        <p><strong>Instructions:</strong></p>
        <ol>
            <li>Spread whipped cream over the sponge and add fruit slices.</li>
            <li>Roll tightly and chill before serving.</li>
        </ol>
    `                        
        
};

// Show Recipe Modal
function showRecipe(recipeName) {
    const recipeContent = recipes[recipeName]; // Access recipe by name
    if (!recipeContent) {
        alert("Recipe not found.");
        return;
    }

    const recipeModal = document.createElement("div");
    recipeModal.style.position = "fixed";
    recipeModal.style.top = "0";
    recipeModal.style.left = "0";
    recipeModal.style.width = "100%";
    recipeModal.style.height = "100%";
    recipeModal.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
    recipeModal.style.color = "white";
    recipeModal.style.padding = "20px";
    recipeModal.style.overflowY = "scroll";
    recipeModal.style.zIndex = "1000";

    const recipeBox = document.createElement("div");
    recipeBox.style.backgroundColor = "#3b1f2b";
    recipeBox.style.padding = "20px";
    recipeBox.style.borderRadius = "10px";
    recipeBox.style.maxWidth = "600px";
    recipeBox.style.margin = "50px auto";

    recipeBox.innerHTML = recipeContent; // Insert recipe content as HTML

    const closeButton = document.createElement("button");
    closeButton.textContent = "Close";
    closeButton.style.marginTop = "20px";
    closeButton.style.padding = "10px 20px";
    closeButton.style.backgroundColor = "#ff6f61";
    closeButton.style.color = "white";
    closeButton.style.border = "none";
    closeButton.style.borderRadius = "5px";
    closeButton.style.cursor = "pointer";

    closeButton.addEventListener("click", () => {
        recipeModal.remove();
    });

    recipeBox.appendChild(closeButton);
    recipeModal.appendChild(recipeBox);
    document.body.appendChild(recipeModal);
   
    }   
   

// Attach Click Events to Products
if (window.location.pathname.includes("products.html")) {
    const products = document.querySelectorAll(".product");
    products.forEach(product => {
        product.addEventListener("click", () => {
            const productName = product.querySelector("h3").textContent.trim(); // Ensure the name is trimmed
            showRecipe(productName);
        });
    });
}
