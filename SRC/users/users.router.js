const router = require("express").Router();

const passport = require("passport");
const { adminValidate } = require("../middlewares/role.middleware");
const { getUserRecipes } = require("../recipes/recipes.services");
const userServices = require("./users.services");

//Middlewares
require("../middlewares/auth.midddleware")(passport);

router.get(
	"/",
	passport.authenticate("jwt", { session: false }),
	userServices.getAllUsers
);

router
	.route("/me")
	.get(passport.authenticate("jwt", { session: false }), userServices.getMyUser)
	.patch(
		passport.authenticate("jwt", { session: false }),
		userServices.patchMyUser
	)
	.delete(
		passport.authenticate("jwt", { session: false }),
		userServices.deleteMyUser
	);

// TODO Agregar la ruta para las recetas

router.get(
	"/me/my_recipes",
	passport.authenticate("jwt", { session: false }),
	getUserRecipes
);

router
	.route("/:id")
	.get(userServices.getUsersById)
	.patch(
		passport.authenticate("jwt", { session: false }),
		adminValidate,
		userServices.patchUser
	)
	.delete(
		passport.authenticate("jwt", { session: false }),
		adminValidate,
		userServices.deleteUser
	);

module.exports = router;
