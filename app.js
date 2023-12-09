

// Function to add a new recipe
function addRecipe() {
    const recipeName = document.getElementById('recipeName').value;
    const ingredients = document.getElementById('ingredients').value;
    const description = document.getElementById('description').value;
   
      // Check if any of the fields is empty
      if (!recipeName || !ingredients || !description) {
        alert("Please fill in all fields.");
        return;
    }

    // Create a recipe card
    const recipeCard = document.createElement('div');
    recipeCard.classList.add('recipe-card');

    recipeCard.innerHTML = `
        <h3>${recipeName}</h3>
        <p><strong>Ingredients:</strong> ${ingredients}</p>
        <p><strong>Description:</strong> ${description}</p>
        <button onclick="editRecipe(this)">Edit</button>
        <button onclick="deleteRecipe(this)">Delete</button>
    `;

    // Append the recipe card to the recipe list
    document.getElementById('recipeList').appendChild(recipeCard);

    // Clear the form
    document.getElementById('recipeFormFields').reset();
}

// Function to edit a recipe
function editRecipe(button) {
    const recipeCard = button.parentElement;
    const recipeName = recipeCard.querySelector('h3').innerText;
    const ingredients = recipeCard.querySelector('p:nth-child(2)').innerText.slice(13);
    const description = recipeCard.querySelector('p:nth-child(3)').innerText.slice(13);

    // Populate the form with the selected recipe
    document.getElementById('recipeName').value = recipeName;
    document.getElementById('ingredients').value = ingredients;
    document.getElementById('description').value = description;

    // Delete the original recipe card
    deleteRecipe(button);
}

// Function to delete a recipe
function deleteRecipe(button) {
    const recipeCard = button.parentElement;
    recipeCard.remove();
}
