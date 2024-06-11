const express = require("express");
const cors = require("cors");

const app = express();
const port = 3000;

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(cors());

const testRoutes = require("./routes/testRoutes");

app.use("/", testRoutes);

const connectionMongoDB = require("./connectionMongoDB");
connectionMongoDB();

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
