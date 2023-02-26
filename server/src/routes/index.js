import { Router } from 'express';
import * as controllerCharacters from "../controllers/index.js";
import * as controllerLocations from "../controllers/locations.js";
import * as controllerEpisodes from "../controllers/episodes.js";

const routes = Router()

/**ROUTES CHARACTERS */
routes.get("/characters", controllerCharacters.getAllCharacters)

routes.get("/detail-character/:id", controllerCharacters.getDetailCharacter)

routes.get("/characters-page/:page", controllerCharacters.getCharactersByPage)

routes.get("/first-episode/:id", controllerCharacters.getNameFirstEpisodeCharacter)

/**ROUTES LOCATIONS */
routes.get("/locations", controllerLocations.getLocations)

routes.get("/detail-location/:id", controllerLocations.getDetailLocation)

routes.get("/locations-page/:page", controllerLocations.getLocationsByPage)

/**ROUTES EPISODES */
routes.get("/episodes", controllerEpisodes.getAllEpisodes)

routes.get("/episode/:id", controllerEpisodes.getDetailEpisode)

routes.get("/episodes-page/:page", controllerEpisodes.getEpisodesByPage)

export default routes;