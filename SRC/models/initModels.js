const Categories = require("./categories.models");
const Ingredients = require("./ingredients.models");
const Instructions = require("./instructructions.models");
const Recipes = require("./recipes.models");
const RecipesIngredients = require("./recipes_ingredients.models");
const Types = require("./types.models");
const Users = require("./users.models");
const UsersIngredients = require("./users_ingredients.models");
const UsersRecipes = require("./users_recipes.models");

const initModels = () => {
	//Users 1:M Recipes
	Users.hasMany(Recipes);
	Recipes.belongsTo(Users);

	// Users 1:M UsersRecipes
	Users.hasMany(UsersRecipes);
	UsersRecipes.belongsTo(Users);

	// Users 1:M UsersIngredients
	Users.hasMany(UsersIngredients);
	UsersIngredients.belongsTo(Users);

	//Recipes 1:M UsersRecipes
	Recipes.hasMany(UsersRecipes);
	UsersRecipes.belongsTo(Recipes);

	//Recipes 1:M RecipesIngredients
	Recipes.hasMany(RecipesIngredients);
	RecipesIngredients.belongsTo(Recipes);

	//Recipes 1:M Instructions
	Recipes.hasMany(Instructions);
	Instructions.belongsTo(Recipes);

	// Ingredients 1:M UsersIngredients
	Ingredients.hasMany(UsersIngredients);
	UsersIngredients.belongsTo(Ingredients);

	// Ingredients 1:M RecipesIngredients
	Ingredients.hasMany(RecipesIngredients);
	RecipesIngredients.belongsTo(Ingredients);

	//Categories 1:M Recipes
	Categories.hasMany(Recipes);
	Recipes.belongsTo(Categories);

	// Types 1:M Ingredients
	Types.hasMany(Ingredients);
	Ingredients.belongsTo(Types);
};

module.exports = initModels;
