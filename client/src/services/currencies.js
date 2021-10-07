import api from "./config";

export const getAllCurrencies = async () => {
  const resp = await api.get("/currencies");
  return resp.data;
};

// export const searchCurrencies = async () => {
//   const resp = await api.post(`/search`);
//   return resp.data;
// };
