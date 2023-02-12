// make the plate and the cutlery smaller

var isRecipeShown = false;

document.getElementById("leftButton").addEventListener("click", resizePlate);

function resizePlate() {

    if (fork.style.width == "80px" && fork.style.height == "500px" && 
    knife.style.width == "80px" && knife.style.height == "515px" &&
    plate.style.width == "600px" && plate.style.height == "600px"
    ) {

        fork.style.width = "130px";
        fork.style.height = "790px";
        fork.style.marginLeft = "0px";
        knife.style.width = "130px";
        knife.style.height = "805px";
        plate.style.width = "907px";
        plate.style.height = "907px";
        document.getElementById("collapseExample").style.display = "none";
    
    } else {

        fork.style.width = "80px";
        fork.style.height = "500px";
        fork.style.marginLeft = "400px";
        knife.style.width = "80px";
        knife.style.height = "515px";
        plate.style.width = "600px";
        plate.style.height = "600px";

        document.getElementById('collapseExample').style.display = 'block';

        if (isRecipeShown) {
            document.getElementById("currentRecipe").style.display = "none";
            document.getElementById("currentMethod").style.display = "none";
            document.getElementById("recipeName").style.display = "none";
            document.getElementById("recipeImage").style.display = "none";
            isRecipeShown = false;
        }

        document.getElementById("recipe").style.display = "none";
        document.getElementById("method").style.display = "none";
        document.getElementById("pancakesImage").style.display = "none";


    }
}

// design of a recipe

function designRecipe() {

    fork.style.width = "130px";
    fork.style.height = "790px";
    fork.style.marginLeft = "0px";
    knife.style.width = "130px";
    knife.style.height = "805px";
    plate.style.width = "907px";
    plate.style.height = "907px";

    currentRecipe.style.position = "absolute";
    currentRecipe.style.top = "42.5%";
    currentRecipe.style.left = "30%";
    currentRecipe.style.right = "45%";
    currentRecipe.style.color = "rgb(45, 24, 54)";
    currentRecipe.style.fontFamily = "Georgia, 'Times New Roman', Times, serif";

    currentMethod.style.position = "absolute";
    currentMethod.style.fontFamily = "Georgia, 'Times New Roman', Times, serif";
    currentMethod.style.top = "42.5%";
    currentMethod.style.left = "45%";
    currentMethod.style.width = "27%";
    currentMethod.style.color = "rgb(45, 24, 54)";
    currentMethod.style.width = "29%";

    recipeName.style.position = "absolute";
    recipeName.style.top = "36%";
    recipeName.style.left = "30%";
    recipeName.style.color = "rgb(45, 24, 54)";
    recipeName.style.fontFamily = "Georgia, 'Times New Roman', Times, serif";

}


// show a recipe

document.getElementById("pancakes").addEventListener('click', showPanRecipe);

function showPanRecipe() {

    isRecipeShown = true;

    document.getElementById("currentRecipe").style.display = "block";
    document.getElementById("currentMethod").style.display = "block";
    document.getElementById("recipeName").style.display = "block";
    document.getElementById("recipeImage").style.display = "block";

    designRecipe();

    document.getElementById("recipeName").innerHTML = "<h2>Pancakes</h2>";

    document.getElementById("currentRecipe").innerHTML = "<h5><strong>Ingredients</strong></h5> <h6>- 2 tc flour</h6> <h6>- 1 tc water</h6> <h6>- 2 tc milk</h6> <h6>- 2 eggs</h6> <h6>- 1/2 ts salt</h6> <h6>- 1 tbls sugar</h6> <h6>- 1 tbls butter</h6>";

    document.getElementById("currentMethod").innerHTML = "<h5><strong>Method</strong></h5> <h6>First you need to beat the eggs and sugar. It is best to do this with a mixer but if you do not have a mixer at hand, it is not a problem to beat the ingredients with a fork. Add the water to the beaten eggs and sugar, and then little by little the flour. Finally, add the milk and salt and mix well again. <br /> <br /> When frying the pancakes, it is best to have a flat pan especially made for pancekes. The special thing about this pan is that it turns the pancakes much easier and the mixture is distributed more evenly. Heat it and brush it with a lump of the butter. You can also use oil, but in this case your pancakes will not become so fragrant.</h6>";

    var img = document.createElement("img");
    img.src = "pancakes.jpeg";
    var src = document.getElementById("recipeImage");
    src.appendChild(img);

    img.style.position = "absolute";
    img.style.width = "300px";
    img.style.height = "200px";
    img.style.top = "13%";
    img.style.left = "39%";
    img.style.borderStyle = "solid";
    img.style.borderRadius = "25px";
    img.style.color = "rgb(80, 39, 96)";

    document.getElementById("collapseExample").style.display = "none";

}



