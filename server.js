const { connectDB } = require("./connectDB/connectDB");
const express = require("express");
const cors = require("cors");
require("dotenv").config();

// Create an Express application
const app = express();

const corsOptions = {
  origin: "*", // Allow requests from your frontend
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  allowedHeaders: ["Content-Type", "Authorization"], // Specify allowed headers
  credentials: true, // Allow cookies if needed
};

app.use(cors(corsOptions));

const AllRoutes = require("./routes/index");

app.use("/api", AllRoutes);

app.get("/", (request, response) => {
  response.send("Parent-CHild Api is working .....111!");
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({
        success: false,
        message: 'Something went wrong. Please try again later.',
    });
});

connectDB();

// Set up server to listen on the specified port
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
