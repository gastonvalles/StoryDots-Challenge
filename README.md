# StoryDots Full Stack Challenge

![storydots logo](./client/src/components/images/storydots-no-bg.png)

## Project Objectives

- Build a REST API with Node.js that can perform CRUD operations.
- Build a frontend that shows the products and brands exposed by the API.
- Build a database to relate models of Brands and Products.

## Database

The database models must have the following entities:

- [ ] Product:
  -id
  -name
  -description
  -image_url
  -price
<br></br>
- [ ] Brand:
  -id
  -name
  -logo_url
The relationship between both entities must be one-to-many, where a record from the Brand table can be related to several records from the Product table, but a record from the Product table can only be related to one. record in the Brand table. In this case, a Brand can have many products,
but each product can only belong to one Brand.

## Backend

A REST API must be developed using Node/Express with the following paths:

- [ ] **GET /products**:
  - You must bring all the products previously loaded in the database.
  - Obtain a list of products.
- [ ] **GET /products/{idProduct}**:
  -
Obtain the detail of a particular product.
  - Include the information of the brand to which it belongs.
- [ ] **GET /products?name="..."**:
  - Get the products that match the name passed as a query parameter (does not necessarily have to be an exact match)
- [ ] **POST /products**:
  -
Receives the data collected by body from the creation form.
  - Create a new product in the database, related to its respective brand.
- [ ] **PUT /products/{idProduct}**:
  - Possibility of modifying parameters of a product already saved in the database.
- [ ] **DELETE /products/{idProduct}**:
  -
Possibility of deleting a product already saved in the database.
<br></br>
- [ ] **GET /brands**:
  - You must bring all the brands previously loaded in the database.
  - Obtain a list of brands with their products.
- [ ] **GET /brands/{idBrand}**:
  - Obtain the detail of a particular brand.
  -
Include the information of the products of said brand.
- [ ] **GET /brands?name="..."**:
  - Get the marks that match the name passed as a query parameter (does not necessarily have to be an exact match)
- [ ] **POST /brands**:
  - Receives the data collected by body from the creation form.
  -
Create a new brand in the database, related to their respective products.
- [ ] **PUT /brands/{idBrand}**:
  - Possibility of modifying parameters of a mark already saved in the database.
- [ ] **DELETE /brands/{idBrand}**:
  - Possibility of deleting a mark already saved in the database.

## Front end
You must develop a React application that loads a list of products exposed by the REST API developed on the backend.
Pagination or infinite scroll is allowed. In addition, when clicking on a product, the user must be able to see a detail view of that product, either a modal in that same home page or a dedicated page for the product.
In the list of products, the image, the name, the price of the product and the name or logo of the brand to which it belongs must be shown. In the detail view, the description of the product and the name or logo of the brand must also be shown.
<br></br>

## Technologies used

-`React`
-`Redux`
-`Node.js`
-`Express`
-`Sequelize`
-`PostgreSQL`