document.getElementById("blueMuffins").addEventListener('click', showMuffRecipe);

function showMuffRecipe() {

    isRecipeShown = true;

    document.getElementById("currentRecipe").style.display = "block";
    document.getElementById("currentMethod").style.display = "block";
    document.getElementById("recipeName").style.display = "block";
    document.getElementById("recipeImage").style.display = "block";

    designRecipe();

    document.getElementById("recipeName").innerHTML = "<h2>Blueberry Muffins</h2>";

    document.getElementById("currentRecipe").innerHTML = "<h5><strong>Ingredients</strong></h5> <h6>- 1 egg</h6> <h6>- 1/2 tc cooking oil</h6> <h6>- 1 tc sugar</h6> <h6>- 1 tc yoghurt</h6> <h6>- 1/2 ts baking soda</h6> <h6>- 2 tc flour</h6> <h6>- 1 tc blueberries</h6> <h6>- 1 ts vanilla</h6>";

    document.getElementById("currentMethod").innerHTML = "<h5><strong>Method</strong></h5> <h6>Beat the egg with the sugar, oil, yogurt with the baking soda and vanilla. Gradually add the flour and mix until smooth. Finally, mix the mixture carefully with the blueberries. </br > Preheat the oven to 180 degrees and prepare about 12 muffin tins. Fill them with the mixture, but do not fill them to the top. Bake the blueberry muffins for about 20 minutes.</h6>";

    var img = document.createElement("img");
    img.src = "blueberryMuffins.jpeg";
    var src = document.getElementById("recipeImage");
    src.appendChild(img);

    img.style.position = "absolute";
    img.style.width = "300px";
    img.style.height = "200px";
    img.style.top = "13%";
    img.style.left = "39%";
    img.style.borderStyle = "solid";
    img.style.borderRadius = "25px";
    img.style.color = "rgb(80, 39, 96)";

    document.getElementById("collapseExample").style.display = "none";
}



document.getElementById("lemonCake").addEventListener('click', showCakeRecipe);

function showCakeRecipe() {

    isRecipeShown = true;

    document.getElementById("currentRecipe").style.display = "block";
    document.getElementById("currentMethod").style.display = "block";
    document.getElementById("recipeName").style.display = "block";
    document.getElementById("recipeImage").style.display = "block";

    designRecipe();

    document.getElementById("recipeName").innerHTML = "<h2>Lemon Cake</h2>";

    document.getElementById("currentRecipe").innerHTML = "<h5><strong>Ingredients</strong></h5> <h6>- 2 tc flour</h6> <h6>- 1/2 tc butter</h6> <h6>- 1 ts baking powder</h6> <h6>- 1 lemon</h6> <h6>- 4 eggs</h6> <h6>- 1 1/2 tc powdered sugar</h6>";

    document.getElementById("currentMethod").innerHTML = "<h5><strong>Method</strong></h5> <h6>The first step of the recipe is that all products must be at room temperature. Using a mixer, beat the butter and sugar well, then add the juice of 1/2 lemon. Add the eggs, beating thoroughly. </br > Sift the flour together with the baking powder and add them to the liquid mixture. Add the grated lemon peel and mix. Grease a cake tin with oil or butter, then pour the lemon cake mixture and bake in a preheated 180 degree oven and bake for about 25 minutes. </br > While the cake cools, prepare the glaze by beating the lemon juice and powdered sugar very well until a white homogeneous mixture is obtained. Pour the frosting over the cooled cake and sprinkle with grated lemon peel.</h6>";

    var img = document.createElement("img");
    img.src = "lemonCake.jpeg";
    var src = document.getElementById("recipeImage");
    src.appendChild(img);

    img.style.position = "absolute";
    img.style.width = "300px";
    img.style.height = "200px";
    img.style.top = "13%";
    img.style.left = "39%";
    img.style.borderStyle = "solid";
    img.style.borderRadius = "25px";
    img.style.color = "rgb(80, 39, 96)";
    document.getElementById("collapseExample").style.display = "none";
}



document.getElementById("chocolateCookies").addEventListener('click', showCookiesRecipe);

