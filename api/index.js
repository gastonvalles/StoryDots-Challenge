const server = require("./src/app.js");
const { conn, loadData } = require("./src/db.js");

conn.sync({ force: false }).then(() => {
  loadData();
  server.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
  });
});
