const express = require("express");
const cors = require("cors");

const app = express();
const port = 3000;

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(cors());

const testRoutes = require("./routes/testRoutes");
const authRoutes = require("./routes/authRoutes");
const protectedRoutes = require("./routes/protectedRoutes");

app.use("/", testRoutes);
app.use("/auth", authRoutes);
app.use("/protected", protectedRoutes);

const connectionMongoDB = require("./connectionMongoDB");
connectionMongoDB();

app.listen(port, () => console.log(`Port ${port} running..`));