function showCookiesRecipe() {

    isRecipeShown = true;

    document.getElementById("currentRecipe").style.display = "block";
    document.getElementById("currentMethod").style.display = "block";
    document.getElementById("recipeName").style.display = "block";
    document.getElementById("recipeImage").style.display = "block";

    designRecipe();

    document.getElementById("recipeName").innerHTML = "<h2>Chocolate Cookies</h2>";

    document.getElementById("currentRecipe").innerHTML = "<h5><strong>Ingredients</strong></h5> <h6>- 1/2 tc cocoa</h6> <h6>- 1 tc flour</h6> <h6>- 1 tc sugar</h6> <h6>- 1 egg</h6> <h6>- 125g butter</h6> <h6>- 1 ts baking soda</h6> <h6>- 2 tbls milk</h6> <h6>- 2 vanillas</h6> <h6>- 100g chocolate</h6>";

    document.getElementById("currentMethod").innerHTML = "<h5><strong>Method</strong></h5> <h6>All the products have been taken out of the refrigerator beforehand and are at room temperature. Beat the softened butter with the sugar using a mixer or a fork, then add the egg, vanilla and the milk. </br > Add to the liquid mixture the flour together with the cocoa, baking soda and salt. Then, add the subtly chopped chocolate. After adding the chocolate, store the dough for a minimum of 2 hours in the refrigerator to set. </br > After the chocolate dough has hardened, line a tray with baking paper and arrange the small balls formed from the dough on it. Keep in mind that chocolate chip cookies increase in size when baking, so leave a space between them.</h6>";
    

    var img = document.createElement("img");
    img.src = "chocolateCookies.jpeg";
    var src = document.getElementById("recipeImage");
    src.appendChild(img);

    img.style.position = "absolute";
    img.style.width = "300px";
    img.style.height = "200px";
    img.style.top = "13%";
    img.style.left = "39%";
    img.style.borderStyle = "solid";
    img.style.borderRadius = "25px";
    img.style.color = "rgb(80, 39, 96)";
    document.getElementById("collapseExample").style.display = "none";
}



document.getElementById("savoryMuffins").addEventListener('click', showSavMuffRecipe);

function showSavMuffRecipe() {

    isRecipeShown = true;

    document.getElementById("currentRecipe").style.display = "block";
    document.getElementById("currentMethod").style.display = "block";
    document.getElementById("recipeName").style.display = "block";
    document.getElementById("recipeImage").style.display = "block";

    designRecipe();

    document.getElementById("recipeName").innerHTML = "<h2>Savory Muffins</h2>";

    document.getElementById("currentRecipe").innerHTML = "<h5><strong>Ingredients</strong></h5> <h6>- 2 eggs</h6> <h6>- 1/2 tc cooking oil</h6> <h6>- 1 ts baking soda</h6> <h6>- 1/2 ts rosemary</h6> <h6>- 1/2 ts cumin</h6> <h6>- 2 tc flour</h6> <h6>- 1 1/2 tc yoghurt</h6> <h6>- 1 tc cheese</h6> <h6>- 1/2 ts basil</h6>";

    document.getElementById("currentMethod").innerHTML = "<h5><strong>Method</strong></h5> <h6>Beat the eggs, milk, oil and baking soda in a bowl. </br >Sift the flour and add it to the resulting mixture. Finally, add the crumbled cheese and the spices and mix well. You can add and / or a handful of pitted olives cut into very small pieces. Olives add a very pleasant flavor to savory muffins. </br >Place a paper basket in each slot of the muffin tin. Pour the mixture into each basket, not filling to the top, but until reaching approximately ¾ of its volume. Bake in an oven preheated to 180-200 degrees for about 20-25 minutes.</h6>";

    var img = document.createElement("img");
    img.src = "savoryMuffins.jpeg";
    var src = document.getElementById("recipeImage");
    src.appendChild(img);

    img.style.position = "absolute";
    img.style.width = "300px";
    img.style.height = "200px";
    img.style.top = "13%";
    img.style.left = "39%";
    img.style.borderStyle = "solid";
    img.style.borderRadius = "25px";
    img.style.color = "rgb(80, 39, 96)";

    document.getElementById("collapseExample").style.display = "none";
}



document.getElementById("benedictEggs").addEventListener('click', showEggRecipe);

