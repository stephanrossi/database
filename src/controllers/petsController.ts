import { RequestHandler } from "express"
import { createMenuObject } from "../helpers/createMenuObject"

import { Pet } from "../models/Pet"

export const Home: RequestHandler = (req, res) => {
  let list = Pet.getAll()

  res.render("pages/page", {
    list,
    menu: createMenuObject("all"),
    banner: {
      title: "Todos os animais",
      background: "allanimals.jpg",
    },
  })
}
export const Dogs: RequestHandler = (req, res) => {
  let list = Pet.getFromType("dog")

  res.render("pages/page", {
    list,
    menu: createMenuObject("dog"),
    banner: {
      title: "Todos os cachorros",
      background: "banner_dog.jpg",
    },
  })
}
export const Cats: RequestHandler = (req, res) => {
  let list = Pet.getFromType("cat")

  res.render("pages/page", {
    list,
    menu: createMenuObject("cat"),
    banner: {
      title: "Todos os gatos",
      background: "banner_cat.jpg",
    },
  })
}
export const Fishes: RequestHandler = (req, res) => {
  let list = Pet.getFromType("fish")

  res.render("pages/page", {
    list,
    menu: createMenuObject("fish"),
    banner: {
      title: "Todos os peixes",
      background: "banner_fish.jpg",
    },
  })
}
