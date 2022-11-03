const router = require("express").Router();

const { adminValidate } = require("../middlewares/role.middleware");
const categoryServices = require("./categories.services");

router
	.route("/")
	.get(categoryServices.getAllCategories)
	.post(adminValidate, categoryServices.postCategory); //TODO hacerla protegida por administrador

router
	.route("/:id")
	.get(categoryServices.getCategoryById)
	.delete(adminValidate, categoryServices.deleteCategory); //TODO hacerla protegida por administrador

module.exports = router;