function showEggRecipe() {

    isRecipeShown = true;

    document.getElementById("currentRecipe").style.display = "block";
    document.getElementById("currentMethod").style.display = "block";
    document.getElementById("recipeName").style.display = "block";
    document.getElementById("recipeImage").style.display = "block";

    designRecipe();

    document.getElementById("recipeName").innerHTML = "<h2>Eggs Benedict</h2>";

    document.getElementById("currentRecipe").innerHTML = "<h5><strong>Ingredients</strong></h5> <h6>- 2 slices of bread</h6> <h6>- 4 eggs</h6> <h6>- 8 slices of bacon</h6> <h6>- 1/2 bunch of parsley</h6> </br > <h6><strong>Hollandaise Sauce</strong></h6> <h6>- 2 egg yolks</h6> <h6>- 80g butter</h6> <h6>- 1 tbls lemon juice</h6> <h6>- 1/4 ts white pepper</h6>";

    document.getElementById("currentMethod").innerHTML = "<h5><strong>Method</strong></h5> <h6>The first step in the recipe is to make the hollandaise sauce. Beat the yolks in a water bath, then add to them 1 tablespoon of lukewarm water, lemon juice, 1/2 teaspoon of salt and white pepper and mix, finally adding the butter. Stir until you get a smooth sauce.</br > Place the pieces of bacon in a hot pan and fry them until they get a light crispy tan. Cut the slices of bread in half and bake them briefly in the same pan.</br > Eggs Benedict are made with poached eggs. To poach the eggs, boil water and add 1 tablespoon of vinegar. After it boils, stir with a spoon to create a \"whirlpool\" in the pot and drop the eggs into it one by one. Boil for 2-3 minutes and remove them with a slotted spoon. The goal is to keep the eggs soft, so be careful not to overcook them. </br > You \"assemble\" the eggs benedict by placing toasted bacon on each half of the bread, a poached egg </br > on top of it and finally pouring hollandaise </br > sauce over them.</h6>";

    var img = document.createElement("img");
    img.src = "eggsBenedict.jpeg";
    var src = document.getElementById("recipeImage");
    src.appendChild(img);

    img.style.position = "absolute";
    img.style.width = "300px";
    img.style.height = "200px";
    img.style.top = "13%";
    img.style.left = "39%";
    img.style.borderStyle = "solid";
    img.style.borderRadius = "25px";
    img.style.color = "rgb(80, 39, 96)";

    document.getElementById("collapseExample").style.display = "none";
}



document.getElementById("chickenRice").addEventListener('click', showRiceRecipe);

function showRiceRecipe() {

    isRecipeShown = true;

    document.getElementById("currentRecipe").style.display = "block";
    document.getElementById("currentMethod").style.display = "block";
    document.getElementById("recipeName").style.display = "block";
    document.getElementById("recipeImage").style.display = "block";

    designRecipe();

    document.getElementById("recipeName").innerHTML = "<h2>Chicken with Rice</h2>";

    document.getElementById("currentRecipe").innerHTML = "<h5><strong>Ingredients</strong></h5> <h6>- 6 chicken drumsticks</h6> <h6>- 1 carrot</h6> <h6>- 5 tbls cooking oil</h6> <h6>- 1 tc rice</h6> <h6>- 1 onion</h6> <h6>- a little bit of black pepper</h6>";

    document.getElementById("currentMethod").innerHTML = "<h5><strong>Method</strong></h5> <h6>Peel the onion and cut it into small pieces. You clean the carrots and them too. Heat 3-4 tablespoons of oil in a deep frying pan, add the chopped vegetables and stew them for about 4-5 minutes until they soften. Then you add the washed rice and stir for a few minutes until the rice becomes transparent. Add a teaspoon of salt and 1/2 teaspoon of black pepper and mix. </br > While preparing the rice, you should also prepare the chicken. You can boil the chicken meat only in salted water, but it is better to add a piece of celery, carrot, onion and parsley to the water. This way you will also prepare a broth that you can add to the rice while baking in the oven. Boil the chicken for about 15 minutes. </br > Pour the rice into a pan, spread the chicken on it </br > and add 3 teaspoons of the broth. Roast the </br > chicken with rice in an oven preheated to 180 </br > degrees for about an hour, until the water </br > boils and the rice is cooked.</h6>";

    var img = document.createElement("img");
    img.src = "chickenRice.jpeg";
    var src = document.getElementById("recipeImage");
    src.appendChild(img);

    img.style.position = "absolute";
    img.style.width = "300px";
    img.style.height = "200px";
    img.style.top = "13%";
    img.style.left = "39%";
    img.style.borderStyle = "solid";
    img.style.borderRadius = "25px";
    img.style.color = "rgb(80, 39, 96)";

    document.getElementById("collapseExample").style.display = "none";
}



document.getElementById("tomatoSoup").addEventListener('click', showSoupRecipe);

