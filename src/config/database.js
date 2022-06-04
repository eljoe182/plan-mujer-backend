import { config } from "dotenv";
import Sequelize from "sequelize";

config({
  path: ".env",
});

// connection mysql
export const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: "mysql",
  dialectOptions: {
    ssl: {
      require: false,
    },
  },
});
