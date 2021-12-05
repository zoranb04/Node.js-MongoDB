let residents = [
  {
    id: 1,
    name: "Janko Glavcev",
    hasCar: false,
    isBoomer: true,
  },
];

const getAllResidents = async () => {
  return residents;
};

const addNewResident = async (newResidentInfo) => {
  const newResident = {
    id: residents.length + 1,      // dali mozi samo id: id++  vrednosta na id da se inkrementira?
    name: newResidentInfo.name,
    hasCar: newResidentInfo.hasCar,
    isBoomer: newResidentInfo.isBoomer,
  };
  residents.push(newResident);
};

const editResident = async (_id, newInfo) => {
  residents = residents.map((resident) => {
    if (resident.id === id) {
      return {
        id: id,
        name: newInfo.name,
        hasCar: newInfo.hasCar,
        isBoomer: newInfo.isBoomer,
      };
    } else {
      return resident;
    }
  });
};

const deleteResident = async (_id) => {
  residents = residents.filter((resident) => resident.id !== id);
};

module.exports = {
  getAllResidents,
  addNewResident,
  editResident,
  deleteResident,
};
