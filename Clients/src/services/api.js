const BASE_URL = "http://localhost:5000/api";

export const getHospitals = async () => {
  const res = await fetch(`${BASE_URL}/hospitals`);
  return res.json();
};