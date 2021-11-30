const planets =[
    {
    id:1,
    name: "Neptune",
    size: 76180,
    distanceFromSun: 44950
    },
    {
    id:2,
    name: "Mars",
    size: 145,
    distanceFromSun: 228
    }
]

const getAllPlanets = async (req, res, next) => {
    return res.status(200).json(planets);
}

const createPlanet = async (req, res, nest) => {
    const planetBody = req.body;
    const newPlanet = {
        id: id++,
        name: body.name,
        distanceFromSun: body.distanceFromSun
    }
    planets.push(newPlanet);
    return res.status(200).json("Planet added!");
}

const getPlanetById = async (req, res, next) => {
    const id = +req.params.id;
    const planet = planets.find((planet) => planet.id === id);
    if (planet) {
      return res.status(200).json(planet);
    } else {
      return res.status(400).json('Planet not found!');
    }
  };

const updatePlanet = async (req, res, next) => {
    const id = +req.params.id;
    const planetBody = req.body;
  
    if (!planetBody.name || !planetBody.size || !planetBody.distanceFromSun) {
      return res.status(400).json('Missing required fields!');
    }
    await Planet.editPlanet(id, planetBody);
  
    return res.status(200).json('Planet edited');
}

const deletePlanet = async (req, res, next) => {
    const id = +req.params.id;
    await Planet.deletePlanet(id);
    return res.status(200).json('Deleted planet');
}



module.exports = {
    getAllPlanets,
    createPlanet,
    getPlanetById,
    updatePlanet,
    deletePlanet
}