import { Model, DataTypes } from "sequelize";
import sequelize from "./db";

class Journey extends Model {
	public id!: number;
	public departure!: string;
	public destination!: string;
	public date!: Date;
	public seatsAvailable!: number;
	public price!: number;

	public readonly createdAt!: Date;
	public readonly updatedAt!: Date;
}

Journey.init(
	{
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
		},
		departure: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		destination: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		date: {
			type: DataTypes.DATE,
			allowNull: false,
			validate: {
				isDate: true,
				isAfter: new Date().toISOString(), // Pour s'assurer que la date est dans le futur
			},
		},
		seatsAvailable: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
		price: {
			type: DataTypes.FLOAT,
			allowNull: false,
		},
		time: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
	},
	{
		sequelize,
		tableName: "journey",
		modelName: "Journey",
	},
);

export default Journey;
