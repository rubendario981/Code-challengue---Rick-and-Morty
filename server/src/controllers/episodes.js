const URL = "https://rickandmortyapi.com/api";

export const getAllEpisodes = async (req, res) =>{
  try {
    const response = await fetch(`${URL}/episode`)
    res.json(await response.json())

  } catch (error) {
    res.status(500).json(error)
  }
}

export const getDetailEpisode = async (req, res)=>{
  const { id } = req.params;
  try {
    const response = await fetch(`${URL}/episode/${id}`);
    res.json(await response.json())

  } catch (error) {
    res.status(500).json();
  }
}