function showSoupRecipe() {

    isRecipeShown = true;

    document.getElementById("currentRecipe").style.display = "block";
    document.getElementById("currentMethod").style.display = "block";
    document.getElementById("recipeName").style.display = "block";
    document.getElementById("recipeImage").style.display = "block";

    designRecipe();

    document.getElementById("recipeName").innerHTML = "<h2>Tomato Soup</h2>";

    document.getElementById("currentRecipe").innerHTML = "<h5><strong>Ingredients</strong></h5> <h6>- 500g tomatoes</h6> <h6>- 1 onion</h6> <h6>- 1 ts sugar</h6> <h6>- 1/2 ts basil</h6> <h6>- 2 tbls butter</h6> <h6>- 4 red peppers</h6> <h6>- 2 cloves of garlic</h6> <h6>- 1 ts paprica</h6> <h6>- 2 tbls cooking oil</h6> <h6>- 1 tbls flour</h6>";

    document.getElementById("currentMethod").innerHTML = "<h5><strong>Method</strong></h5> <h6>The first step of the recipe is to prepare the peppers. If using raw peppers, roast and peel them. Clean and finely chop the onion and garlic, and chop the tomatoes. </br > Fry the garlic and onion in the oil for a minute or two until softened. Add the chopped tomatoes to the mixture, and after it boils again, add the cleaned and chopped roasted peppers, sugar, basil, red pepper, 1 teaspoon of salt and about 1 liter of water. Boil the tomato soup for about 10-15 minutes, then puree using a blender. </br > Heat the butter in a pan, then briefly fry the flour. Add 1-2 ladlefuls of the soup to the fried flour, mix well and return to the soup. Then return the mixture back to the soup, return the pot to the heat to boil again for a minute or two.</h6>";

    var img = document.createElement("img");
    img.src = "tomatoSoup.jpeg";
    var src = document.getElementById("recipeImage");
    src.appendChild(img);

    img.style.position = "absolute";
    img.style.width = "300px";
    img.style.height = "200px";
    img.style.top = "13%";
    img.style.left = "39%";
    img.style.borderStyle = "solid";
    img.style.borderRadius = "25px";
    img.style.color = "rgb(80, 39, 96)";

    document.getElementById("collapseExample").style.display = "none";
}



document.getElementById("musaka").addEventListener('click', showMusakaRecipe);

function showMusakaRecipe() {

    isRecipeShown = true;

    document.getElementById("currentRecipe").style.display = "block";
    document.getElementById("currentMethod").style.display = "block";
    document.getElementById("recipeName").style.display = "block";
    document.getElementById("recipeImage").style.display = "block";

    designRecipe();

    document.getElementById("recipeName").innerHTML = "<h2>Musaka</h2>";

    document.getElementById("currentRecipe").innerHTML = "<h5><strong>Ingredients</strong></h5> <h6>- 500g minced meat</h6> <h6>- 2 onions</h6> <h6>- 400g youghurt</h6> <h6>- 100g yellow cheese</h6> <h6>- 1/2 tc cooking oil</h6> <h6>- 1 ts savory</h6> <h6>- 1kg potatoes</h6> <h6>- 2 tomatoes</h6> <h6>- 2 eggs</h6> <h6>- 5 tbls flour</h6> <h6>- 1 ts paprica</h6>";

    document.getElementById("currentMethod").innerHTML = "<h5><strong>Method</strong></h5> <h6>Heat the cooking oil in a deep pan or pot. Saute the washed, cleaned and finely chopped onion in the heated oil until soft. Add the chopped tomatoes, minced meat, black pepper and savory, as well as a teaspoon of salt. </br > After the water from the tomatoes boils, add the red pepper. Wash, clean, peel and cut the potatoes into small cubes and add them to the meat. Grease a pan on the bottom of which you place the other half of the tomatoes and pour the moussaka mixture over them. You add an incomplete teacup of hot water and place in a preheated oven at 200 degrees. Bake until the water boils and the potatoes turn golden. </br > The topping is easy and very quick. Mix the yogurt and eggs, then add the flour until you get a smooth mixture. Finally, you add finely grated cheese. Pour over the musaka and bake.</h6>";

    var img = document.createElement("img");
    img.src = "musaka.jpeg";
    var src = document.getElementById("recipeImage");
    src.appendChild(img);

    img.style.position = "absolute";
    img.style.width = "300px";
    img.style.height = "200px";
    img.style.top = "13%";
    img.style.left = "39%";
    img.style.borderStyle = "solid";
    img.style.borderRadius = "25px";
    img.style.color = "rgb(80, 39, 96)";

    document.getElementById("collapseExample").style.display = "none";
}



document.getElementById("peppersRice").addEventListener('click', showPeppersRecipe);

