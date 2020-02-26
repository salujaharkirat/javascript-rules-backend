const express = require("express");
const app = express();
const dotenv = require("dotenv");
const cors = require('cors');


// const authRoute = require("./routes/auth");
// const listRoute = require("./routes/list");

const rulesRoute = require("./routes/rules");

dotenv.config();

// Import Database
const db = require("./models");


db.sequelize.sync()
  .then(() => console.log("database synced"))
  .catch((error) => console.log(error))



// Middleware
app.use(express.json());

//Cors
app.use(cors());

// Route Middleware
app.use("/api/v0/rules", rulesRoute);

app.listen(3000, () => console.log("Server Listening..."));