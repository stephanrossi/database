import { Router } from "express"
import * as PageController from "../controllers/petsController"
import * as SearchController from "../controllers/searchController"

const router = Router()

router.get("/", PageController.Home)
router.get("/dogs", PageController.Dogs)
router.get("/cats", PageController.Cats)
router.get("/fishes", PageController.Fishes)

router.get("/search", SearchController.Search)

export default router
