import express from "express"
import dotenv from "dotenv"
import mustache from "mustache-express"
import path from "path"

import MainRoutes from "./routes"
import { Server } from "http"

//Initialize DOTENV
dotenv.config()

//Initialize express
const app = express()

//Set view engine
app.set("view engine", "mustache")
app.set("views", path.join(__dirname, "views"))
app.engine("mustache", mustache())

//Set public folder
app.use(express.static(path.join(__dirname, "../public")))

//Routes
app.use(MainRoutes)

//404
app.use((req, res) => {
  res.render("pages/404")
})

//Start server
app.listen(process.env.PORT || 3000)
console.log("\n" + "Server running" + "\n")
