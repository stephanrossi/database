import { RequestHandler } from "express"

export const Home: RequestHandler = (req, res) => {
  res.send("Home")
}
export const Dogs: RequestHandler = (req, res) => {}
export const Cats: RequestHandler = (req, res) => {}
export const Fishes: RequestHandler = (req, res) => {}
