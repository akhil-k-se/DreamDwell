const express = require('express');
const dbConnect = require("./Middlewares/db"); // Corrected the import case
const cors = require('cors');
const buyerController = require("./Controllers/buyerController");
const sellerController = require("./Controllers/sellerContoller.js"); // Corrected typo in controller import
const propertyRouter = require('./routes/properties.routes.js'); // Routes for property-related actions

const app = express();
const port = 1218; // Define the port

// Middleware
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public")); // Serve static files from the 'public' directory

// Database Connection
dbConnect();

// Routes
app.get("/", (req, res) => {
    console.log("Hello");
    res.send("Server is running");
});

app.post("/addBuyer", buyerController.addBuyer);
app.post("/addSeller", sellerController.addSeller);

app.post("/loginBuyer",buyerController.loginBuyer)

// Property Routes
app.use("/api", propertyRouter);

// Start Server
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});
