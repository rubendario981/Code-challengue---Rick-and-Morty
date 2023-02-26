const URL = "https://rickandmortyapi.com/api";

export const getLocations = async (req, res) => {
  try {
    const response = await fetch(`${URL}/location`);    
    res.json( await response.json())
    
  } catch (error) {
    res.status(500).json(error)
  }
}

export const getDetailLocation = async (req, res) => {
  const { id } = req.params
  try {
    const response = await fetch(`${URL}/location/${id}`)
    res.json(await response.json())
    
  } catch (error) {
    res.status(500).json(error)
  }
}


export const getLocationsByPage = async (req, res) => {
  const { page } = req.params
  try {
    const response = await fetch(`${URL}/location/?page=${page}`)
    res.json(await response.json())
    
  } catch (error) {
    res.status(500).json(error)    
  }
}