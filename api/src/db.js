require("dotenv").config();
const { Sequelize } = require("sequelize");
const fs = require("fs");
const path = require("path");
// const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;
const { PG_USER, PG_PASSWORD, PG_HOST, PG_PORT, PG_DATABASE } = process.env;

// const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/storydots`, {
//   logging: false,
//   native: false,
// });

const sequelize =
  process.env.NODE_ENV === "production"
    ? new Sequelize({
        database: PG_DATABASE,
        dialect: "postgres",
        host: PG_HOST,
        port: PG_PORT,
        username: PG_USER,
        password: PG_PASSWORD,
        pool: {
          max: 3,
          min: 1,
          idle: 10000,
        },
        dialectOptions: {
          ssl: {
            require: true,
            rejectUnauthorized: false,
          },
          keepAlive: true,
        },
        ssl: true,
      })
    : new Sequelize(
        `postgres:${PG_USER}:${PG_PASSWORD}@${PG_HOST}/${PG_DATABASE}`,
        { logging: false, native: false }
      );

const basename = path.basename(__filename);

const modelDefiners = [];

fs.readdirSync(path.join(__dirname, "/models"))
  .filter(
    (file) =>
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
  )
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, "/models", file)));
  });

modelDefiners.forEach((model) => model(sequelize));

let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [
  entry[0][0].toUpperCase() + entry[0].slice(1),
  entry[1],
]);
sequelize.models = Object.fromEntries(capsEntries);

const { Brand, Product } = sequelize.models;

Brand.hasMany(Product);
Product.belongsTo(Brand);

const data = require("./data/data.js");

async function loadData() {
  const { brandsJson, productsJson } = data;

  await Promise.all(
    brandsJson.map(async (brand) => {
      const { name, logo_url } = brand;
      await Brand.create({ name, logo_url });
    })
  );

  await Promise.all(
    productsJson.map(async (product) => {
      const { name, description, image_url, price, BrandId } = product;
      await Product.create({ name, description, image_url, price, BrandId });
    })
  );
}

module.exports = {
  ...sequelize.models,
  conn: sequelize,
  loadData,
};