function showPeppersRecipe() {

    isRecipeShown = true;

    document.getElementById("currentRecipe").style.display = "block";
    document.getElementById("currentMethod").style.display = "block";
    document.getElementById("recipeName").style.display = "block";
    document.getElementById("recipeImage").style.display = "block";

    designRecipe();

    document.getElementById("recipeName").innerHTML = "<h2>Stuffed Peppers with Rice</h2>";

    document.getElementById("currentRecipe").innerHTML = "<h5><strong>Ingredients</strong></h5> <h6>- 500g minced meat</h6> <h6>- 1/2 tc cooking oil</h6> <h6>- 3 tomatoes</h6> <h6>- 1 ts paprica</h6> <h6>- 1/2 ts black papper</h6> <h6>- 1 tc rice</h6> <h6>- 2 onions</h6> <h6>- around 12 peppers</h6> <h6>- 1/2 parsley</h6>";

    document.getElementById("currentMethod").innerHTML = "<h5><strong>Method</strong></h5> <h6>First, wash and deseed the peppers, finely chop the onion, wash and drain the rice. Pour the oil into a deep pan or pot, and once it is hot, add the onion, and after a while, the rice, and fry for 3-4 minutes. Add the red pepper and 2 grated tomatoes, as well as 1 coffee cup of water. After the rice has absorbed the liquid, add the minced meat, stirring thoroughly so that the minced meat does not become lumpy. Add the black pepper, 1 teaspoon of salt and the finely chopped parsley, stir and remove the mixture from the heat. </br > Stuff the peppers with the mixture, covering each pepper with a slice of tomato and arrange them in a tray. You add 1 tea cup of water and put them to bake in a preheated 200 degree oven. Bake for about an hour until the peppers are browned.</h6>";

    var img = document.createElement("img");
    img.src = "peppersWithRice.jpeg";
    var src = document.getElementById("recipeImage");
    src.appendChild(img);

    img.style.position = "absolute";
    img.style.width = "300px";
    img.style.height = "200px";
    img.style.top = "13%";
    img.style.left = "39%";
    img.style.borderStyle = "solid";
    img.style.borderRadius = "25px";
    img.style.color = "rgb(80, 39, 96)";

    document.getElementById("collapseExample").style.display = "none";
}



document.getElementById("risotto").addEventListener('click', showRisottoRecipe);

function showRisottoRecipe() {

    isRecipeShown = true;

    document.getElementById("currentRecipe").style.display = "block";
    document.getElementById("currentMethod").style.display = "block";
    document.getElementById("recipeName").style.display = "block";
    document.getElementById("recipeImage").style.display = "block";

    designRecipe();

    document.getElementById("recipeName").innerHTML = "<h2>Risotto with Chicken</h2>";

    document.getElementById("currentRecipe").innerHTML = "<h5><strong>Ingredients</strong></h5> <h6>- 1 tc rice (Arborio)</h6> <h6>- 4 cloves of garlic</h6> <h6>- 4 tbls butter</h6> <h6>- 1/2 tc white wine</h6> <h6>- 30g parmesan</h6> <h6>- 2 onions</h6> <h6>- 400g chicken meat</h6> <h6>- 3 tc broth</h6> <h6>- 1 ts thyme</h6>";

    document.getElementById("currentMethod").innerHTML = "<h5><strong>Method</strong></h5> <h6>First, we prepare the broth. You can use a whole chicken to get a delicious rich broth. You wash the chicken and boil it until fully cooked, then debone and strain the broth.</br > In a deep pan, heat the butter, adding to it the cleaned and finely chopped onion and garlic, and after 4-5 minutes, add the rice and stir continuously with a wooden spoon. Arborio rice is used to make the risotto, but you can use another rice variety. Add the thyme as well as about 1 teaspoon of salt and mix well. </br > Little by little you need to add the liquid. First, one teaspoon of the broth, stirring constantly. After the rice has absorbed the liquid, add another cup. After it reabsorbs the chicken broth, add the wine a little at a time. After that, add the rest of the broth little by little. The rice should not be boiled, but should remain firm with a firm core, al dente. Add the chicken and stir for another 2-3 minutes.</h6>";

    var img = document.createElement("img");
    img.src = "risotto.jpeg";
    var src = document.getElementById("recipeImage");
    src.appendChild(img);

    img.style.position = "absolute";
    img.style.width = "300px";
    img.style.height = "200px";
    img.style.top = "13%";
    img.style.left = "39%";
    img.style.borderStyle = "solid";
    img.style.borderRadius = "25px";
    img.style.color = "rgb(80, 39, 96)";

    document.getElementById("collapseExample").style.display = "none";
}



document.getElementById("spaghetti").addEventListener('click', showSpaghettiRecipe);

