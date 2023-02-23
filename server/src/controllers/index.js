const URL = "https://rickandmortyapi.com/api";

export const getLocations = async (req, res) => {
  try {
    const response = await fetch(`${URL}/location`);    
    res.json( await response.json())
    
  } catch (error) {
    res.status(500).json(error)

  }
}

export const getCharacters = async (req, res) => {
  try {
    const response = await fetch(`${URL}/character`)
    res.json(await response.json())
    
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

export const getDetailCharacter = async (req, res) => {
  const { id } = req.params
  try {
    const response = await fetch(`${URL}/character/${id}`)
    res.json(await response.json())
    
  } catch (error) {
    res.status(500).json(error)
  }
}