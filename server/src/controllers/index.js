const URL = "https://rickandmortyapi.com/api";

export const getAllCharacters = async (req, res) => {
  try {
    const response = await fetch(`${URL}/character`)
    res.json(await response.json())
    
  } catch (error) {
    res.status(500).json(error)    
  }
}

export const getNameFirstEpisodeCharacter = async (req, res) => {
  const { id } = req.params
  try {
    const response = await fetch(`${URL}/episode/${id}`)
    const  { name, url } = await response.json()
    res.json({name, url})
    
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

export const getCharactersByPage = async (req, res) => {
  const { page } = req.params
  try {
    const response = await fetch(`${URL}/character/?page=${page}`)
    res.json(await response.json())
    
  } catch (error) {
    res.status(500).json(error)    
  }
}