function showSpaghettiRecipe() {

    isRecipeShown = true;

    document.getElementById("currentRecipe").style.display = "block";
    document.getElementById("currentMethod").style.display = "block";
    document.getElementById("recipeName").style.display = "block";
    document.getElementById("recipeImage").style.display = "block";

    designRecipe();

    document.getElementById("recipeName").innerHTML = "<h2>Spaghetti Bolonese</h2>";

    document.getElementById("currentRecipe").innerHTML = "<h5><strong>Ingredients</strong></h5> <h6>- 250g minced meat</h6> <h6>- 200g spaghetti</h6> <h6>- 100ml tomato paste</h6> <h6>- 1/2 tc red wine</h6> <h6>- 1 carrot</h6> <h6>- 3 tbls olive oil</h6> <h6>- salt and pepper</h6> <h6>- parmesan for topping</h6>";

    document.getElementById("currentMethod").innerHTML = "<h5><strong>Method</strong></h5> <h6>Fry the carrot and the minced meat in a deep pan. Add the tomato paste and the red wine and let the sauce simmer for 10 minutes on low heat. Season with the spices, cook for another 2 minutes and then remove from the heat. Boil the spaghetti, pour the sauce over them, sprinkle with parmesan or cheese and serve.</h6>";

    var img = document.createElement("img");
    img.src = "spaghetti.jpeg";
    var src = document.getElementById("recipeImage");
    src.appendChild(img);

    img.style.position = "absolute";
    img.style.width = "300px";
    img.style.height = "200px";
    img.style.top = "13%";
    img.style.left = "39%";
    img.style.borderStyle = "solid";
    img.style.borderRadius = "25px";
    img.style.color = "rgb(80, 39, 96)";

    document.getElementById("collapseExample").style.display = "none";
}



document.getElementById("chickenPotatoes").addEventListener('click', showPotatoesRecipe);

function showPotatoesRecipe() {

    isRecipeShown = true;

    document.getElementById("currentRecipe").style.display = "block";
    document.getElementById("currentMethod").style.display = "block";
    document.getElementById("recipeName").style.display = "block";
    document.getElementById("recipeImage").style.display = "block";

    designRecipe();

    document.getElementById("recipeName").innerHTML = "<h2>Chicken with Potatoes</h2>";

    document.getElementById("currentRecipe").innerHTML = "<h5><strong>Ingredients</strong></h5> <h6>- 1kg whole chicken</h6> <h6>- 3 tbls butter</h6> <h6>- 1/2 tc beer</h6> <h6>- 1kg potatoes</h6> <h6>- 4 cloves of garlic</h6> <h6>- 1 ts thyme</h6>";

    document.getElementById("currentMethod").innerHTML = "<h5><strong>Method</strong></h5> <h6>The first step of the recipe is to prepare the potatoes. Wash the potatoes, peel them and cut them into large pieces. You pour the potatoes into a large tray and salt them with about 1/2 teaspoon of salt, sprinkle with thyme, chop 1-2 cloves of garlic and mix them well by hand so that all the potatoes are flavored. Spread 2/3 of the butter on them, cutting it into small pieces. </br > You wash the chicken well, then brush it with butter. You pour salt and thyme into your hand and rub it all over the chicken. Put a piece of butter and 1-2 chopped garlic cloves in the chicken. </br > Place the seasoned chicken on top of the potatoes, pour in 1/2 cup of beer and one cup of water. You cover the entire tray with aluminum foil and bake the chicken with potatoes in a preheated 180-degree oven for an hour or a little more, depending on the </br > size of the chicken. After one portion has passed, remove the foil and let the dish bake without </br > foil for about 10-20 minutes until it </br > acquires golden color.</h6>";

    var img = document.createElement("img");
    img.src = "chickenPotatoes.jpeg";
    var src = document.getElementById("recipeImage");
    src.appendChild(img);

    img.style.position = "absolute";
    img.style.width = "300px";
    img.style.height = "200px";
    img.style.top = "13%";
    img.style.left = "39%";
    img.style.borderStyle = "solid";
    img.style.borderRadius = "25px";
    img.style.color = "rgb(80, 39, 96)";

    document.getElementById("collapseExample").style.display = "none";
}



document.getElementById("meatLoaf").addEventListener('click', showLoafRecipe);

