import { Router } from 'express';
import * as controller from "../controllers/index.js";

const routes = Router()

routes.get("/locations", controller.getLocations)

routes.get("/detail-location/:id", controller.getDetailLocation)

routes.get("/characters", controller.getCharacters)

routes.get("/detail-character/:id", controller.getDetailCharacter)

export default routes;