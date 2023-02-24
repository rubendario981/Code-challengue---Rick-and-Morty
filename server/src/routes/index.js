import { Router } from 'express';
import * as controllerCharacters from "../controllers/index.js";
import * as controllerLocations from "../controllers/locations.js";
import * as controllerEpisodes from "../controllers/episodes.js";

const routes = Router()

routes.get("/locations", controllerLocations.getLocations)

routes.get("/detail-location/:id", controllerLocations.getDetailLocation)

routes.get("/characters", controllerCharacters.getCharacters)

routes.get("/first-episode/:id", controllerCharacters.getNameFirstEpisodeCharacter)

routes.get("/detail-character/:id", controllerCharacters.getDetailCharacter)

routes.get("/episodes", controllerEpisodes.getAllEpisodes)

routes.get("/episode/:id", controllerEpisodes.getDetailEpisode)


export default routes;