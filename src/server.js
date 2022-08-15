const express = require("express");

//! creating the app (express server)
const app = express();

//! declaring the port the server will run on
const PORT = process.env.PORT ?? 3001;

//! needed to handle JSON data being sent via POST/PUT/PATCH
app.use(express.json());

app.use(cookieParser());
app.use(passport.initialize());
//! Allowing static files like .html, .css etc to be given from the backend to the frontend
app.use(express.static(__dirname + "/build"));

//! Using the separate routes files in the server
// app.use("/api/favorites", favoritesRoutes);
// app.use("/api/users", userRoutes);

//! IF they make any request to a route not declared, send them the main react .html file
//! This makes sure the React Routing takes precedence
app.get("*", (req, res) => {
  return res.sendFile("/build/index.html", { root: __dirname + "/" });
});

app.listen(PORT, () => console.log("Server is up and running!"));