function showLoafRecipe() {

    isRecipeShown = true;

    document.getElementById("currentRecipe").style.display = "block";
    document.getElementById("currentMethod").style.display = "block";
    document.getElementById("recipeName").style.display = "block";
    document.getElementById("recipeImage").style.display = "block";

    designRecipe();

    document.getElementById("recipeName").innerHTML = "<h2>Meat Loaf</h2>";

    document.getElementById("currentRecipe").innerHTML = "<h5><strong>Ingredients</strong></h5> <h6>- 1kg minced meat</h6> <h6>- 2 slices of bread</h6> <h6>- 3 carrots</h6> <h6>- 1 ts savory</h6> <h6>- 1 ts salt</h6> <h6>- 4 eggs</h6>  <h6>- 2 onions</h6> <h6>- 3 pickles</h6> <h6>- 1/2 ts cumin</h6> <h6>- 1/2 bunch of parsley</h6>";

    document.getElementById("currentMethod").innerHTML = "<h5><strong>Method</strong></h5> <h6> Boil the carrots for about 10 minutes and separately, two of the eggs. In the meantime place the minced meat in a large bowl. Add the salt and spices, as well as the two raw eggs. Soak the bread in water, crush it and add it to the minced meat. Grate the onion, chop the parsley and add them to the bowl. Start mixing with your hands. Knead thoroughly to distribute all ingredients evenly. Leave the minced meat aside. </ br> Cut the cooked carrots and the pickles into strips. Peel the eggs and cut them. Spread the minced meat on a towel. The minced meat should be spread out in a rectangular shape with a thickness of about 1cm and an approximate width close to that of the tray in which you will roast the loaf. In the upper part of the minced meat, arrange a row of carrots, a row of pickles and finally, a row of the boiled eggs. Then, grab the towel at the top edge, where the vegetables are arranged and roll it down. Roll the entire loaf. Finally, press both ends of the roll to 'seal' the loaf so that the filling doesn't come out during roasting. </br > For the roasting, you need a large tray. It is best to use the oven trays, as the meat loaf is quite long. Place baking paper on the tray and place the loaf on it. Bake it in an oven preheated to 180 degrees for about 40-45 minutes.</h6>";

    var img = document.createElement("img");
    img.src = "meatLoaf.jpeg";
    var src = document.getElementById("recipeImage");
    src.appendChild(img);

    img.style.position = "absolute";
    img.style.width = "300px";
    img.style.height = "200px";
    img.style.top = "13%";
    img.style.left = "39%";
    img.style.borderStyle = "solid";
    img.style.borderRadius = "25px";
    img.style.color = "rgb(80, 39, 96)";

    document.getElementById("collapseExample").style.display = "none";
}



document.getElementById("beef").addEventListener('click', showBeefRecipe);

function showBeefRecipe() {

    isRecipeShown = true;

    document.getElementById("currentRecipe").style.display = "block";
    document.getElementById("currentMethod").style.display = "block";
    document.getElementById("recipeName").style.display = "block";
    document.getElementById("recipeImage").style.display = "block";

    designRecipe();

    document.getElementById("recipeName").innerHTML = "<h2>Beef with Peas</h2>";

    document.getElementById("currentRecipe").innerHTML = "<h5><strong>Ingredients</strong></h5> <h6>- 500g beef</h6> <h6>- 2 onions</h6> <h6>- 3 tomatoes</h6> <h6>- 1 ts paprica</h6> <h6>- 1 ts salt</h6> <h6>- 800g peas</h6> <h6>- 2 carrots</h6>  <h6>- 1/2 tc cooking oil</h6>";

    document.getElementById("currentMethod").innerHTML = "<h5><strong>Method</strong></h5> <h6> The first step of the recipe is to prepare the beef. Wash it and cut it into large cubes. Clean and finely chop the onion, then heat the cooking oil in a pot, add the onion and the meat and fry for about 3-4 minutes, then add water to cover the meat well and let it simmer on a low heat for about an hour until it is cooked. Stir from time to time and make sure that the meat does not run out of water, if necessary add more. </br > Clean the carrots, chop them finely and add them to the beef. Now comes the time to add the peas. Then add the red pepper and 1 teaspoon of salt, add the cleaned and finely chopped tomatoes, and let the dish boil over low heat. After about 5-10 minutes, the beef with peas will be ready.</h6>";

    var img = document.createElement("img");
    img.src = "beef.jpeg";
    var src = document.getElementById("recipeImage");
    src.appendChild(img);

    img.style.position = "absolute";
    img.style.width = "300px";
    img.style.height = "200px";
    img.style.top = "13%";
    img.style.left = "39%";
    img.style.borderStyle = "solid";
    img.style.borderRadius = "25px";
    img.style.color = "rgb(80, 39, 96)";

    document.getElementById("collapseExample").style.display = "none";
}