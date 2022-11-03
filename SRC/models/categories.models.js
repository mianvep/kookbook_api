const { DataTypes } = require("sequelize");
const db = require("../tools/database");

const Categories = db.define(
	"categories",
	{
		id: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			primaryKey: true,
			allowNull: false,
		},
		name: {
			type: DataTypes.STRING,
			allowNull: false,
			unique: true,
		},
	},
	{
		timestamps: false,
	}
);

module.exports = Categories;
